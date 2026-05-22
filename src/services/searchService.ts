import { products, type Product } from "../data/products.js";

function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function tokenize(text: string): string[] {
  return normalize(text)
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

export function searchProducts(query: string, category?: string): Product[] {
  const queryTokens = tokenize(query);

  let pool = products;
  if (category) {
    pool = pool.filter((p) => p.category === category);
  }

  if (queryTokens.length === 0) {
    return pool;
  }

  return pool.filter((product) => {
    const nameTokens = tokenize(product.name);
    return queryTokens.every((qt) =>
      nameTokens.some((nt) => nt.startsWith(qt))
    );
  });
}
