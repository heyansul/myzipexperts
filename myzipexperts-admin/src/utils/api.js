const API_BASE = import.meta.env.VITE_API_URL;

export async function apiRequest(
  endpoint,
  method = "GET",
  body = null,
  token = null
) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const authToken = token || localStorage.getItem("token");

  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    throw data;
  }

  return data;
}
console.log("API BASE =", import.meta.env.VITE_API_URL);