const express = require("express");
const cors = require("cors");
const { users, products, orders, financingRates } = require("./data");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

function findOr404(list, id, res, label) {
  const item = list.find((x) => x.id === Number(id));
  if (!item) {
    res.status(404).json({ error: `${label} not found` });
    return null;
  }
  return item;
}

app.get("/", (req, res) => {
  res.json({
    name: "dummy-api",
    status: "ok",
    endpoints: [
      "GET /health",
      "GET /api/users",
      "GET /api/users/:id",
      "GET /api/products",
      "GET /api/products/:id",
      "GET /api/orders",
      "GET /api/orders/:id",
      "GET /api/finansman-oranlari",
      "GET /api/finansman-oranlari/:id",
      "POST /api/echo",
    ],
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/users", (req, res) => res.json(users));
app.get("/api/users/:id", (req, res) => {
  const item = findOr404(users, req.params.id, res, "User");
  if (item) res.json(item);
});

app.get("/api/products", (req, res) => res.json(products));
app.get("/api/products/:id", (req, res) => {
  const item = findOr404(products, req.params.id, res, "Product");
  if (item) res.json(item);
});

app.get("/api/orders", (req, res) => res.json(orders));
app.get("/api/orders/:id", (req, res) => {
  const item = findOr404(orders, req.params.id, res, "Order");
  if (item) res.json(item);
});

app.get("/api/finansman-oranlari", (req, res) => res.json(financingRates));
app.get("/api/finansman-oranlari/:id", (req, res) => {
  const item = financingRates.find((x) => x.id === req.params.id);
  if (!item) {
    res.status(404).json({ error: "Finansman türü bulunamadı" });
    return;
  }
  res.json(item);
});

app.post("/api/echo", (req, res) => {
  res.json({ receivedAt: new Date().toISOString(), body: req.body });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`dummy-api listening on port ${PORT}`);
});
