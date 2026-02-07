# cursetomod

A CLI tool that converts CurseForge modpacks (`.zip`) to Modrinth format (`.mrpack`) — because life's too short to be stuck in CurseForge's walled garden.

## Why?

CurseForge and Modrinth are the two main Minecraft mod distribution platforms. Unfortunately, they use completely incompatible modpack formats, because of course they do. CurseForge, in its infinite wisdom, also requires an API key just to download files that mod authors uploaded for free, locks some downloads behind their launcher, and generally makes the process of moving your modpack anywhere else as painful as possible.

**cursetomod** takes your CurseForge modpack and converts it to a `.mrpack` that you can import directly into [Modrinth App](https://modrinth.com/app), [Prism Launcher](https://prismlauncher.org/), or any other launcher that supports the Modrinth format.

Here's what it does:

1. Reads the CurseForge `manifest.json` from your modpack zip
2. Looks up each mod's SHA1 hash on Modrinth — if it's there, it uses the Modrinth CDN URL (no bundling needed)
3. For mods that aren't on Modrinth, it downloads the `.jar` from CurseForge and bundles it in the pack's `overrides/mods/`
4. Preserves all your configs, KubeJS scripts, resource packs, shader packs, and everything else in `overrides/`
5. Wraps it all up in a valid `.mrpack`

## Installation

### Pre-built binaries

Grab the latest release from the [Releases](../../releases) page:

- **Windows**: `cursetomod-win-x64.exe` — single executable, no .NET runtime needed
- **Linux**: `cursetomod-linux-x64` — single executable, no .NET runtime needed

### Build from source

Requires [.NET 10 SDK](https://dotnet.microsoft.com/download).

```bash
git clone https://github.com/your-username/cursetomod.git
cd cursetomod
dotnet build
```

## Usage

```
cursetomod <input.zip> [output.mrpack]
```

### Examples

```bash
# Basic conversion (outputs MyModpack.mrpack in the same directory)
cursetomod MyModpack.zip

# Specify output path
cursetomod MyModpack.zip converted/MyModpack.mrpack

# Provide API key inline (skips the stored key)
cursetomod MyModpack.zip --cf-api-key YOUR_KEY_HERE
```

### Options

| Flag | Description |
|---|---|
| `--cf-api-key <key>` | CurseForge API key (overrides stored key) |

## CurseForge API Key

Yeah, you need one of these. CurseForge requires an API key to access their file metadata — even for public mods. Thanks, CurseForge.

1. Go to [console.curseforge.com](https://console.curseforge.com/#/api-keys)
2. Create an account if you don't have one (yes, *another* account)
3. Generate an API key
4. Paste it when cursetomod asks

The key is validated before being saved, so you won't accidentally store a typo. It's persisted to `%APPDATA%/cursetomod/config.json` (Windows) or `~/.config/cursetomod/config.json` (Linux) so you only have to do this once.

If you don't want to bother, type `ignore` at the prompt and cursetomod will skip the CurseForge API entirely — but every single mod will need to be manually downloaded. Not recommended unless you really enjoy suffering.

## How It Works

### Mod Resolution

For each mod in the CurseForge manifest:

1. **Fetch metadata** from the CurseForge API (SHA1 hashes, filenames, download URLs)
2. **Check Modrinth** by sending all SHA1 hashes to Modrinth's batch lookup endpoint
3. **If found on Modrinth**: reference the Modrinth CDN URL in `modrinth.index.json` — the launcher downloads it directly, no bundling required
4. **If NOT found on Modrinth**: download the jar and bundle it in `overrides/mods/`

### Download Fallback (3-tier)

CurseForge being CurseForge, some mods have their download URLs set to `null` (authors can opt out of third-party downloads because... reasons). cursetomod handles this with a 3-tier fallback:

1. **CurseForge API `downloadUrl`** — the "intended" way, when it actually exists
2. **ForgeCDN** — direct CDN URL construction, works for most files
3. **CurseForge website endpoint** — last resort, follows redirects to the actual file

### Manual Recovery

If all three download methods fail (looking at you, mods with "project distribution disabled"), cursetomod doesn't just give up:

- Opens a temp folder in your file explorer
- Tells you exactly which mod failed and gives you the CurseForge download page URL
- Watches the folder for new files using a `FileSystemWatcher`
- When you drop a file in, it uses fuzzy filename matching to verify it's the right one
- If the filename doesn't look right, it asks you to confirm
- Type `skip` to skip a mod, `Ctrl+C` to bail

### Output Format

The generated `.mrpack` contains:

```
modrinth.index.json     # Pack metadata, dependencies, and Modrinth file references
overrides/
  config/               # All config files from the original pack
  mods/                 # Bundled jars for mods not available on Modrinth
  kubejs/               # KubeJS scripts (if present)
  defaultconfigs/       # Default configs (if present)
  ...                   # Everything else from the original overrides
```

### Supported Mod Loaders

Whatever your CurseForge pack uses — Forge, NeoForge, Fabric, Quilt — gets mapped to the correct Modrinth dependency key automatically.

## Color-coded Output

cursetomod uses color to make the wall of mod names actually readable:

- **Blue** — found on Modrinth (no download needed)
- **Orange** — not on Modrinth, downloading from CurseForge
- **Green** — success (download complete, file found, valid API key)
- **Yellow** — warnings (skipped mods, fallback notices)
- **Red** — errors (download failures, invalid API key)

### Example Output

```
Reading manifest...
  Pack: Reclamation v2.3.0
  Minecraft 1.20.1, forge 47.4.0
  159 mods

Fetching file info from CurseForge API...
Checking Modrinth availability...

[  1/159] JEI — Found on Modrinth ✓
[  2/159] Applied Energistics 2 — Found on Modrinth ✓
[  3/159] SomeObscureMod — Not on Modrinth, downloading... ✓
[  4/159] RestrictedMod — Not on Modrinth, downloading... FAILED
...

Done! 140 mods from Modrinth, 18 mods bundled in overrides, 1 mod(s) failed.
Output: Reclamation.mrpack
```

## Overwrite Protection

If the output file already exists, cursetomod asks before overwriting. Say **no** and it'll append a suffix (`_1`, `_2`, etc.) instead of clobbering your existing file.

## Building

```bash
dotnet build                    # Debug build
dotnet publish -c Release       # Release build
dotnet run -- MyModpack.zip     # Build and run in one step
```
