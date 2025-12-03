const API = "http://localhost:3000";

async function api(url, method = "GET", data = null) {
    const token = localStorage.getItem("token");

    const options = {
        method,
        headers: { "Content-Type": "application/json" }
    };

    if (token) options.headers["Authorization"] = "Bearer " + token;
    if (data) options.body = JSON.stringify(data);

    const res = await fetch(API + url, options);
    return res.json();
}

function loadComponent(id, path) {
    fetch(path)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
}
