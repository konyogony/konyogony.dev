use std::env;
use surrealdb::engine::remote::ws::Client;
use surrealdb::engine::remote::ws::Ws;
use surrealdb::opt::auth::Root;
use surrealdb::Surreal;

pub async fn init() -> surrealdb::Result<Surreal<Client>> {
    let username = env::var("DB_USERNAME").expect("DB_USERNAME not set");
    let pswd = env::var("DB_PASSWORD").expect("DB_PASSWORD not set");

    let db = Surreal::new::<Ws>("127.0.0.1:8080").await?;

    db.signin(Root {
        username: &username,
        password: &pswd,
    })
    .await?;

    db.use_ns("dev").use_db("main").await?;

    Ok(db)
}
