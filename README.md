# catalog-api

API de catálogo de produtos da **ShopFlow** (loja fictícia da demo do BaIA).

Stack: Fastify 5 + TypeScript + Node 20.

## Endpoints

| Método | Path | Descrição |
|---|---|---|
| `GET` | `/products` | Lista todos os produtos |
| `GET` | `/products?q=<termo>` | Busca por termo |
| `GET` | `/products?category=<cat>` | Filtra por categoria |
| `GET` | `/products/:id` | Detalhe de um produto |
| `GET` | `/health` | Health check |

Categorias: `vestuario`, `calcados`, `acessorios`.

## Rodar local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build / Deploy

```bash
npm run build
node dist/server.js

# Fly.io
fly deploy
```

## Estrutura

```
src/
├── server.ts                # Bootstrap Fastify
├── routes/products.ts       # Handlers HTTP
├── services/searchService.ts # Lógica de busca/filtro
└── data/products.ts         # Dataset in-memory de produtos
```
