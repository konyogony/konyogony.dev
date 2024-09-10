# konyogony.dev (WIP)

Personal website to host my portofolio, DB and future API's. \
Built using Yew, Tailwind and GitHub's OAuth2. First experience with WA and Rust for backend.

## Main Installation Guide
1. Install rustup, bun and other dependencies using:
- `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- `curl -sSf https://install.surrealdb.com | sh`
- `curl -fsSL https://bun.sh/install | bash`
2. Install packages using:
   `cd frontend & bun install`
3. Start frontend & backend using one command: `./start.sh`

## SSL Installation Guide

You have to make sure you have setup nginx and SSL certificates to run on https, the steps are following:

1. Make sure you have installed [nginx](https://nginx.org/) and [mkcert](https://github.com/FiloSottile/mkcert)
2. Run `mkcert -install` to authenticate your device 
3. Then run `mkcert localhost` to get SSL certificate
4. Place `localhost.pem` and `localhost-key.pem` inside the root of backend directory
5. Change the `main.rs` file in backend to include the files you just made. Here is an example:
```rs
builder
    .set_private_key_file(
        "<REPLACE WITH YOUR CERTIFICATE LOCATION (NOT RELATIVE)>",
        SslFiletype::PEM,
    )
    .unwrap();
builder
    .set_certificate_chain_file(
        "<REPLACE WITH YOUR CERTIFICATE KEY LOCATION (NOT RELATIVE)>",
    )
    .unwrap();
```
6. Then edit nginx config using `nano /etc/nginx/nginx.conf` and adding following lines inside the http block:
```nginx
include /etc/nginx/sites-enabled/*;

types_hash_max_size 2048;
types_hash_bucket_size 128;
```
7. Create and edit file `localhost` using `nano /etc/nginx/sites-enabled/localhost`
8. Paste following lines replacing location of files `ssl_certificate` and `ssl_certificate_key`:
```nginx
server {
    listen 443 ssl;
    server_name localhost;

    ssl_certificate <REPLACE WITH YOUR CERTIFICATE LOCATION (NOT RELATIVE)>;
    ssl_certificate_key <REPLACE WITH YOUR CERTIFICATE KEY LOCATION (NOT RELATIVE)>;

    location / {
        proxy_pass http://localhost:5000/;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_http_version 1.1;
        proxy_set_header Connection "Upgrade";
    }
}
```
9. Run `systemcl enable nginx` and `systemcl start nginx` to enable automatic start on boot. Check for errors
10. Frontend should be now up and running on https://localhost!


## Roadmap
### Frontend
- [x] Move to Vite
- [ ] Home Page
  - [ ] About
  - [ ] Portfolio
  - [ ] Projects
  - [ ] Links 
- [ ] Discord Bot Page
  - [ ] About
  - [ ] Link 
- [ ] Login Page
  - [ ] Change layout
  - [ ] Fix login system 
- [ ] Notes App
- [ ] Useful Info Page (e.g. `/extras#boot-into-windows`)
  - [ ] Use some Wiki lib 
- [x] Make social redirect (e.g. `/social/spotify`)

### Backend
- [ ] Auth working
  - [x] Get access-token
  - [x] Get user data
  - [x] Make user in DB
  - [x] Create & give JWT token
    - [ ] Pass in cookies
  - [ ] Validate JWT
  - [ ] Checking last active     
- [ ] Notes app

### Misc
- [ ] Discord bot pull on commit to main branch
- [ ] Admin for Info page
- [x] Add "About" command for my discord-bot
- [ ] Proper branding and PFP (currently using [steamhappy](https://i.redd.it/i-made-steamhappy-vector-image-v0-jmmqmwzwk14c1.png?width=800&format=png&auto=webp&s=7cc8498450fbd323b22899722ac24cbd23a91a83) everywhere I can)




<!-- +rep chatgpt -->