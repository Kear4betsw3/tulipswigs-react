const BASE = "http://localhost:3000/api";

export async function apiFetch(path, options = {}) {
  const res = await fetch(BASE + path, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  if (!res.ok) throw new Error("API exploded");
  return res.json();
}
