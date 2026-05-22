import type { FastifyInstance } from "fastify";
import { products, findById } from "../data/products.js";
import { searchProducts } from "../services/searchService.js";

interface SearchQuery {
  q?: string;
  category?: string;
}

export async function registerProductRoutes(app: FastifyInstance): Promise<void> {
  app.get("/products", async (request) => {
    const { q, category } = request.query as SearchQuery;

    if (q !== undefined || category !== undefined) {
      const results = searchProducts(q ?? "", category);
      request.log.info(
        { query: q, category, hits: results.length },
        "product search"
      );
      return { items: results, total: results.length };
    }

    return { items: products, total: products.length };
  });

  app.get<{ Params: { id: string } }>("/products/:id", async (request, reply) => {
    const { id } = request.params;
    const product = findById(id);
    if (!product) {
      reply.code(404);
      return { error: "product_not_found", id };
    }
    return product;
  });

  app.get("/health", async () => ({ status: "ok", service: "catalog-api" }));
}
