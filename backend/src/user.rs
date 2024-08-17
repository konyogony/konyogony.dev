use actix_web::{post, web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use surrealdb::{engine::remote::ws::Client, Surreal};

use crate::db::init;

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    pub access_token: String,
    pub login: String,
    pub id: u64,
    pub last_active: u64,
    pub avatar_url: String,
    pub url: String,
    pub html_url: String,
    pub followers_url: String,
    pub organizations_url: String,
    pub repos_url: String,
    pub name: Option<String>,
    pub location: Option<String>,
    pub email: Option<String>,
    pub bio: Option<String>,
    pub public_repos: u64,
    pub followers: u64,
    pub following: u64,
    pub created_at: String,
    pub updated_at: String,
}

impl Default for User {
    fn default() -> Self {
        User {
            access_token: String::new(),
            login: String::new(),
            id: 0,
            last_active: 0,
            avatar_url: String::new(),
            url: String::new(),
            html_url: String::new(),
            followers_url: String::new(),
            organizations_url: String::new(),
            repos_url: String::new(),
            name: None,
            location: None,
            email: None,
            bio: None,
            public_repos: 0,
            followers: 0,
            following: 0,
            created_at: String::new(),
            updated_at: String::new(),
        }
    }
}

#[derive(Clone, Debug)]
pub struct UserRepository {
    pub table: String,
    pub db: Surreal<Client>,
}

impl UserRepository {
    pub async fn new() -> Self {
        let db = init().await.unwrap();
        UserRepository {
            table: "user".to_string(),
            db,
        }
    }

    pub async fn get_all(&self) -> surrealdb::Result<Vec<User>> {
        let res: Vec<User> = self.db.select(&self.table).await?;
        Ok(res)
    }

    pub async fn get_by_id(&self, id: u64) -> surrealdb::Result<Option<User>> {
        let res = self.db.select((&self.table, id.to_string())).await?;
        match res {
            Some(user) => Ok(Some(user)),
            None => Ok(None),
        }
    }

    pub async fn create(&self, user: User) -> surrealdb::Result<Vec<User>> {
        let res: Vec<User> = self.db.create(&self.table).content(&user).await?;
        Ok(res)
    }

    pub async fn update_user(&self, id: u64, user: User) -> surrealdb::Result<User> {
        let res = self
            .db
            .update((&self.table, id.to_string()))
            .content(&user)
            .await?;
        match res {
            Some(user) => Ok(user),
            None => Ok(user),
        }
    }

    pub async fn delete(&self, id: u64) -> surrealdb::Result<User> {
        let res = self.db.delete((&self.table, id.to_string())).await?;
        match res {
            Some(user) => Ok(user),
            None => Ok(User::default()),
        }
    }
}

#[post("/getById/{id}")]
pub async fn get_user_by_id(
    id: web::Path<u64>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let id = id.into_inner();
    let res = user_repo.get_by_id(id).await;
    match res {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to get user: {}", e)),
    }
}

#[post("/getAllUsers")]
pub async fn get_all_users(user_repo: web::Data<UserRepository>) -> impl Responder {
    let res = user_repo.get_all().await;
    match res {
        Ok(users) => HttpResponse::Ok().json(users),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to get users: {}", e)),
    }
}

#[post("/delete/{id}")]
pub async fn delete_user(
    id: web::Path<u64>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let id = id.into_inner();
    let res = user_repo.delete(id).await;
    match res {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to delete user: {}", e)),
    }
}

pub async fn update_user(
    id: u64,
    user: User,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let res = user_repo.update_user(id, user).await;
    match res {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to update user: {}", e)),
    }
}

pub async fn create_user(user: User, user_repo: web::Data<UserRepository>) -> impl Responder {
    let res = user_repo.create(user).await;
    match res {
        Ok(users) => HttpResponse::Ok().json(users),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to create user: {}", e)),
    }
}

pub async fn create_or_update_user(id: u64, user: User, user_repo: web::Data<UserRepository>) {
    match user_repo.get_by_id(id).await {
        Ok(Some(_)) => {
            update_user(id, user, user_repo).await;
        }
        Ok(None) => {
            create_user(user, user_repo).await;
        }
        Err(e) => eprintln!("Error getting user by ID: {}", e),
    }
}
