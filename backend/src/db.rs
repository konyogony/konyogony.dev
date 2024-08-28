use std::env;
use surrealdb::engine::remote::ws::Client;
use surrealdb::engine::remote::ws::Ws;
use surrealdb::opt::auth::Root;
use surrealdb::Surreal;

pub async fn init() -> surrealdb::Result<Surreal<Client>> {
    let username = env::var("DB_USERNAME").expect("DB_USERNAME not set");
    let pswd = env::var("DB_PASSWORD").expect("DB_PASSWORD not set");

    let db = Surreal::new::<Ws>("0.0.0.0:8080").await.map_err(|e| {
        eprintln!("Failed to connect to SurrealDB at 0.0.0.0:8080: {}", e);
        e
    })?;

    db.signin(Root {
        username: &username,
        password: &pswd,
    })
    .await
    .map_err(|e| {
        eprintln!("Failed to sign in with the provided credentials: {}", e);
        e
    })?;

    db.use_ns("dev").use_db("main").await.map_err(|e| {
        eprintln!(
            "Failed to select namespace 'dev' and database 'main': {}",
            e
        );
        e
    })?;

    Ok(db)
}
