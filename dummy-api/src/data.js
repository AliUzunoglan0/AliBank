const users = [
  { id: 1, name: "Ahmet Yılmaz", email: "ahmet.yilmaz@example.com", role: "admin" },
  { id: 2, name: "Elif Kaya", email: "elif.kaya@example.com", role: "user" },
  { id: 3, name: "Mehmet Demir", email: "mehmet.demir@example.com", role: "user" },
];

const products = [
  { id: 1, name: "Kablosuz Kulaklık", price: 799.9, currency: "TRY", stock: 24 },
  { id: 2, name: "Akıllı Saat", price: 1899.5, currency: "TRY", stock: 12 },
  { id: 3, name: "Mekanik Klavye", price: 1299.0, currency: "TRY", stock: 8 },
];

const orders = [
  { id: 101, userId: 1, productId: 2, quantity: 1, status: "shipped" },
  { id: 102, userId: 2, productId: 1, quantity: 2, status: "pending" },
  { id: 103, userId: 3, productId: 3, quantity: 1, status: "delivered" },
];

module.exports = { users, products, orders };
