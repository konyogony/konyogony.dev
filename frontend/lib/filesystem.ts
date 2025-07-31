import { FsNode } from '@/lib/types';

export const filesystem: FsNode = {
    name: '/',
    type: 'directory',
    ownership: 'root/root',
    permissions: '0755/drwxr-xr-x',
    size: 4096,
    timestamp: {
        shortHand: 'Jul 7 14:30',
        access: '2025-07-11 16:10:01.435201480 +0700',
        modify: '2025-07-07 14:30:34.747759829 +0700',
        change: '2025-07-07 14:30:34.747759829 +0700',
        birth: '2024-09-05 20:07:26.000000000 +0700',
    },
    children: [
        {
            name: 'bin',
            type: 'file',
            ownership: 'root/root',
            permissions: 'lrwxrwxrwx',
            size: 7,
            timestamp: {
                shortHand: 'May 4 02:26',
            },
        },
        {
            name: 'boot',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 4096,
            timestamp: {
                shortHand: 'Jan 1 1970',
            },
        },
        {
            name: 'dev',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 4460,
            timestamp: {
                shortHand: 'Jul 11 2025',
            },
        },
        {
            name: 'etc',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 4096,
            timestamp: {
                shortHand: 'Jul 11 12:57',
            },
        },
        {
            name: 'home',
            type: 'directory',
            ownership: 'root/root',
            permissions: '0755/drwxr-xr-x',
            size: 4096,
            timestamp: {
                shortHand: 'Sep 5 2024',
                access: '2025-07-11 13:01:19.014682183 +0700',
                modify: '2024-09-05 20:13:54.206874357 +0700',
                change: '2024-09-05 20:13:54.206874357 +0700',
                birth: '2024-09-05 20:12:13.438896585 +0700',
            },
            children: [
                {
                    name: 'kony',
                    type: 'directory',
                    ownership: 'kony/kony',
                    permissions: '0700/drwx------',
                    size: 4096,
                    timestamp: {
                        shortHand: 'Jul 11 17:09',
                        access: '2025-07-11 17:09:44.154695929 +0700',
                        modify: '2025-07-11 17:09:44.134695077 +0700',
                        change: '2025-07-11 17:09:44.134695077 +0700',
                        birth: '2024-09-05 20:13:54.206874357 +0700',
                    },
                    children: [
                        {
                            name: 'a.out',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 0,
                            timestamp: {
                                shortHand: 'May 29 17:40',
                                access: '2025-05-29 17:40:23.361952608 +0700',
                                modify: '2025-05-29 17:40:23.361952608 +0700',
                                change: '2025-05-29 17:40:23.361952608 +0700',
                                birth: '2025-05-29 17:40:23.361952608 +0700',
                            },
                        },
                        {
                            name: '.bun',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 10 2024',
                            },
                        },
                        {
                            name: '.cache',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jul 8 17:05',
                            },
                        },
                        {
                            name: '.cargo',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jul 10 14:50',
                            },
                        },
                        {
                            name: '.config',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jun 9 20:18',
                            },
                        },
                        {
                            name: 'Desktop',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Dec 20 2024',
                                access: '2025-07-11 17:09:44.188697376 +0700',
                                modify: '2024-12-20 18:15:13.766682733 +0700',
                                change: '2024-12-20 18:15:13.766682733 +0700',
                                birth: '2024-09-05 20:42:39.722960912 +0700',
                            },
                            children: [
                                {
                                    name: 'code.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 441411,
                                    timestamp: {
                                        shortHand: 'Dec 20 2024',
                                    },
                                },
                            ],
                        },
                        {
                            name: 'dir_info.txt',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 9607,
                            timestamp: {
                                shortHand: 'Jul 11 17:09',
                                access: '2025-07-11 17:09:44.134695077 +0700',
                                modify: '2025-07-11 17:09:44.199697845 +0700',
                                change: '2025-07-11 17:09:44.199697845 +0700',
                                birth: '2025-07-11 17:09:44.134695077 +0700',
                            },
                        },
                        {
                            name: 'discord.sh',
                            type: 'file',
                            content: `#!/bin/bash
yes | paru -Syy discord-canary --needed

if paru -Q discord-canary &>/dev/null; then
    echo "Discord Canary installed successfully."
    vencord_url="https://github.com/Vendicated/VencordInstaller/releases/latest/download/VencordInstallerCli-Linux"
    vencord_path="$HOME/vencord_installer.sh"

    # Fetch latest modified date from remote
    latest_modified=$(curl -sI "$vencord_url" | grep -i "last-modified" | cut -d' ' -f2-)

    # Check local file exists before comparing
    if [ -f "$vencord_path" ]; then
        local_modified=$(stat -c "%y" "$vencord_path" | cut -d' ' -f1-2)
    else
        local_modified=""
    fi

    if [ "$local_modified" != "$latest_modified" ]; then
        curl -L -o "$vencord_path" "$vencord_url"
        chmod +x "$vencord_path"
    fi

    sudo "$vencord_path" -install -branch canary
    echo "Vencord repair completed."

    # Modify the .desktop file
    desktop_file="/usr/share/applications/discord-canary.desktop"
    if [ -f "$desktop_file" ]; then
        echo "Patching .desktop file..."

        # Backup the original first
        sudo cp "$desktop_file" "\${desktop_file}.bak"

        # Only add --disable-gpu if it's not already there
        if ! grep -q -- '--disable-gpu' "$desktop_file"; then
            sudo sed -i 's|^\\(Exec=.*\\)$|\\1 --disable-gpu|' "$desktop_file"
            echo "--disable-gpu flag added to Exec line."
        else
            echo "--disable-gpu already present in Exec line."
        fi
    else
        echo "Desktop file not found at $desktop_file"
    fi
else
    echo "Discord Canary installation failed. Please check your setup."
    exit 1
fi`,
                            ownership: 'kony/kony',
                            permissions: '0755/-rwxr-xr-x',
                            size: 1650,
                            timestamp: {
                                shortHand: 'Apr 18 21:00',
                                access: '2025-07-10 15:30:03.700975919 +0700',
                                modify: '2025-04-18 21:00:03.493548233 +0700',
                                change: '2025-04-18 21:00:03.493548233 +0700',
                                birth: '2025-04-18 21:00:03.492548189 +0700',
                            },
                        },
                        {
                            name: '.docker',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jun 13 19:25',
                            },
                        },
                        {
                            name: 'Documents',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'May 28 22:26',
                                access: '2025-07-11 13:01:19.014682183 +0700',
                                modify: '2025-05-28 22:26:37.551374297 +0700',
                                change: '2025-05-28 22:26:37.551374297 +0700',
                                birth: '2024-09-05 20:42:39.722960912 +0700',
                            },
                            children: [
                                {
                                    name: 'GitHub',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Jun 26 15:53',
                                    },
                                },
                            ],
                        },
                        {
                            name: '.dotfiles',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'May 30 14:18',
                            },
                        },
                        {
                            name: 'Downloads',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jul 11 15:07',
                                access: '2025-07-11 17:09:44.215698526 +0700',
                                modify: '2025-07-11 15:07:31.059805042 +0700',
                                change: '2025-07-11 15:07:31.059805042 +0700',
                                birth: '2024-09-05 20:42:39.722960912 +0700',
                            },
                            children: [
                                {
                                    name: '2025-02-03-2.log',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    content: `[13:01:40] [ServerMain/INFO]: [bootstrap] Running Java 21 (OpenJDK 64-Bit Server VM 21.0.3+9-LTS; Eclipse Adoptium Temurin-21.0.3+9) on Linux 5.15.0-102-generic (amd64)
[13:01:40] [ServerMain/INFO]: [bootstrap] Loading Leaf 1.21.4-DEV-dev/1.21.4@b8e2c88 (2025-01-24T20:01:09Z) for Minecraft 1.21.4
[13:01:41] [ServerMain/INFO]: [PluginInitializerManager] Initializing plugins...
[13:01:42] [ServerMain/INFO]: [PluginInitializerManager] Initialized 14 plugins
[13:01:42] [ServerMain/INFO]: [PluginInitializerManager] Paper plugins (2):
 - SquidCubed (1.0.0), pv-addon-sounds (1.0.0)
[13:01:42] [ServerMain/INFO]: [PluginInitializerManager] Bukkit plugins (12):
 - AntiPopup (10.1), CommandAPI (9.7.0), Essentials (2.21.0-dev+155-803771e), PhysicsControl (1.2.2), PlasmoVoice (2.1.3+088acfc-SNAPSHOT), SkinsRestorer (15.5.2-SNAPSHOT), VoidGen (2.2.1), WorldEdit (7.3.10+7004-768a436), WorldEditSUI (1.7.4), fakeplayer (0.3.13), packetevents (2.7.0), pv-addon-hide-icons (1.0.0-SNAPSHOT)
[13:01:45] [ServerMain/INFO]: [LeafConfig] Loading config...
[13:01:45] [ServerMain/WARN]: [LeafConfig] You enabled faster random generator, it will offset location of slime chunk
[13:01:45] [ServerMain/WARN]: [LeafConfig] If your server has slime farms or facilities need vanilla slime chunk,
[13:01:45] [ServerMain/WARN]: [LeafConfig] set performance.faster-random-generator.use-legacy-random-for-slime-chunk to true to use LegacyRandomSource for slime chunk generation.
[13:01:45] [ServerMain/WARN]: [LeafConfig] Set performance.faster-random-generator.warn-for-slime-chunk to false to disable this warning.
[13:01:45] [ServerMain/INFO]: [LeafConfig] Using 1 threads for Async Entity Tracker
[13:01:45] [ServerMain/INFO]: [LeafConfig] Using 1 threads for Async Pathfinding
[13:01:45] [ServerMain/WARN]: [LeafConfig] You have following experimental module(s) enabled: [AsyncPlayerDataSave], please report any bugs you found!
[13:01:45] [ServerMain/INFO]: [LeafConfig] Successfully loaded config in 48ms.
[13:01:45] [ServerMain/INFO]: Environment: Environment[sessionHost=https://sessionserver.mojang.com, servicesHost=https://api.minecraftservices.com, name=PROD]
[13:01:46] [ServerMain/INFO]: Loaded 1370 recipes
[13:01:46] [ServerMain/INFO]: Loaded 1481 advancements
[13:01:46] [ServerMain/INFO]: [MCTypeRegistry] Initialising converters for DataConverter...
[13:01:46] [ServerMain/INFO]: [MCTypeRegistry] Finished initialising converters for DataConverter in 178.5ms
[13:01:46] [Server thread/INFO]: Starting minecraft server version 1.21.4
[13:01:46] [Server thread/INFO]: Loading properties
[13:01:46] [Server thread/INFO]: This server is running Leaf version 1.21.4-DEV-dev/1.21.4@b8e2c88 (2025-01-24T20:01:09Z) (Implementing API version 1.21.4-R0.1-SNAPSHOT)
[13:01:46] [Server thread/INFO]: [spark] This server bundles the spark profiler. For more information please visit https://docs.papermc.io/paper/profiling
[13:01:46] [Server thread/INFO]: Server Ping Player Sample Count: 12
[13:01:46] [Server thread/INFO]: Using 4 threads for Netty based IO
[13:01:47] [Server thread/INFO]: [MoonriseCommon] Paper is using 1 worker threads, 1 I/O threads
[13:01:47] [Server thread/INFO]: [ChunkTaskScheduler] Chunk system is using population gen parallelism: true
[13:01:47] [Server thread/INFO]: Default game type: SURVIVAL
[13:01:47] [Server thread/INFO]: Generating keypair
[13:01:47] [Server thread/INFO]: Starting Minecraft server on 0.0.0.0:25595
[13:01:47] [Server thread/INFO]: Using epoll channel type
[13:01:47] [Server thread/INFO]: Paper: Using libdeflate (Linux x86_64) compression from Velocity.
[13:01:47] [Server thread/INFO]: Paper: Using OpenSSL 3.x.x (Linux x86_64) cipher from Velocity.
[13:01:48] [Server thread/INFO]: [PlasmoVoice] Loading server plugin PlasmoVoice v2.1.3+088acfc-SNAPSHOT
[13:01:48] [Server thread/INFO]: [WorldEdit] Loading server plugin WorldEdit v7.3.10+7004-768a436
[13:01:48] [Server thread/INFO]: Got request to register class com.sk89q.worldedit.bukkit.BukkitServerInterface with WorldEdit [com.sk89q.worldedit.extension.platform.PlatformManager@75ddb73]
[13:01:48] [Server thread/INFO]: [SkinsRestorer] Loading server plugin SkinsRestorer v15.5.2-SNAPSHOT
[13:01:48] [Server thread/INFO]: [CommandAPI] Loading server plugin CommandAPI v9.7.0
[13:01:48] [Server thread/INFO]: [CommandAPI] Loaded platform NMS_1_21_R3 > NMS_Common > CommandAPIBukkit
[13:01:48] [Server thread/INFO]: [CommandAPI] Hooked into Spigot successfully for Chat/ChatComponents
[13:01:48] [Server thread/INFO]: [CommandAPI] Hooked into Adventure for AdventureChat/AdventureChatComponents
[13:01:48] [Server thread/INFO]: [CommandAPI] Hooked into Paper for paper-specific API implementations
[13:01:48] [Server thread/INFO]: [PhysicsControl] Loading server plugin PhysicsControl v1.2.2
[13:01:48] [Server thread/INFO]: [pv-addon-hide-icons] Loading server plugin pv-addon-hide-icons v1.0.0-SNAPSHOT
[13:01:48] [Server thread/INFO]: [WorldEditSUI] Loading server plugin WorldEditSUI v1.7.4
[13:01:48] [Server thread/INFO]: [pv-addon-sounds] Loading server plugin pv-addon-sounds v1.0.0
[13:01:48] [Server thread/INFO]: [Essentials] Loading server plugin Essentials v2.21.0-dev+155-803771e
[13:01:48] [Server thread/INFO]: [AntiPopup] Loading server plugin AntiPopup v10.1
[13:01:50] [Server thread/INFO]: [AntiPopup] Loaded PacketEvents.
[13:01:50] [Server thread/INFO]: [SquidCubed] Loading server plugin SquidCubed v1.0.0
[13:01:50] [Server thread/INFO]: [VoidGen] Loading server plugin VoidGen v2.2.1
[13:01:50] [Server thread/INFO]: [packetevents] Loading server plugin packetevents v2.7.0
[13:01:52] [Server thread/INFO]: [fakeplayer] Loading server plugin fakeplayer v0.3.13
[13:01:52] [Server thread/INFO]: Server permissions file permissions.yml is empty, ignoring it
[13:01:52] [Server thread/INFO]: [PlasmoVoice] Enabling PlasmoVoice v2.1.3+088acfc-SNAPSHOT
[13:01:52] [Server thread/INFO]: [pv-addon-sounds] Addon initialized
[13:01:52] [Server thread/INFO]: [PlasmoVoice] pv-addon-sounds v1.0.0 by PadowYT2 loaded
[13:01:52] [Server thread/INFO]: [PlasmoVoice] pv-addon-hide-icons v1.0.0-SNAPSHOT by Apehum loaded
[13:01:52] [Server thread/INFO]: [PlasmoVoice] UDP server is started on /[0:0:0:0:0:0:0:0]:25595
[13:01:52] [Server thread/INFO]: [WorldEdit] Enabling WorldEdit v7.3.10+7004-768a436
[13:01:52] [Server thread/INFO]: Registering commands with com.sk89q.worldedit.bukkit.BukkitServerInterface
[13:01:52] [Server thread/INFO]: WEPIF: Using the Bukkit Permissions API.
[13:01:53] [Server thread/INFO]: Using com.sk89q.worldedit.bukkit.adapter.impl.v1_21_4.PaperweightAdapter as the Bukkit adapter
[13:01:53] [Server thread/INFO]: [SkinsRestorer] Enabling SkinsRestorer v15.5.2-SNAPSHOT
[13:01:54] [Server thread/WARN]: [SkinsRestorer] You must agree to the rules at 'commands.perSkinPermissionsConsent' in the config to use per skin permissions.
[13:01:54] [Server thread/INFO]: [SkinsRestorer] Running on Minecraft 1.21.4.
[13:01:54] [Server thread/INFO]: [SkinsRestorer] Using paper join listener!
[13:01:54] [Server thread/INFO]: [pv-addon-hide-icons] Enabling pv-addon-hide-icons v1.0.0-SNAPSHOT
[13:01:54] [Server thread/INFO]: [VoidGen] Enabling VoidGen v2.2.1
[13:01:54] [Server thread/WARN]: **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE!
[13:01:54] [Server thread/WARN]: The server will make no attempt to authenticate usernames. Beware.
[13:01:54] [Server thread/WARN]: While this makes the game possible to play without internet access, it also opens up the ability for hackers to connect with any username they choose.
[13:01:54] [Server thread/WARN]: To change this, set "online-mode" to "true" in the server.properties file.
[13:01:54] [Server thread/INFO]: Preparing level "world"
[13:01:54] [Server thread/INFO]: [VoidGen] Generator settings have not been set. Using default values:
[13:01:54] [Server thread/INFO]: [VoidGen] {"caves":false,"decoration":false,"mobs":false,"structures":false,"noise":false,"surface":false,"bedrock":false}
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer] ----------------------------------------------
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer]     +==================+
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer]     |   SkinsRestorer  |
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer]     |------------------|
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer]     |  Standalone Mode |
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer]     +==================+
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer] ----------------------------------------------
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer]     Version: 15.5.2-SNAPSHOT
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer]     Commit: c8dd76c
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer]     This is the latest version!
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer] ----------------------------------------------
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer] Do you have issues? Read our troubleshooting guide: https://skinsrestorer.net/docs/troubleshooting
[13:01:54] [Folia Async Scheduler Thread #1/INFO]: [SkinsRestorer] Want to support SkinsRestorer? Consider donating: https://skinsrestorer.net/donate
[13:01:55] [Server thread/INFO]: Preparing start region for dimension minecraft:overworld
[13:01:55] [Server thread/INFO]: Preparing spawn area: 0%
[13:01:55] [Server thread/INFO]: Time elapsed: 256 ms
[13:01:55] [Server thread/INFO]: [CommandAPI] Enabling CommandAPI v9.7.0
[13:01:55] [Server thread/INFO]: [CommandAPI] Hooked into Paper ServerResourcesReloadedEvent
[13:01:55] [Server thread/INFO]: [PhysicsControl] Enabling PhysicsControl v1.2.2
[13:01:55] [Server thread/INFO]: [WorldEditSUI] Enabling WorldEditSUI v1.7.4
[13:01:55] [Server thread/INFO]: [pv-addon-sounds] Enabling pv-addon-sounds v1.0.0
[13:01:55] [Server thread/INFO]: [CommandAPI] Loaded platform NMS_1_21_R3 > NMS_Common > CommandAPIBukkit
[13:01:55] [Server thread/INFO]: [CommandAPI] Hooked into Spigot successfully for Chat/ChatComponents
[13:01:55] [Server thread/INFO]: [CommandAPI] Hooked into Adventure for AdventureChat/AdventureChatComponents
[13:01:55] [Server thread/INFO]: [CommandAPI] Hooked into Paper for paper-specific API implementations
[13:01:55] [Server thread/INFO]: [CommandAPI] Hooked into Paper ServerResourcesReloadedEvent
[13:01:55] [Server thread/INFO]: [Essentials] Enabling Essentials v2.21.0-dev+155-803771e
[13:01:56] [Server thread/INFO]: [Essentials] Attempting to convert old kits in config.yml to new kits.yml
[13:01:56] [Server thread/INFO]: [Essentials] No kits found to migrate.
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.21+ InventoryView Interface ABI Provider as the provider for InventoryViewProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Reflection Online Mode Provider as the provider for OnlineModeProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Paper Known Commands Provider as the provider for KnownCommandsProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Paper Biome Key Provider as the provider for BiomeKeyProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.12.2+ Player Locale Provider as the provider for PlayerLocaleProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.11+ Item Unbreakable Provider as the provider for ItemUnbreakableProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.13+ Spawn Egg Provider as the provider for SpawnEggProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Paper Serialization Provider as the provider for SerializationProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.20.5+ Banner Data Provider as the provider for BannerDataProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.20.4+ Damage Event Provider as the provider for DamageEventProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.17.1+ World Info Provider as the provider for WorldInfoProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Paper Material Tag Provider as the provider for MaterialTagProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.14.4+ Persistent Data Container Provider as the provider for PersistentDataProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.8.3+ Spawner Item Provider as the provider for SpawnerItemProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Reflection Sync Commands Provider as the provider for SyncCommandsProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Reflection Formatted Command Alias Provider as the provider for FormattedCommandAliasProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Paper Server State Provider as the provider for ServerStateProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.14+ Sign Data Provider as the provider for SignDataProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected 1.20.6+ Potion Meta Provider as the provider for PotionMetaProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Paper Container Provider as the provider for ContainerProvider
[13:01:56] [Server thread/INFO]: [Essentials] Selected Reflection Spawner Block Provider as the provider for SpawnerBlockProvider
[13:01:56] [Server thread/INFO]: [Essentials] Loaded 43465 items from items.json.
[13:01:56] [Server thread/INFO]: [Essentials] Using locale en_US
[13:01:56] [Server thread/INFO]: [Essentials] ServerListPingEvent: Spigot iterator API
[13:01:56] [Server thread/INFO]: [Essentials] Starting Metrics. Opt-out using the global bStats config.
[13:01:56] [Server thread/INFO]: [Essentials] Using superperms-based permissions.
[13:01:56] [Server thread/INFO]: [AntiPopup] Enabling AntiPopup v10.1
[13:01:56] [Server thread/INFO]: [AntiPopup] Config enabled.
[13:01:56] [Server thread/INFO]: [AntiPopup] Initiated PacketEvents.
[13:01:56] [Server thread/INFO]: [AntiPopup] Hooked on 1.21.4
[13:01:56] [Server thread/INFO]: [AntiPopup] Commands registered.
[13:01:56] [Server thread/INFO]: [AntiPopup] Logger filter enabled.
[13:01:56] [Server thread/INFO]: [SquidCubed] Enabling SquidCubed v1.0.0
[13:01:56] [Server thread/INFO]: [CommandAPI] Loaded platform NMS_1_21_R3 > NMS_Common > CommandAPIBukkit
[13:01:56] [Server thread/INFO]: [CommandAPI] Hooked into Spigot successfully for Chat/ChatComponents
[13:01:56] [Server thread/INFO]: [CommandAPI] Hooked into Adventure for AdventureChat/AdventureChatComponents
[13:01:56] [Server thread/INFO]: [CommandAPI] Hooked into Paper for paper-specific API implementations
[13:01:56] [Server thread/INFO]: [CommandAPI] Hooked into Paper ServerResourcesReloadedEvent
[13:01:56] [Server thread/INFO]: [packetevents] Enabling packetevents v2.7.0
[13:01:56] [packetevents-update-check-thread/INFO]: [packetevents] Checking for updates, please wait...
[13:01:56] [Server thread/INFO]: [fakeplayer] Enabling fakeplayer v0.3.13
[13:01:56] [packetevents-update-check-thread/INFO]: [packetevents] You are running the latest release of PacketEvents. Your build: (2.7.0)
[13:01:57] [Server thread/INFO]: [com.zaxxer.hikari.HikariDataSource] fakeplayer-datasource - Starting...
[13:01:57] [Server thread/INFO]: [com.zaxxer.hikari.pool.HikariPool] fakeplayer-datasource - Added connection org.sqlite.jdbc4.JDBC4Connection@2b4164fa
[13:01:57] [Server thread/INFO]: [com.zaxxer.hikari.HikariDataSource] fakeplayer-datasource - Start completed.
[13:01:57] [Server thread/INFO]: [fakeplayer] Using simple invsee implement
[13:01:57] [Server thread/INFO]: [fakeplayer] Enabled in 4790 ms
[13:01:57] [Server thread/INFO]: [spark] Starting background profiler...
[13:01:57] [Server thread/INFO]: Done preparing level "world" (2.867s)
[13:01:57] [Server thread/INFO]: Running delayed init tasks
[13:01:57] [Server thread/INFO]: [CommandAPI] Reloading datapacks...
[13:01:57] [Craft Scheduler Thread - 0 - Essentials/INFO]: [Essentials] Fetching version information...
[13:01:57] [WebSocketConnectReadThread-111/INFO]: [SquidCubed] new connection opened
[13:01:57] [Server thread/INFO]: Loaded 1370 recipes
[13:01:57] [Server thread/INFO]: Loaded 1481 advancements
[13:01:57] [Server thread/INFO]: [CommandAPI] Finished reloading datapacks
[13:01:57] [Server thread/INFO]: [CommandAPI] Reloading datapacks...
[13:01:57] [Server thread/INFO]: Loaded 1370 recipes
[13:01:57] [Server thread/INFO]: Loaded 1481 advancements
[13:01:57] [Server thread/INFO]: [CommandAPI] Finished reloading datapacks
[13:01:58] [Server thread/INFO]: [CommandAPI] Reloading datapacks...
[13:01:58] [Server thread/INFO]: Loaded 1370 recipes
[13:01:58] [Server thread/INFO]: Loaded 1481 advancements
[13:01:58] [Server thread/INFO]: [CommandAPI] Finished reloading datapacks
[13:01:58] [Server thread/INFO]: Done (17.917s)! For help, type "help"
[13:01:58] [Craft Scheduler Thread - 0 - Essentials/WARN]: [Essentials] You're 9 EssentialsX dev build(s) out of date!
[13:01:58] [Craft Scheduler Thread - 0 - Essentials/WARN]: [Essentials] Download it here: https://essentialsx.net/downloads.html
[13:02:00] [User Authenticator #0/INFO]: UUID of player kony_ogony is 082c7470-7ce3-3551-9542-7839471041ef
[13:02:03] [Server thread/INFO]: kony_ogony joined the game
[13:02:03] [Server thread/INFO]: kony_ogony[/171.6.237.166:33958] logged in with entity id 1 at ([world]1006.7670452080436, 104.49381273525678, 945.0762432168981)
[13:02:16] [Server thread/INFO]: kony_ogony issued server command: /fakeplayer spawn 2 minecraft:overworld ~ ~ ~ 2
[13:02:23] [Server thread/INFO]: kony_ogony issued server command: /spawn 50 false 100
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_2 is 307304a3-7fc3-4153-b91a-9a76952d24b7
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_3 is e4ec6d4c-ed99-4204-bc4b-4d57c59eab2d
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_1 is 7735dcc3-384d-443c-9cee-6486941b74fa
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_4 is 5b854ec7-adb2-4e5f-bf91-04def72f7d96
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_6 is 02df0d65-b6db-4494-bb67-71409ea78679
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_5 is f382d0ed-e473-4938-be7f-98d40808df38
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_7 is 56afee5f-2995-497e-99a7-36f5cabcee4d
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_8 is fe46d3c0-6705-4957-b5a2-ca4e62d062e4
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_10 is 5e13dfc2-622e-4788-a7f4-80cb56d3baf4
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_12 is 3b83ef9e-1f9b-40fc-8292-3ddc615646d4
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_11 is 8e17d1a1-8c2b-4e11-a044-a5dde285cd1a
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_9 is 3b82f617-d695-4442-aa3a-8b8c64ea01db
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_13 is dd978d28-109c-4b33-a196-cff6bfe4a7da
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_14 is e3700313-2d0c-40f2-b18d-3550759bd193
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_15 is 5449bf6d-c444-4678-8e0a-512d0e5b3d5a
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_16 is 93f1639c-5c18-4df8-84c6-ec8779875d0b
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_17 is 47b048e6-8a9e-454f-808e-cbe946ad14bc
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_18 is ea164198-ec19-4b90-ac61-4afdef0a673b
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_19 is 8c974dc8-43be-4818-ad1a-b729a12fd988
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_21 is 67377509-a6e2-43ef-b704-30234ca2899b
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_20 is 32021e83-3e8f-4cee-95e1-b0a070823ede
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_22 is 5cc227f7-a860-4168-b517-b8290caeeab3
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_23 is 3ea69f9f-5d15-407d-89d1-f69b384d4203
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_24 is 9fe893ce-e76a-433f-9240-dbbabc6ade6e
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_25 is a036248a-7939-4deb-89a8-f446f6bab47f
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_27 is abf7a7f8-7415-4afa-8bae-f6be0cd4fc5a
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_26 is 011291bc-c051-4c6e-ac30-a492d5e177d7
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_28 is 84db4487-bc17-4f7e-ac72-bd5034a57907
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_29 is 78a2a181-a632-4dba-b319-fd0b48cfe673
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_30 is 7c8d87d6-2923-4aa4-9f6a-8b96e4c885d8
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_31 is bc935357-7ab5-41c3-a8ec-e4ee9fd50ee6
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_32 is b2fbea8d-4094-4781-bd0b-52e58d1e4ba9
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_34 is 94c4f419-fae7-4974-b604-bbda732dfa2b
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_33 is 51a5c73e-6ca3-4b6a-a454-ddeb5d9b4489
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_36 is 7de54fc9-5dcd-4d72-95f7-d7ece2173022
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_37 is 23f01150-1422-4f2e-86c0-12a8ee2e1298
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_35 is f1f6c2d6-099c-4bd5-a13a-f2d68b92eac2
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_39 is 4589bddb-80f2-4790-b17f-8933c71041d0
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_38 is 27ee26dd-0e61-4034-970b-1824e5279e72
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_40 is 3e138e0c-7b8b-4179-942a-ac75763fef4f
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_41 is 3f29c7bb-c55c-4749-9fb2-a3244f71ed1e
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_42 is d11cbd89-cf0b-406f-af0f-cac6f25086df
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_43 is 5bcb60fa-63bc-4d7e-92c5-ed103880aa25
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_44 is 426c966b-9adc-40a6-a721-96e2ad70ab64
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_46 is add5d0b9-0dc2-4a2a-b38c-b007d1ee8e10
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_45 is 9f38e3e4-0a84-49f0-ad81-9a946fcf604e
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_47 is 1cf3fff0-593f-4291-824e-afea097561e3
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_48 is a508bb8f-9a52-4879-96f5-09efb427a24d
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_49 is 91483825-af2e-4eef-9020-93ba72e2d50a
[13:02:23] [Server thread/INFO]: [fakeplayer] UUID of fake player PadowYT2_50 is 1f8336f7-c101-4e4b-b61e-1c708b2fc1de
[13:02:23] [Server thread/INFO]: Environment: Environment[sessionHost=https://sessionserver.mojang.com, servicesHost=https://api.minecraftservices.com, name=PROD]
[13:02:23] [Server thread/INFO]: PadowYT2_2 joined the game
[13:02:23] [Server thread/INFO]: PadowYT2_2[/127.0.0.1:25565] logged in with entity id 10 at ([world]1008.4862672917172, 100.0, 948.1367934023405)
[13:02:24] [Server thread/INFO]: PadowYT2_3 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_3[/127.0.0.2:25565] logged in with entity id 11 at ([world]1007.7140095029907, 100.0, 948.3385391659676)
[13:02:24] [Server thread/INFO]: PadowYT2_4 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_4[/127.0.0.4:25565] logged in with entity id 13 at ([world]1007.7370668800794, 100.0, 946.957159407444)
[13:02:24] [Server thread/INFO]: PadowYT2_6 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_6[/127.0.0.5:25565] logged in with entity id 14 at ([world]1006.9547584966609, 100.0, 947.0211790801205)
[13:02:24] [Server thread/INFO]: PadowYT2_1 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_1[/127.0.0.3:25565] logged in with entity id 12 at ([world]1007.0588328417315, 100.0, 948.308602688359)
[13:02:24] [Server thread/INFO]: PadowYT2_7 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_7[/127.0.0.7:25565] logged in with entity id 16 at ([world]1007.5742799196031, 100.0, 947.6141427987901)
[13:02:24] [Server thread/INFO]: PadowYT2_5 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_5[/127.0.0.6:25565] logged in with entity id 15 at ([world]1006.8891369400206, 100.0, 947.6337199856362)
[13:02:24] [Server thread/INFO]: PadowYT2_10 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_10[/127.0.0.9:25565] logged in with entity id 18 at ([world]1006.7352131608002, 100.0, 949.0404153025697)
[13:02:24] [Server thread/INFO]: PadowYT2_8 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_8[/127.0.0.8:25565] logged in with entity id 17 at ([world]1007.1961633475403, 100.0, 941.466191681648)
[13:02:24] [Server thread/INFO]: PadowYT2_12 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_12[/127.0.0.10:25565] logged in with entity id 19 at ([world]1007.6040290631494, 100.0, 949.7530449283785)
[13:02:24] [Server thread/INFO]: PadowYT2_13 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_13[/127.0.0.13:25565] logged in with entity id 22 at ([world]1005.6571749800414, 100.0, 947.1652764929245)
[13:02:24] [Server thread/INFO]: PadowYT2_11 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_11[/127.0.0.11:25565] logged in with entity id 20 at ([world]1006.2803325605302, 100.0, 940.4118611633747)
[13:02:24] [Server thread/INFO]: PadowYT2_9 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_9[/127.0.0.12:25565] logged in with entity id 21 at ([world]1007.9236051726364, 100.0, 949.0018203739284)
[13:02:24] [Server thread/INFO]: PadowYT2_14 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_14[/127.0.0.14:25565] logged in with entity id 23 at ([world]1011.3204702446146, 100.0, 938.6037518481537)
[13:02:24] [Server thread/INFO]: PadowYT2_15 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_15[/127.0.0.15:25565] logged in with entity id 24 at ([world]1009.2637033783961, 100.0, 952.6517308479544)
[13:02:24] [Server thread/INFO]: PadowYT2_18 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_18[/127.0.0.18:25565] logged in with entity id 27 at ([world]1011.6553450066145, 100.0, 953.2539115012019)
[13:02:24] [Server thread/INFO]: PadowYT2_16 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_16[/127.0.0.16:25565] logged in with entity id 25 at ([world]1006.2854320085053, 100.0, 947.2213894923959)
[13:02:24] [Server thread/INFO]: PadowYT2_17 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_17[/127.0.0.17:25565] logged in with entity id 26 at ([world]1011.6222716357555, 100.0, 952.2707582203994)
[13:02:24] [Server thread/INFO]: PadowYT2_19 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_19[/127.0.0.19:25565] logged in with entity id 28 at ([world]1006.1946313591778, 100.0, 932.7813370704345)
[13:02:24] [Server thread/INFO]: PadowYT2_21 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_21[/127.0.0.20:25565] logged in with entity id 29 at ([world]1010.041866579641, 100.0, 947.427987405194)
[13:02:24] [Server thread/INFO]: PadowYT2_23 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_23[/127.0.0.23:25565] logged in with entity id 32 at ([world]1005.6048364404007, 100.0, 946.4203319906493)
[13:02:24] [Server thread/INFO]: PadowYT2_20 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_20[/127.0.0.21:25565] logged in with entity id 30 at ([world]1009.1790482623924, 100.0, 948.1900963174506)
[13:02:24] [Server thread/INFO]: PadowYT2_22 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_22[/127.0.0.22:25565] logged in with entity id 31 at ([world]1010.6999999880791, 100.0, 946.0458844169789)
[13:02:24] [Server thread/INFO]: PadowYT2_24 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_24[/127.0.0.24:25565] logged in with entity id 33 at ([world]1009.8453875788962, 100.0, 944.0685893880678)
[13:02:24] [Server thread/INFO]: PadowYT2_25 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_25[/127.0.0.25:25565] logged in with entity id 34 at ([world]1010.3464098095693, 100.0, 950.2174188287862)
[13:02:24] [Server thread/INFO]: PadowYT2_26 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_26[/127.0.0.27:25565] logged in with entity id 36 at ([world]1002.190862389684, 100.0, 941.5384516666803)
[13:02:24] [Server thread/INFO]: PadowYT2_28 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_28[/127.0.0.28:25565] logged in with entity id 37 at ([world]1007.6722337240502, 100.0, 946.3505934036181)
[13:02:24] [Server thread/INFO]: PadowYT2_27 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_27[/127.0.0.26:25565] logged in with entity id 35 at ([world]1010.3631384325676, 100.0, 945.3839638922083)
[13:02:24] [Server thread/INFO]: PadowYT2_29 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_29[/127.0.0.29:25565] logged in with entity id 38 at ([world]1009.2421159521892, 100.0, 943.9497282677435)
[13:02:24] [Server thread/INFO]: PadowYT2_30 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_30[/127.0.0.30:25565] logged in with entity id 39 at ([world]1012.4330619533313, 100.0, 949.7061989248313)
[13:02:24] [Server thread/INFO]: PadowYT2_31 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_31[/127.0.0.31:25565] logged in with entity id 40 at ([world]1009.8065510445266, 100.0, 944.7405145960824)
[13:02:24] [Server thread/INFO]: PadowYT2_33 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_33[/127.0.0.34:25565] logged in with entity id 43 at ([world]1009.6429480771842, 100.0, 949.5841622555308)
[13:02:24] [Server thread/INFO]: PadowYT2_34 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_34[/127.0.0.33:25565] logged in with entity id 42 at ([world]1011.3027472001673, 100.0, 949.5626978898259)
[13:02:24] [Server thread/INFO]: PadowYT2_32 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_32[/127.0.0.32:25565] logged in with entity id 41 at ([world]1010.053454822487, 100.0, 946.6570247939491)
[13:02:24] [Server thread/INFO]: PadowYT2_36 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_36[/127.0.0.35:25565] logged in with entity id 44 at ([world]1011.4131689807128, 100.0, 950.2451155233603)
[13:02:24] [Server thread/INFO]: PadowYT2_37 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_37[/127.0.0.36:25565] logged in with entity id 45 at ([world]1002.5287754598618, 100.0, 940.8200047776274)
[13:02:24] [Server thread/INFO]: PadowYT2_35 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_35[/127.0.0.37:25565] logged in with entity id 46 at ([world]1010.653560748549, 100.0, 949.3331921363047)
[13:02:24] [Server thread/INFO]: PadowYT2_39 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_39[/127.0.0.38:25565] logged in with entity id 47 at ([world]1006.9475041940414, 100.0, 946.3295776415121)
[13:02:24] [Server thread/INFO]: PadowYT2_38 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_38[/127.0.0.39:25565] logged in with entity id 48 at ([world]1008.7806934668157, 100.0, 943.1870514766704)
[13:02:24] [Server thread/INFO]: PadowYT2_40 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_40[/127.0.0.40:25565] logged in with entity id 49 at ([world]1011.8642422965484, 100.0, 948.379356117975)
[13:02:24] [Server thread/INFO]: PadowYT2_41 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_41[/127.0.0.41:25565] logged in with entity id 50 at ([world]1009.253093400816, 100.0, 948.8886932823956)
[13:02:24] [Server thread/INFO]: PadowYT2_43 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_43[/127.0.0.43:25565] logged in with entity id 52 at ([world]1009.3753795007432, 100.0, 946.7521415712621)
[13:02:24] [Server thread/INFO]: PadowYT2_44 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_44[/127.0.0.44:25565] logged in with entity id 53 at ([world]1006.2783895094042, 100.0, 946.4441717756665)
[13:02:24] [Server thread/INFO]: PadowYT2_42 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_42[/127.0.0.42:25565] logged in with entity id 51 at ([world]1010.4242210181499, 100.0, 948.1969524914014)
[13:02:24] [Server thread/INFO]: PadowYT2_46 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_46[/127.0.0.45:25565] logged in with entity id 54 at ([world]1011.171181274692, 100.0, 947.9801820741299)
[13:02:24] [Server thread/INFO]: PadowYT2_48 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_48[/127.0.0.48:25565] logged in with entity id 57 at ([world]1004.9439298956744, 100.0, 946.6003736175826)
[13:02:24] [Server thread/INFO]: PadowYT2_45 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_45[/127.0.0.46:25565] logged in with entity id 55 at ([world]1009.8878283516932, 100.0, 948.8348609825457)
[13:02:24] [Server thread/INFO]: PadowYT2_47 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_47[/127.0.0.47:25565] logged in with entity id 56 at ([world]1001.7479750049339, 100.0, 940.4540149031583)
[13:02:24] [Server thread/INFO]: PadowYT2_49 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_49[/127.0.0.49:25565] logged in with entity id 58 at ([world]1009.7843068251437, 100.0, 948.1445635237385)
[13:02:24] [Server thread/INFO]: PadowYT2_50 joined the game
[13:02:24] [Server thread/INFO]: PadowYT2_50[/127.0.0.50:25565] logged in with entity id 59 at ([world]1001.8548870473875, 100.0, 939.4817332704037)
[13:02:42] [Server thread/INFO]: kony_ogony issued server command: /reload
[13:02:46] [Server thread/INFO]: kony_ogony issued server command: /tpall
[13:02:55] [Server thread/INFO]: kony_ogony issued server command: /game greenlight start
[13:02:55] [Server thread/INFO]: [SquidCubed] snipersList: [1025 121 935, 1025 121 943, 1025 121 951, 1025 121 959, 996 122 955, 996 122 945, 996 122 935]
[13:02:55] [Server thread/INFO]: [SquidCubed] facing: north
[13:02:55] [Server thread/INFO]: [SquidCubed] dollList: [1010 104 927]
[13:02:55] [Server thread/INFO]: [SquidCubed] greenlightAreaList: [1025 100 927, 996 139 966]
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 0
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 1
[13:02:55] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 2
[13:02:55] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:02:55] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:02:56] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:02:57] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:02:58] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:02:59] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:00] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:01] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:02] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:03] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:04] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:05] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:06] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:07] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:08] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:08] [Server thread/INFO]: kony_ogony issued server command: /killall
[13:03:09] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:10] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:11] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:12] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:12] [Server thread/INFO]: kony_ogony issued server command: /kill *
[13:03:13] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:13] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:13] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:13] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:13] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:13] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:13] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:13] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:23] [Watchdog Thread/ERROR]: --- DO NOT REPORT THIS TO PAPER - If you think this is a Leaf bug, please report it at https://github.com/Winds-Studio/Leaf/issues - THIS IS NOT A PAPER BUG OR CRASH - 1.21.4-DEV-b8e2c88 (MC: 1.21.4) ---
[13:03:23] [Watchdog Thread/ERROR]: The server has not responded for 10 seconds! Creating thread dump
[13:03:23] [Watchdog Thread/ERROR]: ------------------------------
[13:03:23] [Watchdog Thread/ERROR]: Server thread dump (Look for plugins here before reporting to Leaf!):
[13:03:23] [Watchdog Thread/ERROR]: ------------------------------
[13:03:23] [Watchdog Thread/ERROR]: Current Thread: Server thread
[13:03:23] [Watchdog Thread/ERROR]: 	PID: 42 | Suspended: false | Native: false | State: WAITING
[13:03:23] [Watchdog Thread/ERROR]: 	Stack:
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/jdk.internal.misc.Unsafe.park(Native Method)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.LockSupport.park(LockSupport.java:371)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode.block(AbstractQueuedSynchronizer.java:519)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.ForkJoinPool.unmanagedBlock(ForkJoinPool.java:3780)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.ForkJoinPool.managedBlock(ForkJoinPool.java:3725)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:1707)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.LinkedBlockingQueue.put(LinkedBlockingQueue.java:343)
[13:03:23] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.interfaces.Sniper.shootAtPlayer(Sniper.java:51)
[13:03:23] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.commands.Greenlight.playerEliminated(Greenlight.java:54)
[13:03:23] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.events.GreenlightListener.onPlayerMove(GreenlightListener.java:33)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.DirectMethodHandle$Holder.invokeVirtual(DirectMethodHandle$Holder)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.LambdaForm$MH/0x00007f836c120800.invoke(LambdaForm$MH)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.LambdaForm$MH/0x00007f836c120c00.invokeExact_MT(LambdaForm$MH)
[13:03:23] [Watchdog Thread/ERROR]: 		io.papermc.paper.event.executor.MethodHandleEventExecutorTemplate/0x00007f836df18800.execute(MethodHandleEventExecutorTemplate.java:46)
[13:03:23] [Watchdog Thread/ERROR]: 		org.bukkit.plugin.RegisteredListener.callEvent(RegisteredListener.java:70)
[13:03:23] [Watchdog Thread/ERROR]: 		io.papermc.paper.plugin.manager.PaperEventManager.callEvent(PaperEventManager.java:71)
[13:03:23] [Watchdog Thread/ERROR]: 		io.papermc.paper.plugin.manager.PaperPluginManagerImpl.callEvent(PaperPluginManagerImpl.java:131)
[13:03:23] [Watchdog Thread/ERROR]: 		org.bukkit.plugin.SimplePluginManager.callEvent(SimplePluginManager.java:629)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.network.ServerGamePacketListenerImpl.handleMovePlayer(ServerGamePacketListenerImpl.java:1597)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.game.ServerboundMovePlayerPacket.handle(ServerboundMovePlayerPacket.java:61)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos.handle(ServerboundMovePlayerPacket.java:100)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.PacketUtils.lambda$ensureRunningOnSameThread$0(PacketUtils.java:29)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.PacketUtils$$Lambda/0x00007f836dc1edb0.run(Unknown Source)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.TickTask.run(TickTask.java:18)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.doRunTask(BlockableEventLoop.java:155)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.ReentrantBlockableEventLoop.doRunTask(ReentrantBlockableEventLoop.java:24)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:1480)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:165)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.pollTask(BlockableEventLoop.java:129)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.pollTaskInternal(MinecraftServer.java:1461)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.pollTask(MinecraftServer.java:1455)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.managedBlock(BlockableEventLoop.java:139)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.managedBlock(MinecraftServer.java:1410)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.waitUntilNextTick(MinecraftServer.java:1419)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1299)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:299)
[13:03:23] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer$$Lambda/0x00007f836ce935e0.run(Unknown Source)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.Thread.runWith(Thread.java:1596)
[13:03:23] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.Thread.run(Thread.java:1583)
[13:03:23] [Watchdog Thread/ERROR]: ------------------------------
[13:03:23] [Watchdog Thread/ERROR]: --- DO NOT REPORT THIS TO PAPER - If you think this is a Leaf bug, please report it at https://github.com/Winds-Studio/Leaf/issues - THIS IS NOT A PAPER BUG OR CRASH ---
[13:03:23] [Watchdog Thread/ERROR]: ------------------------------
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/WARN]: Can't keep up! Is the server overloaded? Running 14604ms or 292 ticks behind
[13:03:28] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:28] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:28] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:28] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:28] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:28] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:28] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:28] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:28] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:28] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:28] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:28] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:28] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:28] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:38] [Watchdog Thread/ERROR]: --- DO NOT REPORT THIS TO PAPER - If you think this is a Leaf bug, please report it at https://github.com/Winds-Studio/Leaf/issues - THIS IS NOT A PAPER BUG OR CRASH - 1.21.4-DEV-b8e2c88 (MC: 1.21.4) ---
[13:03:38] [Watchdog Thread/ERROR]: The server has not responded for 10 seconds! Creating thread dump
[13:03:38] [Watchdog Thread/ERROR]: ------------------------------
[13:03:38] [Watchdog Thread/ERROR]: Server thread dump (Look for plugins here before reporting to Leaf!):
[13:03:38] [Watchdog Thread/ERROR]: ------------------------------
[13:03:38] [Watchdog Thread/ERROR]: Current Thread: Server thread
[13:03:38] [Watchdog Thread/ERROR]: 	PID: 42 | Suspended: false | Native: false | State: WAITING
[13:03:38] [Watchdog Thread/ERROR]: 	Stack:
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/jdk.internal.misc.Unsafe.park(Native Method)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.LockSupport.park(LockSupport.java:371)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode.block(AbstractQueuedSynchronizer.java:519)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.ForkJoinPool.unmanagedBlock(ForkJoinPool.java:3780)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.ForkJoinPool.managedBlock(ForkJoinPool.java:3725)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:1707)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.LinkedBlockingQueue.put(LinkedBlockingQueue.java:343)
[13:03:38] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.interfaces.Sniper.shootAtPlayer(Sniper.java:51)
[13:03:38] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.commands.Greenlight.playerEliminated(Greenlight.java:54)
[13:03:38] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.events.GreenlightListener.onPlayerMove(GreenlightListener.java:33)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.DirectMethodHandle$Holder.invokeVirtual(DirectMethodHandle$Holder)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.LambdaForm$MH/0x00007f836c120800.invoke(LambdaForm$MH)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.LambdaForm$MH/0x00007f836c120c00.invokeExact_MT(LambdaForm$MH)
[13:03:38] [Watchdog Thread/ERROR]: 		io.papermc.paper.event.executor.MethodHandleEventExecutorTemplate/0x00007f836df18800.execute(MethodHandleEventExecutorTemplate.java:46)
[13:03:38] [Watchdog Thread/ERROR]: 		org.bukkit.plugin.RegisteredListener.callEvent(RegisteredListener.java:70)
[13:03:38] [Watchdog Thread/ERROR]: 		io.papermc.paper.plugin.manager.PaperEventManager.callEvent(PaperEventManager.java:71)
[13:03:38] [Watchdog Thread/ERROR]: 		io.papermc.paper.plugin.manager.PaperPluginManagerImpl.callEvent(PaperPluginManagerImpl.java:131)
[13:03:38] [Watchdog Thread/ERROR]: 		org.bukkit.plugin.SimplePluginManager.callEvent(SimplePluginManager.java:629)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.network.ServerGamePacketListenerImpl.handleMovePlayer(ServerGamePacketListenerImpl.java:1597)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.game.ServerboundMovePlayerPacket.handle(ServerboundMovePlayerPacket.java:61)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos.handle(ServerboundMovePlayerPacket.java:100)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.PacketUtils.lambda$ensureRunningOnSameThread$0(PacketUtils.java:29)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.PacketUtils$$Lambda/0x00007f836dc1edb0.run(Unknown Source)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.TickTask.run(TickTask.java:18)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.doRunTask(BlockableEventLoop.java:155)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.ReentrantBlockableEventLoop.doRunTask(ReentrantBlockableEventLoop.java:24)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:1480)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:165)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.pollTask(BlockableEventLoop.java:129)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.pollTaskInternal(MinecraftServer.java:1461)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.pollTask(MinecraftServer.java:1455)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.runAllTasks(BlockableEventLoop.java:118)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.tickServer(MinecraftServer.java:1590)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1280)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:299)
[13:03:38] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer$$Lambda/0x00007f836ce935e0.run(Unknown Source)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.Thread.runWith(Thread.java:1596)
[13:03:38] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.Thread.run(Thread.java:1583)
[13:03:38] [Watchdog Thread/ERROR]: ------------------------------
[13:03:38] [Watchdog Thread/ERROR]: --- DO NOT REPORT THIS TO PAPER - If you think this is a Leaf bug, please report it at https://github.com/Winds-Studio/Leaf/issues - THIS IS NOT A PAPER BUG OR CRASH ---
[13:03:38] [Watchdog Thread/ERROR]: ------------------------------
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: kony_ogony issued server command: /reload
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Watchdog Thread/ERROR]: --- DO NOT REPORT THIS TO PAPER - If you think this is a Leaf bug, please report it at https://github.com/Winds-Studio/Leaf/issues - THIS IS NOT A PAPER BUG OR CRASH - 1.21.4-DEV-b8e2c88 (MC: 1.21.4) ---
[13:03:43] [Watchdog Thread/ERROR]: The server has not responded for 15 seconds! Creating thread dump
[13:03:43] [Watchdog Thread/ERROR]: ------------------------------
[13:03:43] [Watchdog Thread/ERROR]: Server thread dump (Look for plugins here before reporting to Leaf!):
[13:03:43] [Watchdog Thread/ERROR]: ------------------------------
[13:03:43] [Watchdog Thread/ERROR]: Current Thread: Server thread
[13:03:43] [Watchdog Thread/ERROR]: 	PID: 42 | Suspended: false | Native: false | State: WAITING
[13:03:43] [Watchdog Thread/ERROR]: 	Stack:
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/jdk.internal.misc.Unsafe.park(Native Method)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.LockSupport.park(LockSupport.java:371)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode.block(AbstractQueuedSynchronizer.java:519)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.ForkJoinPool.unmanagedBlock(ForkJoinPool.java:3780)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.ForkJoinPool.managedBlock(ForkJoinPool.java:3725)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:1707)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.LinkedBlockingQueue.put(LinkedBlockingQueue.java:343)
[13:03:43] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.interfaces.Sniper.shootAtPlayer(Sniper.java:51)
[13:03:43] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.commands.Greenlight.playerEliminated(Greenlight.java:54)
[13:03:43] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.events.GreenlightListener.onPlayerMove(GreenlightListener.java:33)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.DirectMethodHandle$Holder.invokeVirtual(DirectMethodHandle$Holder)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.LambdaForm$MH/0x00007f836df2a000.invoke(LambdaForm$MH)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.LambdaForm$MH/0x00007f836c120c00.invokeExact_MT(LambdaForm$MH)
[13:03:43] [Watchdog Thread/ERROR]: 		io.papermc.paper.event.executor.MethodHandleEventExecutorTemplate/0x00007f836df18800.execute(MethodHandleEventExecutorTemplate.java:46)
[13:03:43] [Watchdog Thread/ERROR]: 		org.bukkit.plugin.RegisteredListener.callEvent(RegisteredListener.java:70)
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Watchdog Thread/ERROR]: 		io.papermc.paper.plugin.manager.PaperEventManager.callEvent(PaperEventManager.java:71)
[13:03:43] [Watchdog Thread/ERROR]: 		io.papermc.paper.plugin.manager.PaperPluginManagerImpl.callEvent(PaperPluginManagerImpl.java:131)
[13:03:43] [Watchdog Thread/ERROR]: 		org.bukkit.plugin.SimplePluginManager.callEvent(SimplePluginManager.java:629)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.network.ServerGamePacketListenerImpl.handleMovePlayer(ServerGamePacketListenerImpl.java:1597)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.game.ServerboundMovePlayerPacket.handle(ServerboundMovePlayerPacket.java:61)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot.handle(ServerboundMovePlayerPacket.java:132)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.PacketUtils.lambda$ensureRunningOnSameThread$0(PacketUtils.java:29)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.PacketUtils$$Lambda/0x00007f836dc1edb0.run(Unknown Source)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.TickTask.run(TickTask.java:18)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.doRunTask(BlockableEventLoop.java:155)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.ReentrantBlockableEventLoop.doRunTask(ReentrantBlockableEventLoop.java:24)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:1480)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:165)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.pollTask(BlockableEventLoop.java:129)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.pollTaskInternal(MinecraftServer.java:1461)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.pollTask(MinecraftServer.java:1455)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.runAllTasks(BlockableEventLoop.java:118)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.tickServer(MinecraftServer.java:1590)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1280)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:299)
[13:03:43] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer$$Lambda/0x00007f836ce935e0.run(Unknown Source)
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.Thread.runWith(Thread.java:1596)
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.Thread.run(Thread.java:1583)
[13:03:43] [Watchdog Thread/ERROR]: ------------------------------
[13:03:43] [Watchdog Thread/ERROR]: --- DO NOT REPORT THIS TO PAPER - If you think this is a Leaf bug, please report it at https://github.com/Winds-Studio/Leaf/issues - THIS IS NOT A PAPER BUG OR CRASH ---
[13:03:43] [Watchdog Thread/ERROR]: ------------------------------
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:43] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:43] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:43] [Server thread/INFO]: kony_ogony issued server command: /reload
[13:03:43] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:43] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:44] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:45] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:46] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:46] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:46] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:46] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:47] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:47] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:47] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:47] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:57] [Watchdog Thread/ERROR]: --- DO NOT REPORT THIS TO PAPER - If you think this is a Leaf bug, please report it at https://github.com/Winds-Studio/Leaf/issues - THIS IS NOT A PAPER BUG OR CRASH - 1.21.4-DEV-b8e2c88 (MC: 1.21.4) ---
[13:03:57] [Watchdog Thread/ERROR]: The server has not responded for 10 seconds! Creating thread dump
[13:03:57] [Watchdog Thread/ERROR]: ------------------------------
[13:03:57] [Watchdog Thread/ERROR]: Server thread dump (Look for plugins here before reporting to Leaf!):
[13:03:57] [Watchdog Thread/ERROR]: ------------------------------
[13:03:57] [Watchdog Thread/ERROR]: Current Thread: Server thread
[13:03:57] [Watchdog Thread/ERROR]: 	PID: 42 | Suspended: false | Native: false | State: WAITING
[13:03:57] [Watchdog Thread/ERROR]: 	Stack:
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/jdk.internal.misc.Unsafe.park(Native Method)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.LockSupport.park(LockSupport.java:371)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode.block(AbstractQueuedSynchronizer.java:519)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.ForkJoinPool.unmanagedBlock(ForkJoinPool.java:3780)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.ForkJoinPool.managedBlock(ForkJoinPool.java:3725)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:1707)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.util.concurrent.LinkedBlockingQueue.put(LinkedBlockingQueue.java:343)
[13:03:57] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.interfaces.Sniper.shootAtPlayer(Sniper.java:51)
[13:03:57] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.commands.Greenlight.playerEliminated(Greenlight.java:54)
[13:03:57] [Watchdog Thread/ERROR]: 		SquidCubed-1.0.0.jar//dev.pakostudios.squidcubed.events.GreenlightListener.onPlayerMove(GreenlightListener.java:33)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.DirectMethodHandle$Holder.invokeVirtual(DirectMethodHandle$Holder)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.LambdaForm$MH/0x00007f836df2a000.invoke(LambdaForm$MH)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.invoke.LambdaForm$MH/0x00007f836c120c00.invokeExact_MT(LambdaForm$MH)
[13:03:57] [Watchdog Thread/ERROR]: 		io.papermc.paper.event.executor.MethodHandleEventExecutorTemplate/0x00007f836df18800.execute(MethodHandleEventExecutorTemplate.java:46)
[13:03:57] [Watchdog Thread/ERROR]: 		org.bukkit.plugin.RegisteredListener.callEvent(RegisteredListener.java:70)
[13:03:57] [Watchdog Thread/ERROR]: 		io.papermc.paper.plugin.manager.PaperEventManager.callEvent(PaperEventManager.java:71)
[13:03:57] [Watchdog Thread/ERROR]: 		io.papermc.paper.plugin.manager.PaperPluginManagerImpl.callEvent(PaperPluginManagerImpl.java:131)
[13:03:57] [Watchdog Thread/ERROR]: 		org.bukkit.plugin.SimplePluginManager.callEvent(SimplePluginManager.java:629)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.network.ServerGamePacketListenerImpl.handleMovePlayer(ServerGamePacketListenerImpl.java:1597)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.game.ServerboundMovePlayerPacket.handle(ServerboundMovePlayerPacket.java:61)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos.handle(ServerboundMovePlayerPacket.java:100)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.PacketUtils.lambda$ensureRunningOnSameThread$0(PacketUtils.java:29)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.network.protocol.PacketUtils$$Lambda/0x00007f836dc1edb0.run(Unknown Source)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.TickTask.run(TickTask.java:18)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.doRunTask(BlockableEventLoop.java:155)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.ReentrantBlockableEventLoop.doRunTask(ReentrantBlockableEventLoop.java:24)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:1480)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:165)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.pollTask(BlockableEventLoop.java:129)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.pollTaskInternal(MinecraftServer.java:1461)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.pollTask(MinecraftServer.java:1455)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.util.thread.BlockableEventLoop.managedBlock(BlockableEventLoop.java:139)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.managedBlock(MinecraftServer.java:1410)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.waitUntilNextTick(MinecraftServer.java:1419)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1299)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:299)
[13:03:57] [Watchdog Thread/ERROR]: 		net.minecraft.server.MinecraftServer$$Lambda/0x00007f836ce935e0.run(Unknown Source)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.Thread.runWith(Thread.java:1596)
[13:03:57] [Watchdog Thread/ERROR]: 		java.base@21.0.3/java.lang.Thread.run(Thread.java:1583)
[13:03:57] [Watchdog Thread/ERROR]: ------------------------------
[13:03:57] [Watchdog Thread/ERROR]: --- DO NOT REPORT THIS TO PAPER - If you think this is a Leaf bug, please report it at https://github.com/Winds-Studio/Leaf/issues - THIS IS NOT A PAPER BUG OR CRASH ---
[13:03:57] [Watchdog Thread/ERROR]: ------------------------------
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/WARN]: Can't keep up! Is the server overloaded? Running 11204ms or 224 ticks behind
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 4
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: kony_ogony issued server command: /game greenlight start
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] snipersList: [1025 121 935, 1025 121 943, 1025 121 951, 1025 121 959, 996 122 955, 996 122 945, 996 122 935]
[13:03:58] [Server thread/INFO]: [SquidCubed] facing: north
[13:03:58] [Server thread/INFO]: [SquidCubed] dollList: [1010 104 927]
[13:03:58] [Server thread/INFO]: [SquidCubed] greenlightAreaList: [1025 100 927, 996 139 966]
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: kony_ogony issued server command: /game greenlight start
[13:03:58] [Server thread/INFO]: [SquidCubed] snipersList: [1025 121 935, 1025 121 943, 1025 121 951, 1025 121 959, 996 122 955, 996 122 945, 996 122 935]
[13:03:58] [Server thread/INFO]: [SquidCubed] facing: north
[13:03:58] [Server thread/INFO]: [SquidCubed] dollList: [1010 104 927]
[13:03:58] [Server thread/INFO]: [SquidCubed] greenlightAreaList: [1025 100 927, 996 139 966]
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 935 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 943 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 951 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 121 959 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 955 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 945 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 122 935 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1025 100 927 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 996 139 966 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 0
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 1
[13:03:58] [Server thread/INFO]: [SquidCubed] coords: 1010 104 927 index: 2
[13:03:58] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-6/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-7/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-4/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [pool-25-thread-3/INFO]: [SquidCubed] Selected sniper: Sniper 6
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [pool-25-thread-5/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-1/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Player kony_ogony eliminated!
[13:03:58] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 5
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 1
[13:03:58] [pool-25-thread-2/INFO]: [SquidCubed] Selected sniper: Sniper 7
[13:03:59] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:59] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:03:59] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:04:00] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:04:00] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:04:00] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:04:01] [Server thread/INFO]: [SquidCubed] Number of players inside the area: 51
[13:04:01] [Server thread/INFO]: Stopping the server
[13:04:01] [Server thread/INFO]: Stopping server
[13:04:01] [Server thread/INFO]: [fakeplayer] Disabling fakeplayer v0.3.13
[13:04:01] [Server thread/INFO]: PadowYT2_31 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_31 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_43 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_43 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_26 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_26 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_29 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_29 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_11 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_11 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_6 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_6 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_8 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_8 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_24 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_24 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_1 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_1 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_3 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_3 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_34 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_34 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_38 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_38 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_22 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_22 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_47 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_47 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_50 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_50 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_18 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_18 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_44 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_44 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_21 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_21 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_30 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_30 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_28 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_28 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_2 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_2 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_12 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_12 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_42 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_42 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_7 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_7 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_32 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_32 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_39 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_39 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_45 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_45 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_36 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_36 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_15 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_15 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_5 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_5 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_16 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_16 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_40 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_40 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_9 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_9 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_25 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_25 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_14 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_14 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_13 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_13 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_23 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_23 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_35 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_35 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_4 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_4 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_48 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_48 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_49 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_49 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_19 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_19 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_10 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_10 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_17 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_17 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_46 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_46 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_37 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_37 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_20 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_20 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_27 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_27 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_41 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_41 left the game
[13:04:01] [Server thread/INFO]: PadowYT2_33 lost connection: [fakeplayer] Plugin disabled
[13:04:01] [Server thread/INFO]: PadowYT2_33 left the game
[13:04:01] [Server thread/INFO]: [com.zaxxer.hikari.HikariDataSource] fakeplayer-datasource - Shutdown initiated...
[13:04:01] [Server thread/INFO]: [com.zaxxer.hikari.HikariDataSource] fakeplayer-datasource - Shutdown completed.
[13:04:01] [Server thread/INFO]: [packetevents] Disabling packetevents v2.7.0
[13:04:01] [Server thread/INFO]: [VoidGen] Disabling VoidGen v2.2.1
[13:04:01] [Server thread/INFO]: [SquidCubed] Disabling SquidCubed v1.0.0
[13:04:01] [Server thread/INFO]: [AntiPopup] Disabling AntiPopup v10.1
[13:04:01] [Server thread/INFO]: [AntiPopup] Disabled PacketEvents.
[13:04:01] [Server thread/INFO]: [Essentials] Disabling Essentials v2.21.0-dev+155-803771e
[13:04:01] [Server thread/INFO]: [pv-addon-sounds] Disabling pv-addon-sounds v1.0.0
[13:04:01] [Server thread/INFO]: [WorldEditSUI] Disabling WorldEditSUI v1.7.4
[13:04:01] [Server thread/INFO]: [pv-addon-hide-icons] Disabling pv-addon-hide-icons v1.0.0-SNAPSHOT
[13:04:01] [Server thread/INFO]: [PlasmoVoice] Addon pv-addon-hide-icons v1.0.0-SNAPSHOT by Apehum unloaded
[13:04:01] [Server thread/INFO]: [PhysicsControl] Disabling PhysicsControl v1.2.2
[13:04:01] [Server thread/INFO]: [CommandAPI] Disabling CommandAPI v9.7.0
[13:04:01] [Server thread/INFO]: [SkinsRestorer] Disabling SkinsRestorer v15.5.2-SNAPSHOT
[13:04:01] [Server thread/INFO]: [WorldEdit] Disabling WorldEdit v7.3.10+7004-768a436
[13:04:01] [Server thread/INFO]: Unregistering com.sk89q.worldedit.bukkit.BukkitServerInterface from WorldEdit
[13:04:01] [Server thread/INFO]: [PlasmoVoice] Disabling PlasmoVoice v2.1.3+088acfc-SNAPSHOT
[13:04:01] [Server thread/INFO]: [PlasmoVoice] UDP server is stopped
[13:04:01] [Server thread/INFO]: [pv-addon-sounds] Addon shut down
[13:04:01] [Server thread/INFO]: [PlasmoVoice] Addon pv-addon-sounds v1.0.0 by PadowYT2 unloaded
[13:04:01] [Server thread/INFO]: Saving players
[13:04:01] [Server thread/INFO]: kony_ogony lost connection: Server closed
[13:04:01] [Server thread/INFO]: kony_ogony left the game
[13:04:01] [Server thread/INFO]: Saving worlds
[13:04:01] [Server thread/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:overworld
[13:04:01] [Server thread/INFO]: [ChunkHolderManager] Waiting 60s for chunk system to halt for world 'world'
[13:04:01] [Server thread/INFO]: [ChunkHolderManager] Halted chunk system for world 'world'
[13:04:01] [Server thread/INFO]: [ChunkHolderManager] Saving all chunkholders for world 'world'
[13:04:02] [Server thread/INFO]: [ChunkHolderManager] Saved 921 block chunks, 921 entity chunks, 0 poi chunks in world 'world' in 0.34s
[13:04:02] [Server thread/INFO]: [ChunkHolderManager] Waiting 60s for chunk I/O to halt for world 'world'
[13:04:02] [Server thread/INFO]: [ChunkHolderManager] Halted I/O scheduler for world 'world'
[13:04:02] [Server thread/INFO]: ThreadedChunkStorage (world): All chunks are saved
[13:04:02] [Server thread/INFO]: ThreadedChunkStorage: All dimensions are saved
[13:04:02] [Server thread/INFO]: Waiting for I/O tasks to complete...
[13:04:02] [Server thread/INFO]: All I/O tasks to complete
[13:04:02] [Server thread/INFO]: [MoonriseCommon] Awaiting termination of worker pool for up to 60s...
[13:04:02] [Server thread/INFO]: [MoonriseCommon] Awaiting termination of I/O pool for up to 60s...`,
                                    permissions: '-rw-r--r--',
                                    size: 128073,
                                    timestamp: {
                                        shortHand: 'Feb 3 20:20',
                                    },
                                },
                                {
                                    name: '2025-02-03-2.log.gz',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 12914,
                                    timestamp: {
                                        shortHand: 'Feb 3 20:20',
                                    },
                                },
                                {
                                    name: '35020247_8262064(1).svg',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 114648,
                                    timestamp: {
                                        shortHand: 'Jun 3 00:18',
                                    },
                                },
                                {
                                    name: '3.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 122262,
                                    timestamp: {
                                        shortHand: 'Jun 25 20:28',
                                    },
                                },
                                {
                                    name: '4147bc7a93934d87.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1072,
                                    timestamp: {
                                        shortHand: 'Jan 25 18:29',
                                    },
                                },
                                {
                                    name: '4.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 123060,
                                    timestamp: {
                                        shortHand: 'Jun 25 20:28',
                                    },
                                },
                                {
                                    name: '79127ddbc1ba67b2.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 2713,
                                    timestamp: {
                                        shortHand: 'Jan 23 20:33',
                                    },
                                },
                                {
                                    name: 'a.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 511,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:38',
                                    },
                                },
                                {
                                    name: 'ban.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 460931,
                                    timestamp: {
                                        shortHand: 'Oct 12 2024',
                                    },
                                },
                                {
                                    name: 'bar1(1).jpg',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 451909,
                                    timestamp: {
                                        shortHand: 'Nov 18 2024',
                                    },
                                },
                                {
                                    name: 'bar1.jpg',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 50612,
                                    timestamp: {
                                        shortHand: 'Nov 18 2024',
                                    },
                                },
                                {
                                    name: 'bar2.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 347669,
                                    timestamp: {
                                        shortHand: 'Nov 18 2024',
                                    },
                                },
                                {
                                    name: 'bar2_upscaled.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1260624,
                                    timestamp: {
                                        shortHand: 'Nov 18 2024',
                                    },
                                },
                                {
                                    name: 'booking.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 6332742,
                                    timestamp: {
                                        shortHand: 'Feb 20 16:13',
                                    },
                                },
                                {
                                    name: 'bss',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Jun 29 16:22',
                                    },
                                },
                                {
                                    name: 'bun-linux-x64-baseline.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 38291778,
                                    timestamp: {
                                        shortHand: 'Jul 11 15:07',
                                    },
                                },
                                {
                                    name: 'b.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 31169289,
                                    timestamp: {
                                        shortHand: 'Jan 19 18:40',
                                    },
                                },
                                {
                                    name: 'Calculus.pdf',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 40643894,
                                    timestamp: {
                                        shortHand: 'Mar 28 17:20',
                                    },
                                },
                                {
                                    name: 'cancel.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 4529096,
                                    timestamp: {
                                        shortHand: 'Feb 20 16:39',
                                    },
                                },
                                {
                                    name: 'cbss.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 308316913,
                                    timestamp: {
                                        shortHand: 'Jun 30 18:29',
                                    },
                                },
                                {
                                    name: 'cinemamod-linux_amd64-1.0.7-1.21.1(1).jar',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 121144901,
                                    timestamp: {
                                        shortHand: 'Dec 30 2024',
                                    },
                                },
                                {
                                    name: 'clown.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1491,
                                    timestamp: {
                                        shortHand: 'Jan 21 22:04',
                                    },
                                },
                                {
                                    name: 'dotfiles-main.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 10364,
                                    timestamp: {
                                        shortHand: 'Apr 1 22:44',
                                    },
                                },
                                {
                                    name: 'Doxium app_files',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Oct 24 2024',
                                    },
                                },
                                {
                                    name: 'Doxium app.html',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 101606,
                                    timestamp: {
                                        shortHand: 'Oct 24 2024',
                                    },
                                },
                                {
                                    name: 'DX(1).ico',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1071,
                                    timestamp: {
                                        shortHand: 'Dec 28 2024',
                                    },
                                },
                                {
                                    name: 'DX.ico',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1071,
                                    timestamp: {
                                        shortHand: 'Dec 28 2024',
                                    },
                                },
                                {
                                    name: 'DX.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1179,
                                    timestamp: {
                                        shortHand: 'Dec 28 2024',
                                    },
                                },
                                {
                                    name: 'favicon(1).ico',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 4286,
                                    timestamp: {
                                        shortHand: 'Feb 20 15:38',
                                    },
                                },
                                {
                                    name: 'favicon.ico',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1598,
                                    timestamp: {
                                        shortHand: 'Dec 28 2024',
                                    },
                                },
                                {
                                    name: 'favicon.svg',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 41986,
                                    timestamp: {
                                        shortHand: 'Sep 11 2024',
                                    },
                                },
                                {
                                    name: 'ff2ce3a211d784b7.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1006,
                                    timestamp: {
                                        shortHand: 'Jan 23 20:31',
                                    },
                                },
                                {
                                    name: 'glad.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1785118,
                                    timestamp: {
                                        shortHand: 'Mar 30 00:49',
                                    },
                                },
                                {
                                    name: 'image.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 2342,
                                    timestamp: {
                                        shortHand: 'Jan 23 20:21',
                                    },
                                },
                                {
                                    name: 'konyogony .dotfiles main .config-hypr.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 21043578,
                                    timestamp: {
                                        shortHand: 'Apr 1 22:41',
                                    },
                                },
                                {
                                    name: 'launcher-1.0.jar',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 6948752,
                                    timestamp: {
                                        shortHand: 'Sep 15 2024',
                                    },
                                },
                                {
                                    name: 'letter.jpg',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 652938,
                                    timestamp: {
                                        shortHand: 'Oct 9 2024',
                                    },
                                },
                                {
                                    name: 'Logo for doxium',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Dec 28 2024',
                                    },
                                },
                                {
                                    name: 'Logo for doxium.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 3524,
                                    timestamp: {
                                        shortHand: 'Dec 28 2024',
                                    },
                                },
                                {
                                    name: 'logo.jpg',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 49980,
                                    timestamp: {
                                        shortHand: 'Nov 24 2024',
                                    },
                                },
                                {
                                    name: 'mc.jar',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 9612170,
                                    timestamp: {
                                        shortHand: 'Jan 27 18:36',
                                    },
                                },
                                {
                                    name: 'metal.json',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 551,
                                    timestamp: {
                                        shortHand: 'Jan 19 20:41',
                                    },
                                },
                                {
                                    name: 'old.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1590,
                                    timestamp: {
                                        shortHand: 'Jan 26 17:15',
                                    },
                                },
                                {
                                    name: 'post_install.sh',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rwxr-xr-x',
                                    size: 1896,
                                    timestamp: {
                                        shortHand: 'Mar 13 09:52',
                                    },
                                },
                                {
                                    name: 'post_uninstall.sh',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rwxr-xr-x',
                                    size: 1878,
                                    timestamp: {
                                        shortHand: 'Mar 13 09:52',
                                    },
                                },
                                {
                                    name: 'protein_bar.glb',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 2265256,
                                    timestamp: {
                                        shortHand: 'Nov 23 2024',
                                    },
                                },
                                {
                                    name: 'replay(1).ttrm',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 115892,
                                    timestamp: {
                                        shortHand: 'Dec 17 2024',
                                    },
                                },
                                {
                                    name: 'replay.ttrm',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 2656,
                                    timestamp: {
                                        shortHand: 'Sep 14 2024',
                                    },
                                },
                                {
                                    name: 'rp.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 10137,
                                    timestamp: {
                                        shortHand: 'Mar 4 18:47',
                                    },
                                },
                                {
                                    name: 'service',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwx------',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Mar 13 16:57',
                                    },
                                },
                                {
                                    name: 's.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1554,
                                    timestamp: {
                                        shortHand: 'Jan 25 18:40',
                                    },
                                },
                                {
                                    name: 'test.zip',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 60901787,
                                    timestamp: {
                                        shortHand: 'Mar 24 21:24',
                                    },
                                },
                                {
                                    name: 'tile1.jpg',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 104704,
                                    timestamp: {
                                        shortHand: 'Jan 19 20:00',
                                    },
                                },
                                {
                                    name: 'tile1.png',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 2147,
                                    timestamp: {
                                        shortHand: 'Jan 19 20:40',
                                    },
                                },
                                {
                                    name: 'Untitled-2025-01-15-2237.excalidraw',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 7655728,
                                    timestamp: {
                                        shortHand: 'Jan 15 22:37',
                                    },
                                },
                                {
                                    name: 'video-v3.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 77013076,
                                    timestamp: {
                                        shortHand: 'Nov 25 2024',
                                    },
                                },
                            ],
                        },
                        {
                            name: 'get_info.sh',
                            content: `#!/bin/bash

outfile="dir_info.txt"

{
    echo "== info for / =="
    ls -la /
    echo
    stat /

    echo
    echo "== info for /home =="
    ls -la /home
    echo
    stat /home

    echo
    echo "== info for /home/kony =="
    ls -la /home/kony
    echo
    stat /home/kony

    echo
    echo "== info for files in /home/kony =="
    for f in /home/kony/*; do
        echo "file: $f"
        ls -la "$f"
        stat "$f"
        echo "--------------------"
    done
} >"$outfile"

echo "all done, output saved to $outfile"`,
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0755/-rwxr-xr-x',
                            size: 531,
                            timestamp: {
                                shortHand: 'Jul 11 17:09',
                                access: '2025-07-11 17:09:44.133695034 +0700',
                                modify: '2025-07-11 17:09:29.710080922 +0700',
                                change: '2025-07-11 17:09:38.918472983 +0700',
                                birth: '2025-07-11 17:09:29.710080922 +0700',
                            },
                        },
                        {
                            name: '.gitconfig',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 367,
                            timestamp: {
                                shortHand: 'Mar 28 23:31',
                            },
                        },
                        {
                            name: 'i_use_arch_btw.sh',
                            type: 'file',
                            content: `#!/bin/bash

# Get the filesystem creation date
install_date=$(sudo tune2fs -l $(df / | tail -1 | awk '{print $1}') | grep 'Filesystem created' | awk -F'created: ' '{print $2}')
install_timestamp=$(date -d "$install_date" +%s)

# Get the current date and time
current_date=$(date)
current_timestamp=$(date +%s)

# Calculate the time difference
diff_seconds=$((current_timestamp - install_timestamp))

# Break down into years, months, days, hours, and minutes
years=$((diff_seconds / 31536000))
remaining_seconds=$((diff_seconds % 31536000))
months=$((remaining_seconds / 2592000))
remaining_seconds=$((remaining_seconds % 2592000))
days=$((remaining_seconds / 86400))
remaining_seconds=$((remaining_seconds % 86400))
hours=$((remaining_seconds / 3600))
minutes=$((remaining_seconds % 3600 / 60))

# Calculate total hours and minutes
total_hours=$((diff_seconds / 3600))
total_minutes=$((diff_seconds / 60))

# Display the results
echo "Arch Linux was installed on: $install_date"
echo "You have been using Arch Linux for:"
echo "  $years years, $months months, $days days, $hours hours, and $minutes minutes."
echo "  Total hours: $total_hours"
echo "  Total minutes: $total_minutes"`,
                            ownership: 'kony/kony',
                            permissions: '0755/-rwxr-xr-x',
                            size: 1185,
                            timestamp: {
                                shortHand: 'Nov 23 2024',
                                access: '2025-07-07 14:30:33.320696141 +0700',
                                modify: '2024-11-23 14:16:49.447447757 +0700',
                                change: '2024-11-23 14:16:49.637453494 +0700',
                                birth: '2024-11-23 14:16:49.447447757 +0700',
                            },
                        },
                        {
                            name: '.java',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 6 2024',
                            },
                        },
                        {
                            name: '.local',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwx------',
                            size: 4096,
                            timestamp: {
                                shortHand: 'May 28 22:16',
                            },
                        },
                        {
                            name: 'lua',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Mar 27 19:02',
                                access: '2025-07-11 13:33:26.002524519 +0700',
                                modify: '2025-03-27 19:02:54.649407076 +0700',
                                change: '2025-03-27 19:02:54.649407076 +0700',
                                birth: '2025-03-27 19:02:54.649407076 +0700',
                            },
                            children: [],
                        },
                        {
                            name: '.minecraft',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jul 8 19:11',
                            },
                        },
                        {
                            name: '.mozilla',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwx------',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 5 2024',
                            },
                        },
                        {
                            name: 'mpvpaper',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Dec 3 2024',
                                access: '2025-07-11 17:09:44.269700825 +0700',
                                modify: '2024-12-03 17:01:20.263449065 +0700',
                                change: '2024-12-03 17:01:20.263449065 +0700',
                                birth: '2024-12-03 17:01:18.080046886 +0700',
                            },
                            children: [
                                {
                                    name: 'build',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                                {
                                    name: '.git',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                                {
                                    name: 'inc',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                                {
                                    name: 'LICENSE',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 35149,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                                {
                                    name: 'meson.build',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1506,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                                {
                                    name: 'mpvpaper.man',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 4586,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                                {
                                    name: 'proto',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                                {
                                    name: 'README.md',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1742,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                                {
                                    name: 'src',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Dec 3 2024',
                                    },
                                },
                            ],
                        },
                        {
                            name: 'Music',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Apr 17 13:42',
                                access: '2025-07-11 17:09:44.273700996 +0700',
                                modify: '2025-04-17 13:42:27.370997427 +0700',
                                change: '2025-04-17 13:42:27.370997427 +0700',
                                birth: '2025-04-17 13:42:27.370997427 +0700',
                            },
                            children: [],
                        },
                        {
                            name: 'nicknames.txt',
                            type: 'file',
                            content: `
[
  "vrtualgrl",
  "fortnitelover543",
  "Kyizl",
  "Ern8",
  "Fyxle",
  "Post_mortum",
  "ausm",
  "kjlls",
  "Mxodz",
  "vigeolit",
  "PoIIen",
  "vrzp",
  "l6yn",
  "AlfnART",
  "slayokrul",
  "bullerei",
  "nrri",
  "silly8271898278",
  "PigeonLikey",
  "i2High",
  "brrrlol",
  "PandaDudie",
  "981",
  "musalk1",
  "IIYueII",
  "sethx",
  "ChunkBorder",
  "mpete25",
  "ImCamilaahh",
  "Lunatique",
  "Petehnox",
  "Yuke",
  "DuckyNewYear",
  "Marcher82",
  "1otf",
  "Milkaway",
  "Leylinnn",
  "8yin",
  "wobblecat44",
  "EXD_Taxm",
  "myje",
  "5tny",
  "Mxodz",
  "tiliys",
  "haha5",
  "KOCIAK015",
  "iTatazinha",
  "cofina",
  "PoopMonster3D",
  "xp3ka",
  "sakunohgaminguhq",
  "DuckyNewYear",
  "Prolium",
  "povichXD",
  "Naoh_Jr_Point",
  "ScooterAnkle14",
  "elise_6969",
  "roggurt",
  "flavete_kgsz",
  "78Sho",
  "NotBartuss",
  "Ashernaut12",
  "404kn",
  "BlueBullexD",
  "nahfy",
  "vaanic",
  "y56H8Fr7t9gZ1X4n",
  "Neim",
  "nirwys",
  "kmnas",
  "DisasterIsa",
  "Majvxa",
  "DEW1ERR",
  "pandicorn19",
  "Succory",
  "ILOVESNOOPY111",
  "nqea",
  "fwau",
  "Szoom",
  "bn12",
  "vaanic",
  "DuckyNewYear",
  "SexyMode",
  "oifa",
  "Pechemenka",
  "LQGQ",
  "Prude",
  "kevintjuh93",
  "obsxssive",
  "daiwsy",
  "loverboydom",
  "lLovePancakes",
  "Danni",
  "xCeciliaa",
  "cxx",
  "avbs",
  "ZenZyro",
  "_ssss_",
  "TimerReach",
  "BreadToastBurnt",
  "saqyz",
  "levraisteeltv",
  "Auklet",
  "xxze",
  "kitu0",
  "lesbianrizzler",
  "fourif",
  "inpz",
  "itFelix",
  "gothstar",
  "Sophei",
"_s3",
  "kmnas",
  "DisasterIsa",
  "Majvxa",
  "DEW1ERR",
  "pandicorn19",
  "Succory",
  "ILOVESNOOPY111",
  "nqea",
  "fwau",
  "Szoom",
  "bn12",
  "vaanic",
  "DuckyNewYear",
  "SexyMode",
  "oifa",
  "Mxodz",
  "Pechemenka",
  "LQGQ",
  "Prude",
  "kevintjuh93",
  "obsxssive",
  "daiwsy",
  "loverboydom",
  "lLovePancakes",
  "Danni",
  "Wellcome2025",
  "trustgod",
  "emiliorip",
  "vigeolit",
  "Narcotrafic",
  "Tealen",
  "Dripping",
  "Headqche",
  "haha5",
  "Six_eggs",
  "byehru",
  "plivss",
  "Farsighted807",
  "char912835",
  "silly8271898278",
  "slavicdolls",
  "LuisZz127",
  "Quackov",
  "Xfinn45",
  "DuckyNewYear",
  "66C6",
  "nepheri",
  "m3wk4",
  "pixelnxva",
  "kissyta",
  "gezu",
  "briamn",
  "House",
  "5tny",
  "Mxodz",
  "nrze",
  "NT4090TI",
  "jokerwaffen88",
  "BastiGHG",
  "WeizenMehlTyp405",
  "dirtylies",
  "Brookiee___",
  "Dork",
  "X_SUwUS",
  "ExtremeKnight12",
  "sllyva",
  "MulteciDovenPro",
  "Nofairr1337x",
  "Seliny",
  "silly8271898278",
  "zJkc",
  "cqdu",
  "Prude",
  "jasinblt",
  "splongy5742",
  "l6yn",
  "sqirrell",
  "hydi_",
  "lgian",
  "indisciplinado",
  "bscyh",
  "benny100",
  "sadsendi",
  "yKirito",
  "Midinayte",
  "Jaooy",
  "SweatyEmoBoy",
  "redefinidor",
  "ManePear",
  "Maksior1",
  "tiliys",
  "sountmeows",
  "peach_sugar_JP",
  "dirtylies",
  "strawberrycreaam",
  "grandslamuel",
  "sillycat7531",
  "ImNotJohan",
  "moonsxy",
  "stinkerboss",
  "1Mushy",
  "22hrs_",
  "q440",
  "OkayMaybeImASimp",
  "kutfdko",
  "jalting1",
  "_ByNickX_",
  "Peacie",
  "necrotrap",
  "2uss",
  "C0RG4N",
  "bugaluuu",
  "Meller",
  "rustyerx",
  "fakeitflowers",
  "The_Kyl",
  "_ssss_",
  "Footprint",
  "MinecraftPhysics",
  "6enja",
  "cozsie",
  "D4rk_Sheph3rd",
  "WamblyJaguar24",
  "cofina",
  "forjic",
  "rwdn",
  "SoyUnaInfielQlra",
  "BigMarian",
  "Babibalonia",
  "twerkervitja88",
  "OneFoma",
  "silly8271898278",
  "y21312491",
  "nqea",
  "Whiteorigin",
  "Apiglo",
  "Becheyal",
  "ThickCartman",
  "grandslamuel",
  "Conetic",
  "roscn",
  "_st4ryy",
  "ChronosWasTaken",
  "rremorse",
  "Leylinnn",
  "AlexPalex12",
  "cracuda",
  "relumed",
  "Simi1604",
  "Leylinnn",
  "luvhi",
  "Becktell",
  "Saech",
  "UwuTart",
  "faelmalandro",
  "quantex0_o",
  "Muncat",
  "YourEGirl",
  "vaanic",
  "E_D_R",
  "silly8271898278",
  "diapot",
  "DUCKTOOF",
  "u_uo",
  "LosThaSagex",
  "flaviao",
  "yoama",
  "phantomkaa",
  "yungduk",
  "dirtylies",
  "nutlover",
  "sxntrer",
  "Relaquent",
  "kjlls",
  "Glintish",
  "hyder606",
  "Kiddo168",
  "HighStier",
  "b4lk",
  "SweetSharkXO",
  "ameeelia",
  "STIV7N",
  "vrzp",
  "tboh",
  "dormiindo",
  "sniffgirl",
  "DuckyNewYear",
  "Pawnplayer",
  "Nocho1116",
  "Mxodz",
  "yungmats",
  "horrorscene",
  "dissimulare",
  "Mifochka",
  "invejoso",
  "Wreeper",
  "irlv",
  "RaptorHorn",
  "myje",
  "whatrimon",
  "vigeolit",
  "PWGoood",
  "npu",
  "hugebbl",
  "BullysSidekick",
  "TheMunto19",
  "47Thug",
  "nahfy",
  "28hyper",
  "kuomix",
  "novinhapiranha",
  "cutestury",
  "gwnc",
  "givethighs",
  "Luvury",
  "just_ryder_",
  "Leylinnn",
  "GhaldorSr",
  "Aliea",
  "toyacht",
  "Balla_Love1",
  "pausa",
  "Hxksh",
  "Iook",
  "Ingodiontrust",
  "72DR",
  "FeelInLqve",
  "vaanic",
  "surmises",
  "1after",
  "lulwaa",
  "m3wk4",
  "7Hive",
  "astreca",
  "LtQuackers7",
  "bbeu",
  "ErikG0D",
  "lingdong123",
  "Klon062010",
  "leftinmydespair",
  "Hieq",
  "EchoBrick",
  "anyblu",
  "BufflixX",
  "ejabelle",
  "Kyizl",
  "Chapey",
  "irlv",
  "Lunatique",
  "Overdoah",
  "PHANTOMQQ",
  "Gom",
  "myeku",
  "vJxkls",
  "browsee",
  "AngstyUzi",
  "BlueStudios",
  "_FeelJuicy",
  "Kulanov",
  "dirtylies",
  "sillwgrl",
  "Gomm4",
  "Clipnext",
  "_k90",
  "luvism",
  "Heluvjess666",
  "Vanhalli",
  "kolego",
  "Hiauts",
  "resiliently",
  "seraphicmiles",
  "waaatuh",
  "Sleepy_Bugs",
  "tiliys",
  "kirzie",
  "WhimperingAudios",
  "aud",
  "Mc4i",
  "demiy",
  "nqea",
  "Sotrix",
  "czla",
  "Kwaiss",
  "clma",
  "Xivue",
  "Judyluvsme",
  "Freakysnugglez00",
  "Inamize",
  "DuckyNewYear"
  
  "ImKim9127",
  "Mxodz",
  "SlippedBead8504",
  "Omfni",
  "cheilalaguapa",
  "zieltwo",
  "StherMC",
  "sltty",
  "uDeath",
  "felek125",
  "LeHeat",
  "remsua_",
  "xCeciliaa",
  "AuKrystalian",
  "DarkxWolfI7_",
  "_ssss_",
  "0HANABI",
  "Viqex",
  "Wiwiyiv",
  "Ajkuu",
  "AmaniRaven",
  "cvrrents",
  "carlikolum6us",
  "oopsmb",
  "Aliea",
  "vrzp",
  "LoliLuuh",
  "MarkoK2015",
  "ClawedClaws",
  "auikyo",
  "Ikxpz",
  "savery69",
  "xCeciliaa",
  "fansigning",
  "ANBakes",
  "doij",
  "JustDreemurr",
  "_MrMorningstar",
  "4u3",
  "ooo",
  "30f1",
  "edupeluo",
  "Discra",
  "Gael_Gaming",
  "Revenescent",
  "whimsicalangel",
  "Qiqqles",
  "vingt",
  "PreviousComb411",
  "FireSire337",
  "eternal_topaz",
  "d3xie",
  "Vend1e",
  "czla",
  "Arvitix",
  "Mwsubi",
  "GermanMur",
  "Vepcz",
  "tsukiruyo",
  "qqxz",
  "LENN_KING",
  "AlfnART",
  "CaydenMichaell",
  "scaringy",
  "obsxssive",
  "Rari_Rium",
  "Muya",
  "BW_SasukePRIME",
  "punishxy",
  "freeAlcohol",
  "Koxic",
  "silly8271898278",
  "Mortifed",
  "rtyt",
  "kcsta",
  "philbertman42",
  "u_uo",
  "Pinpaz",
  "qpirobo",
  "kissyta",
  "Tajo_Fairy",
  "Phoenixlein",
  "nqea",
  "Wreeper",
  "YuriPvP",
  "Elminime",
  "AppleMyLove",
  "ItzSundae",
  "vaanic",
  "bcd2033c63ec4bf8",
  "mirouu",
  "Seye0n",
  "mxrlon7",
  "i2High",
  "syncprimeee",
  "ciqarette",
  "Sizoki",
  "SweetSahra",
  "Caffene",
  "Stackzzx",
  "BlastDriana",
  "g1teek",
  "zKevw",
  "Discra"
]
`,
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 7047,
                            timestamp: {
                                shortHand: 'Jan 25 21:53',
                                access: '2025-03-28 19:44:32.236258130 +0700',
                                modify: '2025-01-25 21:53:08.936590022 +0700',
                                change: '2025-01-25 21:53:08.936590022 +0700',
                                birth: '2025-01-25 21:53:08.936590022 +0700',
                            },
                        },
                        {
                            name: '.npm',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Dec 17 2024',
                            },
                        },
                        {
                            name: '.npmrc',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-------',
                            size: 74,
                            timestamp: {
                                shortHand: 'Dec 28 2024',
                            },
                        },
                        {
                            name: '.nv',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwx------',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 5 2024',
                            },
                        },
                        {
                            name: '.nvm',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Oct 21 2024',
                            },
                        },
                        {
                            name: '.oh-my-zsh',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jun 20 23:50',
                            },
                        },
                        {
                            name: '.openjfx',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 15 2024',
                            },
                        },
                        {
                            name: 'output.raw',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 105408000,
                            timestamp: {
                                shortHand: 'Apr 9 18:59',
                                access: '2025-04-09 18:59:17.753061327 +0700',
                                modify: '2025-04-09 18:59:17.375044998 +0700',
                                change: '2025-04-09 18:59:17.375044998 +0700',
                                birth: '2025-04-09 18:59:12.366828648 +0700',
                            },
                        },
                        {
                            name: 'output.txt',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 32571655,
                            timestamp: {
                                shortHand: 'Apr 14 15:30',
                                access: '2025-04-14 15:30:18.902237733 +0700',
                                modify: '2025-04-14 15:30:13.455033520 +0700',
                                change: '2025-04-14 15:30:13.455033520 +0700',
                                birth: '2025-04-14 15:30:12.312990466 +0700',
                            },
                        },
                        {
                            name: 'paru',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Oct 12 2024',
                                access: '2025-07-11 17:09:44.296701975 +0700',
                                modify: '2024-10-12 18:52:51.000262614 +0700',
                                change: '2024-10-12 18:52:51.000262614 +0700',
                                birth: '2024-10-12 18:52:36.056120427 +0700',
                            },
                            children: [
                                {
                                    name: '.git',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Oct 12 2024',
                                    },
                                },
                                {
                                    name: 'paru-2.0.4.tar.gz',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 8257932,
                                    timestamp: {
                                        shortHand: 'Oct 12 2024',
                                    },
                                },
                                {
                                    name: 'pkg',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'd--x--x--x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Oct 12 2024',
                                    },
                                },
                                {
                                    name: 'PKGBUILD',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1679,
                                    timestamp: {
                                        shortHand: 'Oct 12 2024',
                                    },
                                },
                                {
                                    name: 'src',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Oct 12 2024',
                                    },
                                },
                                {
                                    name: '.SRCINFO',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 651,
                                    timestamp: {
                                        shortHand: 'Oct 12 2024',
                                    },
                                },
                            ],
                        },
                        {
                            name: 'Pictures',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Apr 17 01:36',
                                access: '2025-07-11 17:09:44.305702358 +0700',
                                modify: '2025-04-17 01:36:33.989450379 +0700',
                                change: '2025-04-17 01:36:33.989450379 +0700',
                                birth: '2024-09-05 20:42:39.722960912 +0700',
                            },
                            children: [
                                {
                                    name: 'Screenshots',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 65536,
                                    timestamp: {
                                        shortHand: 'Jul 11 15:07',
                                    },
                                },
                            ],
                        },
                        {
                            name: '.profile',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 21,
                            timestamp: {
                                shortHand: 'Sep 7 2024',
                            },
                        },
                        {
                            name: 'Public',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 5 2024',
                                access: '2025-07-11 13:33:26.002524519 +0700',
                                modify: '2024-09-05 20:42:39.722960912 +0700',
                                change: '2024-09-05 20:42:39.722960912 +0700',
                                birth: '2024-09-05 20:42:39.722960912 +0700',
                            },
                            children: [],
                        },
                        {
                            name: '.pyenv',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Mar 26 20:33',
                            },
                        },
                        {
                            name: '.python_history',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 0,
                            timestamp: {
                                shortHand: 'Jun 13 19:19',
                            },
                        },
                        {
                            name: 'README.md',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 489,
                            content: `Credits:
- [JaKooLit](https://github.com/JaKooLit/Arch-Hyprland) for providing a base template for all my hyprland config, which I later modified heavily. (I removed his watermarks btw)
- [Vineeth](https://vineeth.io/posts/neovim-setup) for providing a useful guide on starting with neovim and its configuration. (Im using only nvim now)
- [Monorepo Setup](https://medium.com/@simontoth/best-way-to-manage-your-dotfiles-2c45bb280049) for providing a useful guide for creating the git repo`,
                            timestamp: {
                                shortHand: 'Apr 17 03:22',
                                access: '2025-04-17 03:23:33.012916946 +0700',
                                modify: '2025-04-17 03:22:16.750681660 +0700',
                                change: '2025-04-17 03:22:16.750681660 +0700',
                                birth: '2025-04-17 03:22:16.735681030 +0700',
                            },
                        },
                        {
                            name: 'recording.mkv',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 8176621,
                            timestamp: {
                                shortHand: 'Apr 14 15:21',
                                access: '2025-04-15 23:07:45.637250420 +0700',
                                modify: '2025-04-14 15:21:05.302789629 +0700',
                                change: '2025-04-14 15:21:05.302789629 +0700',
                                birth: '2025-04-14 15:20:17.506256108 +0700',
                            },
                        },
                        {
                            name: '.rustup',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 7 2024',
                            },
                        },
                        {
                            name: 'screen.mp4',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 1293305,
                            timestamp: {
                                shortHand: 'Apr 9 18:57',
                                access: '2025-05-29 19:00:09.805198858 +0700',
                                modify: '2025-04-09 18:57:55.532510044 +0700',
                                change: '2025-04-09 18:57:55.532510044 +0700',
                                birth: '2025-04-09 18:57:53.909439953 +0700',
                            },
                        },
                        {
                            name: 'screenshot.png',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 41759,
                            timestamp: {
                                shortHand: 'Apr 14 17:02',
                                access: '2025-05-29 19:00:04.250407433 +0700',
                                modify: '2025-04-14 17:02:21.036129993 +0700',
                                change: '2025-04-14 17:02:21.036129993 +0700',
                                birth: '2025-04-14 16:54:37.084022638 +0700',
                            },
                        },
                        {
                            name: '.spicetify',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'May 20 19:42',
                            },
                        },
                        {
                            name: '.ssh',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwx------',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jun 24 20:00',
                            },
                        },
                        {
                            name: '.surrealdb',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 7 2024',
                            },
                        },
                        {
                            name: 'Templates',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 5 2024',
                                access: '2025-07-11 13:33:26.003524562 +0700',
                                modify: '2024-09-05 20:42:39.722960912 +0700',
                                change: '2024-09-05 20:42:39.722960912 +0700',
                                birth: '2024-09-05 20:42:39.722960912 +0700',
                            },
                            children: [],
                        },
                        {
                            name: '.tetris.scores',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 272,
                            timestamp: {
                                shortHand: 'May 29 19:35',
                            },
                        },
                        {
                            name: 'text.txt',
                            type: 'file',
                            content: `



cosnt asjdoisaj = dasjidio
`,
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 29,
                            timestamp: {
                                shortHand: 'Jul 2 02:23',
                                access: '2025-07-02 02:23:12.796910499 +0700',
                                modify: '2025-07-02 02:23:10.820821961 +0700',
                                change: '2025-07-02 02:23:10.820821961 +0700',
                                birth: '2025-07-02 02:23:10.819821916 +0700',
                            },
                        },
                        {
                            name: '.themes',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 5 2024',
                            },
                        },
                        {
                            name: '.var',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Sep 6 2024',
                            },
                        },
                        {
                            name: 'vencord_installer.sh',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0755/-rwxr-xr-x',
                            size: 6692864,
                            timestamp: {
                                shortHand: 'Jul 11 12:57',
                                access: '2025-07-11 12:57:59.618510013 +0700',
                                modify: '2025-07-11 12:57:59.587508382 +0700',
                                change: '2025-07-11 12:57:59.599509013 +0700',
                                birth: '2025-03-02 16:51:55.862346442 +0700',
                            },
                        },
                        {
                            name: 'Videos',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: '0755/drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Apr 17 01:46',
                                access: '2025-07-11 17:09:44.346704104 +0700',
                                modify: '2025-04-17 01:46:19.033528544 +0700',
                                change: '2025-04-17 01:46:19.033528544 +0700',
                                birth: '2024-09-05 20:42:39.722960912 +0700',
                            },
                            children: [
                                {
                                    name: '2025-03-30 14-50-25.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 19873952,
                                    timestamp: {
                                        shortHand: 'Mar 30 14:51',
                                    },
                                },
                                {
                                    name: '2025-03-30 15-40-16.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 19252148,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:40',
                                    },
                                },
                                {
                                    name: '2025-03-30 15-41-19.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 21629036,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:42',
                                    },
                                },
                                {
                                    name: '2025-04-09 15-29-04.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1667868,
                                    timestamp: {
                                        shortHand: 'Apr 9 15:29',
                                    },
                                },
                                {
                                    name: '2025-04-13 18-02-23.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 12445298,
                                    timestamp: {
                                        shortHand: 'Apr 13 18:02',
                                    },
                                },
                                {
                                    name: '2025-04-13 18-03-47.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 16002375,
                                    timestamp: {
                                        shortHand: 'Apr 13 18:04',
                                    },
                                },
                                {
                                    name: '2025-04-13 18-14-32.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 46955742,
                                    timestamp: {
                                        shortHand: 'Apr 13 18:16',
                                    },
                                },
                                {
                                    name: '2025-04-14 15-09-23.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 771661,
                                    timestamp: {
                                        shortHand: 'Apr 14 15:09',
                                    },
                                },
                                {
                                    name: 'output2.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 5737471,
                                    timestamp: {
                                        shortHand: 'Mar 30 14:56',
                                    },
                                },
                                {
                                    name: 'output3.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 5763991,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:26',
                                    },
                                },
                                {
                                    name: 'output4.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 2719921,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:27',
                                    },
                                },
                                {
                                    name: 'output6.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 15505257,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:43',
                                    },
                                },
                                {
                                    name: 'output7.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 12748349,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:44',
                                    },
                                },
                                {
                                    name: 'output.mkv',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 6950571,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:31',
                                    },
                                },
                                {
                                    name: 'output.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 8069918,
                                    timestamp: {
                                        shortHand: 'Mar 30 14:53',
                                    },
                                },
                                {
                                    name: 'rec2.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 12926142,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:06',
                                    },
                                },
                                {
                                    name: 'rec3.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 9855419,
                                    timestamp: {
                                        shortHand: 'Mar 30 15:22',
                                    },
                                },
                                {
                                    name: 'Replay 2025-04-09 15-30-40.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 1859230,
                                    timestamp: {
                                        shortHand: 'Apr 9 15:30',
                                    },
                                },
                                {
                                    name: 'Replay 2025-04-09 15-34-55.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 54760737,
                                    timestamp: {
                                        shortHand: 'Apr 9 15:34',
                                    },
                                },
                                {
                                    name: 'Replay 2025-04-10 19-56-25.mp4',
                                    type: 'file',
                                    ownership: 'kony/kony',
                                    permissions: '-rw-r--r--',
                                    size: 943610,
                                    timestamp: {
                                        shortHand: 'Apr 10 19:56',
                                    },
                                },
                                {
                                    name: 'wallpapers',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Mar 30 14:15',
                                    },
                                },
                                {
                                    name: 'wayclip',
                                    type: 'directory',
                                    ownership: 'kony/kony',
                                    permissions: 'drwxr-xr-x',
                                    size: 4096,
                                    timestamp: {
                                        shortHand: 'Apr 8 22:11',
                                    },
                                },
                            ],
                        },
                        {
                            name: '.viminfo',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-------',
                            size: 1668,
                            timestamp: {
                                shortHand: 'Sep 28 2024',
                            },
                        },
                        {
                            name: '.wakatime',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jul 4 18:29',
                            },
                        },
                        {
                            name: '.wakatime.cfg',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 101,
                            timestamp: {
                                shortHand: 'Apr 10 14:52',
                            },
                        },
                        {
                            name: 'wave.gif',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 13024949,
                            timestamp: {
                                shortHand: 'Apr 1 15:41',
                                access: '2025-04-15 23:07:45.798257234 +0700',
                                modify: '2025-04-01 15:41:48.000000000 +0700',
                                change: '2025-04-01 22:42:28.313276873 +0700',
                                birth: '2025-04-01 22:42:28.305803691 +0700',
                            },
                        },
                        {
                            name: 'waybar.zip',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '0644/-rw-r--r--',
                            size: 8937,
                            timestamp: {
                                shortHand: 'Apr 1 20:28',
                                access: '2025-04-01 20:29:08.773392958 +0700',
                                modify: '2025-04-01 20:28:00.973421310 +0700',
                                change: '2025-04-01 20:28:00.973421310 +0700',
                                birth: '2025-04-01 20:28:00.972421266 +0700',
                            },
                        },
                        {
                            name: 'windows.sh',
                            type: 'file',
                            content: `
sudo efibootmgr --bootnext 0000
sudo reboot
`,
                            ownership: 'root/root',
                            permissions: '0755/-rwxr-xr-x',
                            size: 44,
                            timestamp: {
                                shortHand: 'Sep 15 2024',
                                access: '2025-07-10 19:32:34.464501062 +0700',
                                modify: '2024-09-15 17:16:09.832036676 +0700',
                                change: '2024-09-15 17:16:26.309391644 +0700',
                                birth: '2024-09-15 17:16:09.832036676 +0700',
                            },
                        },
                        {
                            name: '.yarn',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwxr-xr-x',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Dec 29 2024',
                            },
                        },
                        {
                            name: '.yarnrc',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 116,
                            timestamp: {
                                shortHand: 'Dec 29 2024',
                            },
                        },
                        {
                            name: '.zcompdump',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 50364,
                            timestamp: {
                                shortHand: 'Apr 17 03:15',
                            },
                        },
                        {
                            name: '.zcompdump-archlinux-5.9',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 50717,
                            timestamp: {
                                shortHand: 'Sep 5 2024',
                            },
                        },
                        {
                            name: '.zcompdump-archlinux-5.9.zwc',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-r--r--r--',
                            size: 118616,
                            timestamp: {
                                shortHand: 'Sep 5 2024',
                            },
                        },
                        {
                            name: '.zcompdump-ogony-5.9',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 51172,
                            timestamp: {
                                shortHand: 'Jun 27 15:16',
                            },
                        },
                        {
                            name: '.zcompdump-ogony-5.9.zwc',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-r--r--r--',
                            size: 119832,
                            timestamp: {
                                shortHand: 'Jun 27 15:16',
                            },
                        },
                        {
                            name: '.zen',
                            type: 'directory',
                            ownership: 'kony/kony',
                            permissions: 'drwx------',
                            size: 4096,
                            timestamp: {
                                shortHand: 'Jul 11 16:09',
                            },
                        },
                        {
                            name: '.zprofile',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 165,
                            timestamp: {
                                shortHand: 'May 28 22:18',
                            },
                        },
                        {
                            name: '.zshenv',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 21,
                            timestamp: {
                                shortHand: 'Sep 7 2024',
                            },
                        },
                        {
                            name: '.zsh_history',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-------',
                            size: 395360,
                            timestamp: {
                                shortHand: 'Jul 11 17:09',
                            },
                        },
                        {
                            name: '.zshrc',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 1956,
                            timestamp: {
                                shortHand: 'May 29 19:59',
                            },
                        },
                        {
                            name: '.zshrc-backup',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 3996,
                            timestamp: {
                                shortHand: 'Sep 5 2024',
                            },
                        },
                        {
                            name: '.zshrc.save',
                            type: 'file',
                            ownership: 'kony/kony',
                            permissions: '-rw-r--r--',
                            size: 883,
                            timestamp: {
                                shortHand: 'Sep 9 2024',
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'lib',
            type: 'file',
            ownership: 'root/root',
            permissions: 'lrwxrwxrwx',
            size: 7,
            timestamp: {
                shortHand: 'May 4 02:26',
            },
        },
        {
            name: 'lib64',
            type: 'file',
            ownership: 'root/root',
            permissions: 'lrwxrwxrwx',
            size: 7,
            timestamp: {
                shortHand: 'May 4 02:26',
            },
        },
        {
            name: 'lost+found',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwx------',
            size: 16384,
            timestamp: {
                shortHand: 'Sep 5 2024',
            },
        },
        {
            name: 'mnt',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 4096,
            timestamp: {
                shortHand: 'Apr 8 2024',
            },
        },
        {
            name: 'opt',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 4096,
            timestamp: {
                shortHand: 'Jul 8 18:01',
            },
        },
        {
            name: 'proc',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'dr-xr-xr-x',
            size: 0,
            timestamp: {
                shortHand: 'Jul 11 2025',
            },
        },
        {
            name: 'root',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwx------',
            size: 4096,
            timestamp: {
                shortHand: 'Jul 8 18:02',
            },
        },
        {
            name: 'run',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 700,
            timestamp: {
                shortHand: 'Jul 11 2025',
            },
        },
        {
            name: 'sbin',
            type: 'file',
            ownership: 'root/root',
            permissions: 'lrwxrwxrwx',
            size: 7,
            timestamp: {
                shortHand: 'May 4 02:26',
            },
        },
        {
            name: 'srv',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 4096,
            timestamp: {
                shortHand: 'Sep 5 2024',
            },
        },
        {
            name: 'sys',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'dr-xr-xr-x',
            size: 0,
            timestamp: {
                shortHand: 'Jul 11 16:57',
            },
        },
        {
            name: 'tmp',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxrwxrwt',
            size: 760,
            timestamp: {
                shortHand: 'Jul 11 17:09',
            },
        },
        {
            name: 'usr',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 4096,
            timestamp: {
                shortHand: 'Jul 11 12:57',
            },
        },
        {
            name: 'var',
            type: 'directory',
            ownership: 'root/root',
            permissions: 'drwxr-xr-x',
            size: 4096,
            timestamp: {
                shortHand: 'Jul 10 19:55',
            },
        },
    ],
};
