use actix_web::{get, web, HttpResponse, Responder};
use serde::Serialize;
use std::fs::{self, read_to_string};
use std::path::{Path, PathBuf};

#[get("/get-docs/{path:.*}")]
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
#[derive(Debug, Serialize)]
struct File {
    name: String,
    folder: String,
    path: String,
}

fn process_entries(
    entries: fs::ReadDir,
    folder: String,
    result: &mut Vec<File>,
) -> std::io::Result<()> {
    for entry in entries.flatten() {
        let path = entry.path();
        let metadata = fs::metadata(&path)?;

        if metadata.is_dir() {
            let new_folder = if folder == "/" {
                format!(
                    "{}/",
                    path.file_name()
                        .unwrap_or_default()
                        .to_str()
                        .unwrap_or_default()
                )
            } else {
                format!(
                    "{}/",
                    path.file_name()
                        .unwrap_or_default()
                        .to_str()
                        .unwrap_or_default()
                )
            };

            let sub_entries = fs::read_dir(&path)?;
            process_entries(sub_entries, new_folder, result)?;
        } else if let Some(ext) = path.extension() {
            if ext == "mdx" {
                if let Some(name) = path.file_stem().and_then(|s| s.to_str()) {
                    let name = name.to_string();
                    let path_str = format!("{}{}", folder, name);

                    result.push(File {
                        name,
                        folder: folder.clone(), // Clone the folder here
                        path: path_str,
                    });
                }
            }
        }
    }
    Ok(())
}

#[get("/get-structure")]
pub async fn get_structure() -> impl Responder {
    let dir_path = PathBuf::from("src/docs");
    let mut result = Vec::new();

    match fs::read_dir(dir_path) {
        Ok(entries) => match process_entries(entries, "/".to_string(), &mut result) {
            Ok(_) => HttpResponse::Ok()
                .content_type("application/json")
                .json(result),
            Err(err) => HttpResponse::InternalServerError()
                .content_type("text/plain")
                .body(format!("Error reading directory: {}", err)),
        },
        Err(err) => HttpResponse::InternalServerError()
            .content_type("text/plain")
            .body(format!("Error reading directory: {}", err)),
    }
}
