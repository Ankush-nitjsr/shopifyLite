// Price filter ranges
const priceRanges = [
  { label: "Under $50", startPrice: 0, endPrice: 50 },
  { label: "$50 - $100", startPrice: 50, endPrice: 100 },
  { label: "$100 - $250", startPrice: 100, endPrice: 250 },
  { label: "$250 - $500", startPrice: 250, endPrice: 500 },
  { label: "$500 - $1000", startPrice: 500, endPrice: 1000 },
  { label: "Over $1000", startPrice: 1000, endPrice: Infinity },
];

// Discount options
const discounts = [
  { label: "5% Off or more", value: 5 },
  { label: "10% Off or more", value: 10 },
  { label: "15% Off or more", value: 15 },
  { label: "20% Off or more", value: 20 },
];

// Rating options
const ratings = [
  { label: "1 ⭐ & above", value: 1 },
  { label: "2 ⭐ & above", value: 2 },
  { label: "3 ⭐ & above", value: 3 },
  { label: "4 ⭐ & above", value: 4 },
];

export { priceRanges, discounts, ratings };
