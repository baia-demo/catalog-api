export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

export const products: Product[] = [
  {
    id: "p-001",
    name: "Camiseta Básica Branca",
    description: "Camiseta 100% algodão, gola redonda, cor branca.",
    price: 49.9,
    stock: 120,
    category: "vestuario",
  },
  {
    id: "p-002",
    name: "Camisetas Premium Estampadas Pack 3",
    description: "Pack com 3 camisetas estampadas, edição limitada.",
    price: 149.9,
    stock: 30,
    category: "vestuario",
  },
  {
    id: "p-003",
    name: "Tênis Esportivo Runner X",
    description: "Tênis para corrida, amortecimento em EVA.",
    price: 299.9,
    stock: 45,
    category: "calcados",
  },
  {
    id: "p-004",
    name: "Mochila Urbana 25L",
    description: "Mochila resistente à água, compartimento para notebook.",
    price: 189.9,
    stock: 60,
    category: "acessorios",
  },
  {
    id: "p-005",
    name: "Boné Trucker Preto",
    description: "Boné estilo trucker, ajuste com snapback.",
    price: 79.9,
    stock: 200,
    category: "acessorios",
  },
  {
    id: "p-006",
    name: "Calça Jeans Slim Azul",
    description: "Calça jeans corte slim, elastano para conforto.",
    price: 199.9,
    stock: 80,
    category: "vestuario",
  },
  {
    id: "p-007",
    name: "Meias Esportivas Pack 5",
    description: "Pack com 5 pares de meias para esporte.",
    price: 59.9,
    stock: 150,
    category: "vestuario",
  },
];

export function findById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
