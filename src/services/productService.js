import { apiFetch } from "./api";

export const productService = {
  getAll: () => apiFetch("/products"),

  getOne: (id) => apiFetch(`/products/${id}`),

  create: (data) =>
    apiFetch("/products", {
      method: "POST",
      body: JSON.stringify(data)
    })
};
