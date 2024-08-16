use serde::{Deserialize, Serialize};
use surrealdb::{engine::remote::ws::Client, Surreal};

use crate::db::init;

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    login: String,
    id: u64,
    node_id: String,
    avatar_url: String,
    gravatar_id: Option<String>,
    url: String,
    html_url: String,
    followers_url: String,
    following_url: String,
    gists_url: String,
    starred_url: String,
    subscriptions_url: String,
    organizations_url: String,
    repos_url: String,
    events_url: String,
    received_events_url: String,
    #[serde(rename = "type")]
    type_: String,
    site_admin: bool,
    name: Option<String>,
    company: Option<String>,
    blog: Option<String>,
    location: Option<String>,
    email: Option<String>,
    notification_email: Option<String>,
    hireable: Option<bool>,
    bio: Option<String>,
    twitter_username: Option<String>,
    public_repos: u64,
    public_gists: u64,
    followers: u64,
    following: u64,
    created_at: String,
    updated_at: String,
}

impl Default for User {
    fn default() -> Self {
        User {
            login: String::new(),
            id: 0,
            node_id: String::new(),
            avatar_url: String::new(),
            gravatar_id: None,
            url: String::new(),
            html_url: String::new(),
            followers_url: String::new(),
            following_url: String::new(),
            gists_url: String::new(),
            starred_url: String::new(),
            subscriptions_url: String::new(),
            organizations_url: String::new(),
            repos_url: String::new(),
            events_url: String::new(),
            received_events_url: String::new(),
            type_: String::new(),
            site_admin: false,
            name: None,
            company: None,
            blog: None,
            location: None,
            email: None,
            notification_email: None,
            hireable: None,
            bio: None,
            twitter_username: None,
            public_repos: 0,
            public_gists: 0,
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
