use actix_web::{get, web, HttpResponse, Responder};
use std::fs::read_to_string;
use std::path::Path;

#[get("/get-docs/{path}")]
pub async fn get_docs(path: web::Path<String>) -> impl Responder {
    let file_path = format!("src/docs/{}.mdx", path.into_inner());

    if !Path::new(&file_path).exists() {
        return HttpResponse::NotFound()
            .content_type("text/plain")
            .body(format!("Document not found in {}", file_path));
    }

    match read_to_string(&file_path) {
        Ok(content) => HttpResponse::Ok().content_type("text/plain").body(content),
        Err(_) => HttpResponse::InternalServerError()
            .content_type("text/plain")
            .body("Error reading the document"),
    }
}
