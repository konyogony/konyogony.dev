use web_sys::window;

pub fn get_current_time() -> f64 {
    let performance = window()
        .unwrap()
        .performance()
        .expect("performance should be available");
    performance.now() / 1000.0
}
