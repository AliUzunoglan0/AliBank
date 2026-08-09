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

const financingRates = [
  {
    id: "konut",
    name: "Konut Finansmanı",
    minRate: 2.79,
    maxRate: 3.35,
    rateType: "monthly",
    currency: "TRY",
    minTermMonths: 12,
    maxTermMonths: 120,
    updatedAt: "2026-08-10",
  },
  {
    id: "ihtiyac",
    name: "İhtiyaç Finansmanı",
    minRate: 3.19,
    maxRate: 4.25,
    rateType: "monthly",
    currency: "TRY",
    minTermMonths: 3,
    maxTermMonths: 36,
    updatedAt: "2026-08-10",
  },
  {
    id: "tasit",
    name: "Taşıt Finansmanı",
    minRate: 2.99,
    maxRate: 3.79,
    rateType: "monthly",
    currency: "TRY",
    minTermMonths: 6,
    maxTermMonths: 48,
    updatedAt: "2026-08-10",
  },
  {
    id: "ticari",
    name: "Ticari Finansman",
    minRate: 3.49,
    maxRate: 4.75,
    rateType: "monthly",
    currency: "TRY",
    minTermMonths: 3,
    maxTermMonths: 60,
    updatedAt: "2026-08-10",
  },
];

module.exports = { users, products, orders, financingRates };
