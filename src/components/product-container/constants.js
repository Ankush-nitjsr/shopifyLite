// Price filter ranges
const priceRanges = [
  { label: "Under $50", startPrice: 0, endPrice: 50 },
  { label: "$50 - $100", startPrice: 50, endPrice: 100 },
  { label: "$100 - $250", startPrice: 100, endPrice: 250 },
  { label: "$250 - $500", startPrice: 250, endPrice: 500 },
  { label: "$500 - $1000", startPrice: 500, endPrice: 1000 },
  { label: "Over $1000", startPrice: 1000, endPrice: Infinity },
];

export { priceRanges };
