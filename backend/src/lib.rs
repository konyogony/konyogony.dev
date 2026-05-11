use serde::{Deserialize, Serialize};

#[derive(Clone, Deserialize, Debug, Serialize)]
pub struct Disk {
    pub name: String,
    pub used: u64,
    pub available: u64,
    pub use_percentage: String,
}

#[derive(Clone, Deserialize, Debug, Serialize)]
pub struct Uptime {
    pub current_time: String,
    pub uptime: String,
}

#[derive(Clone, Deserialize, Debug, Serialize)]
pub struct Ram {
    pub current: u64,
    pub max: u64,
    pub use_percentage: String,
}

#[derive(Clone, Deserialize, Debug, Serialize)]
pub struct Spotify {
    pub title: String,
    pub artist: String,
    pub art_url: String,
}

#[derive(Clone, Deserialize, Debug, Serialize)]
pub struct Stats {
    pub timestamp_ms: u128,
    pub disk: Disk,
    pub uptime: Uptime,
    pub ram: Ram,
    pub uname: String,
    pub package_num: String,
    pub cpu_temp: String,
    pub spotify: Spotify,
}
