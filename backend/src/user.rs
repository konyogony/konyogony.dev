use actix_web::{post, web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use surrealdb::{engine::remote::ws::Client, sql::Thing, Error, Surreal};

use crate::db::init;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub access_token: String,
    pub login: String,
    pub _id: String,
    pub last_active: u64,
    pub avatar_url: String,
    pub url: String,
    pub html_url: String,
    pub followers_url: String,
    pub organizations_url: String,
    pub repos_url: String,
    pub name: String,
    pub location: String,
    pub email: String,
    pub bio: String,
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
            _id: String::new(),
            last_active: 0,
            avatar_url: String::new(),
            url: String::new(),
            html_url: String::new(),
            followers_url: String::new(),
            organizations_url: String::new(),
            repos_url: String::new(),
            name: String::new(),
            location: String::new(),
            email: String::new(),
            bio: String::new(),
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
            table: "users".to_string(),
            db,
        }
    }

    pub async fn get_all(&self) -> surrealdb::Result<Vec<User>> {
        let res: Vec<User> = self.db.select(&self.table).await?;
        Ok(res)
    }

    pub async fn does_exist(&self, id: &str) -> Result<bool, String> {
        match self.get_by_id(&id.to_string()).await {
            Ok(Some(_)) => Ok(true),
            Ok(None) => Ok(false),
            Err(e) => Err(format!("Error checking if user exists: {}", e)),
        }
    }

    pub async fn get_by_id(&self, id: &String) -> Result<Option<User>, String> {
        let res: Result<Option<User>, Error> = self.db.select((&self.table, id.to_string())).await;
        match res {
            Ok(Some(user)) => Ok(Some(user)),
            Ok(None) => Ok(None),
            Err(err) => Err(err.to_string()),
        }
    }

    pub async fn create(&self, user: User) -> surrealdb::Result<Vec<User>> {
        let res: Vec<User> = self.db.create(&self.table).content(&user).await?;
        Ok(res)
    }

    pub async fn update_user(&self, id: String, user: User) -> surrealdb::Result<User> {
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

    pub async fn delete(&self, id: String) -> surrealdb::Result<User> {
        let res = self.db.delete((&self.table, id.to_string())).await?;
        match res {
            Some(user) => Ok(user),
            None => Ok(User::default()),
        }
    }
}

#[post("/getById/{id}")]
pub async fn get_user_by_id(
    id: web::Path<String>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let res = user_repo.get_by_id(&id).await;
    match res {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to get user: {}", e)),
    }
}

#[post("/getAllUsers")]
pub async fn get_all_users(user_repo: web::Data<UserRepository>) -> impl Responder {
    match user_repo.get_all().await {
        Ok(users) => HttpResponse::Ok().json(users),
        Err(e) => {
            eprintln!("Error fetching users: {}", e); // Log the error
            HttpResponse::InternalServerError().body(format!("Failed to get users: {}", e))
        }
    }
}

#[post("/delete/{id}")]
pub async fn delete_user(
    id: web::Path<String>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let res = user_repo.delete(id.to_string()).await;
    match res {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to delete user: {}", e)),
    }
}

pub async fn update_user(
    id: String,
    user: User,
    user_repo: web::Data<UserRepository>,
) -> Result<User, String> {
    let res = user_repo.update_user(id.to_string(), user).await;
    match res {
        Ok(user) => Ok(user),
        Err(e) => Err(format!("Failed to update user: {}", e)),
    }
}

pub async fn create_user(user: User, user_repo: web::Data<UserRepository>) -> Result<User, String> {
    let res = user_repo.create(user).await;
    match res {
        Ok(users) => Ok(users[0].clone()),
        Err(e) => Err(format!("Failed to create user: {}", e)),
    }
}

#[post("/createOrUpdateUser")]
pub async fn create_or_update_user(
    user: web::Json<User>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let user = user.into_inner();
    eprint!("create_or_update_user: {:?} \n\n\n", &user);
    let user_clone = user.clone();
    eprint!("user_clone._id: {:?} \n\n\n", &user_clone._id);
    let userid = user._id.clone();
    match user_repo.does_exist(&userid).await {
        Ok(true) => match update_user(user._id, user_clone, user_repo).await {
            Ok(updated_user) => HttpResponse::Ok().json(updated_user),
            Err(e) => {
                eprintln!("Error updating user: {}", e);
                HttpResponse::InternalServerError().body(format!("Failed to update user: {}", e))
            }
        },
        Ok(false) => match create_user(user, user_repo).await {
            Ok(created_user) => HttpResponse::Ok().json(created_user),
            Err(e) => {
                eprintln!("Error creating user: {}", e);
                HttpResponse::InternalServerError().body(format!("Failed to create user: {}", e))
            }
        },
        Err(e) => {
            eprintln!("Error checking if user exists: {}", e);
            HttpResponse::InternalServerError()
                .body(format!("Failed to get user: {} \n\n\n\n\n", e))
        }
    }
}
