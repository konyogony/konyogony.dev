#!/bin/bash
set -a
source "$(dirname "$0")/.env"
set +a

export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus

DISK_PATH="/dev/nvme0n1p6"
URL="http://api.konyogony.dev/put-stats"

disk_name=$(df | grep "$DISK_PATH" | awk '{print $1}')
disk_used=$(df | grep "$DISK_PATH" | awk '{print $3}')
disk_available=$(df | grep "$DISK_PATH" | awk '{print $4}')
disk_use_percentage=$(df | grep "$DISK_PATH" | awk '{print $5}')

current_time=$(uptime | sed 's/up.*//')
uptime_human=$(uptime -p)

ram_current=$(free -b | awk '/Mem:/ {print $3}')
ram_max=$(free -b | awk '/Mem:/ {print $2}')
ram_use_percentage=$(free -b | awk '/Mem:/ {printf "%.2f%%", $3/$2*100}')

uname_version=$(uname -r)
package_num=$(pacman -Q | wc -l)
cpu_temp=$(sensors | grep 'id 0:' | grep -oP '\+\K[0-9]+(\.[0-9]+)?°C' | head -1)

spotify_title=$(playerctl metadata --player=spotify xesam:title 2>/dev/null)
spotify_artist=$(playerctl metadata --player=spotify xesam:artist 2>/dev/null)

json=$(
    jq -n \
        --arg disk_name "$disk_name" \
        --argjson disk_used "$disk_used" \
        --argjson disk_available "$disk_available" \
        --arg disk_use_percentage "$disk_use_percentage" \
        --arg current_time "$current_time" \
        --arg uptime "$uptime_human" \
        --argjson ram_current "$ram_current" \
        --argjson ram_max "$ram_max" \
        --arg ram_use_percentage "$ram_use_percentage" \
        --arg uname "$uname_version" \
        --arg package_num "$package_num" \
        --arg cpu_temp "$cpu_temp" \
        --arg spotify_title "$spotify_title" \
        --arg spotify_artist "$spotify_artist" \
        '{
    disk: {
      name: $disk_name,
      used: $disk_used,
      available: $disk_available,
      use_percentage: $disk_use_percentage
    },
    uptime: {
      current_time: $current_time,
      uptime: $uptime
    },
    ram: {
      current: $ram_current,
      max: $ram_max,
      use_percentage: $ram_use_percentage
    },
    uname: $uname,
    package_num: $package_num,
    cpu_temp: $cpu_temp,
    spotify: {
      title: $spotify_title,
      artist: $spotify_artist
    }
  }'
)

curl -X POST \
    -H "Content-Type: application/json" \
    -H "x-api-key: $API_KEY" -d "$json" "$URL"
