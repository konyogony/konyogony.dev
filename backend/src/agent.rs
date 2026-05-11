use backend::{Disk, Ram, Spotify, Stats, Uptime};
use chrono::Utc;
use dotenv::dotenv;
#[cfg(feature = "agent")]
use mpris::PlayerFinder;
use reqwest::blocking::Client;
use std::{env, time::Instant};
use sysinfo::{Components, Disks, System};

fn format_duration(secs: u64) -> String {
    let days = secs / 86400;
    let hours = (secs % 86400) / 3600;
    let minutes = (secs % 3600) / 60;

    if days > 0 {
        format!("up {} days, {} hours, {} minutes", days, hours, minutes)
    } else if hours > 0 {
        format!("up {} hours, {} minutes", hours, minutes)
    } else {
        format!("up {} minutes", minutes)
    }
}

fn format_current_time() -> String {
    let output = std::process::Command::new("uptime")
        .output()
        .map(|o| String::from_utf8_lossy(&o.stdout).to_string())
        .unwrap_or_default();
    output.split("up").next().unwrap_or("").trim().to_string()
}

fn get_cpu_temp(components: &Components) -> String {
    let mut temp = 0.0;
    for component in components {
        let lbl = component.label().to_lowercase();
        if lbl.contains("k10temp") || lbl.contains("core") || lbl.contains("cpu") {
            temp = component.temperature();
            break;
        }
    }
    format!("{:.1}°C", temp)
}

fn get_packages() -> String {
    if let Ok(output) = std::process::Command::new("pacman").arg("-Q").output() {
        let count = String::from_utf8_lossy(&output.stdout).lines().count();
        count.to_string()
    } else {
        "0".to_string()
    }
}

fn get_uname() -> String {
    std::process::Command::new("uname")
        .arg("-r")
        .output()
        .map(|o| String::from_utf8_lossy(&o.stdout).trim().to_string())
        .unwrap_or_else(|_| "Unknown".to_string())
}

fn get_spotify_info() -> Spotify {
    let finder = PlayerFinder::new();
    if let Ok(finder) = finder
        && let Ok(player) = finder.find_by_name("spotify")
        && let Ok(metadata) = player.get_metadata()
    {
        let title = metadata.title().unwrap_or("").to_string();
        let artist = metadata.artists().map(|v| v.join(", ")).unwrap_or_default();
        let art_url = metadata.art_url().unwrap_or("").to_string();
        return Spotify {
            title,
            artist,
            art_url,
        };
    }

    Spotify {
        title: String::new(),
        artist: String::new(),
        art_url: String::new(),
    }
}

fn main() {
    dotenv().ok();

    let target_disk = env::var("DISK_PATH").unwrap_or_else(|_| "/dev/nvme0n1p6".to_string());
    let url = env::var("URL").unwrap_or_else(|_| "https://api.konyogony.dev/put-stats".to_string());
    let api_key = env::var("API_KEY").expect("API_KEY must be set in .env");

    let client = Client::new();
    let mut sys = System::new_all();
    let mut disks = Disks::new_with_refreshed_list();
    let mut components = Components::new_with_refreshed_list();

    sys.refresh_all();
    disks.refresh_list();
    disks.refresh();
    components.refresh_list();
    components.refresh();

    let mut disk_used = 0;
    let mut disk_available = 0;
    let mut disk_use_percentage = "0%".to_string();
    let mut disk_name = target_disk.clone();

    for disk in &disks {
        let name = disk.name().to_string_lossy().into_owned();
        if name == target_disk || disk.mount_point().to_string_lossy() == "/" {
            disk_name = target_disk.clone();
            let total = disk.total_space();
            disk_available = disk.available_space();
            disk_used = total.saturating_sub(disk_available);
            if total > 0 {
                disk_use_percentage =
                    format!("{}%", (disk_used as f64 / total as f64 * 100.0).round());
            }
            break;
        }
    }

    let ram_max = sys.total_memory();
    let ram_current = sys.used_memory();
    let ram_percentage = if ram_max > 0 {
        format!("{:.2}%", (ram_current as f64 / ram_max as f64) * 100.0)
    } else {
        "0%".to_string()
    };

    let stats = Stats {
        timestamp_ms: Utc::now().timestamp_millis(),
        disk: Disk {
            name: disk_name,
            used: disk_used,
            available: disk_available,
            use_percentage: disk_use_percentage,
        },
        uptime: Uptime {
            current_time: format_current_time(),
            uptime: format_duration(System::uptime()),
        },
        ram: Ram {
            current: ram_current,
            max: ram_max,
            use_percentage: ram_percentage,
        },
        uname: get_uname(),
        package_num: get_packages(),
        cpu_temp: get_cpu_temp(&components),
        spotify: get_spotify_info(),
    };

    match client
        .post(&url)
        .header("x-api-key", &api_key)
        .json(&stats)
        .send()
    {
        Ok(resp) => println!("Pushed stats, status: {}", resp.status()),
        Err(e) => eprintln!("Failed to push stats: {}", e),
    }
}
