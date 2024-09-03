# konyogony.dev (WIP)

Personal website to host my portofolio, DB and future API's. \
Built using Yew, Tailwind and Github's OAuth2. First experience with WA and Rust for backend.

# Installation:

1. Install rustup and other dependencies using:

- `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- `cargo install --locked trunk`
- `rustup target add wasm32-unknown-unknown`
- `curl -sSf https://install.surrealdb.com | sh`

2. Start frontend & backend using one command: `./start.sh`

Currently using ngnix to make SSL work, so website loads on https://localhost

# Roadmap

## Frontend:

- [ ] Home Page (mid)
- [ ] Discord Bot Page
- [ ] Login Page
- [ ] Notes App (later)
- [ ] Fetch my github info on about page

## Backend:

- [ ] API (Oauth) (Half-way done)
- [ ] API (Discord Bot)
- [ ] API (Notes)
- [ ] Login (Half-way)
- [ ] Logout
- [ ] Page refresh
- [ ] Updating Last active

## Misc:

- [x] Make social redirect (e.g. /social/spotify)
- [ ] Useful Info Page (e.g. /extras#boot-into-windows)
- [ ] Admin for Info page
- [x] Add "About" command for my discord-bot
- [ ] Proper branding (currently using [steamhappy](https://i.redd.it/i-made-steamhappy-vector-image-v0-jmmqmwzwk14c1.png?width=800&format=png&auto=webp&s=7cc8498450fbd323b22899722ac24cbd23a91a83))
