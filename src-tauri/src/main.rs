#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{
  api::process::{Command},
};

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let conf_path = app
        .path_resolver()
        .resolve_resource("assets/rclone.conf")
        .unwrap()
        .to_string_lossy()
        .to_string();

      let conf_flag = format!("--config={}", conf_path);

      tauri::async_runtime::spawn(async move {
        Command::new_sidecar("rclone")
          .expect("Failed to create rclone server command")
          .args(["rcd", "--rc-no-auth", "--rc-allow-origin=*", "--rc-addr=:5572", &conf_flag])
          .spawn()
          .expect("Failed to spawn rclone server");
      });

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
