FROM rust:latest

WORKDIR /usr/src/app

COPY Cargo.toml Cargo.lock ./
RUN mkdir -p src && echo "fn main() {}" > src/main.rs

RUN cargo build --release
COPY . .
RUN cargo build --release

CMD ["cargo", "run", "--release"]
