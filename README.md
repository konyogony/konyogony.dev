# konyogony.dev (WIP)

Personal website to host my portofolio, DB and future API's. \
Built using Yew, Tailwind and Github's OAuth2. First experience with WA and Rust for backend.

# Installation:
1. Install SurrealDB with `curl -sSf https://install.surrealdb.com | sh`
2. Start DB using `cd backend; ./db.sh`
3. Start Backend using `cd backend; ./rs.sh`
4. Start Frontend using `cd frontend; ./run.sh`

Currently using ngnix to make SSL work, so website loads on https://localhost

# Roadmap

## Frontend:
- [ ] Home Page
- [ ] Discord Bot Page 
- [ ] Login Page 
- [ ] Notes App

## Backend:
- [ ] API (Oauth)
- [ ] API (Discord Bot)
- [ ] API (Notes)
- [ ] Login
- [ ] Logout
- [ ] Page refresh
- [ ] Updating Last active 

## Misc:
- [ ] Make social redirect (e.g. /social/spotify)
- [ ] Useful Info Page (e.g. /extras#boot-into-windows)
- [ ] Admin for Info page
