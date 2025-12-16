// assets/js/api.js

export const API_BASE = "http://localhost:3000";

function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Erro na requisição");
  }

  return data;
}

export async function apiGet(path) {
  const res = await fetch(API_BASE + path, {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader()
    }
  });
  return handleResponse(res);
}

export async function apiPost(path, body) {
  const res = await fetch(API_BASE + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader()
    },
    body: JSON.stringify(body)
  });
  return handleResponse(res);
}

export async function apiPut(path, body) {
  const res = await fetch(API_BASE + path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader()
    },
    body: JSON.stringify(body)
  });
  return handleResponse(res);
}

export async function apiDelete(path) {
  const res = await fetch(API_BASE + path, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader()
    }
  });
  return handleResponse(res);
}
