import { products } from "../data/catalog";

export function getInventoryStats(productList = products) {
  const safeProducts = Array.isArray(productList) ? productList : [];

  const inStockProducts = safeProducts.filter(
    (product) => Number(product.stock || 0) > 0
  );

  const outOfStockProducts = safeProducts.filter(
    (product) => Number(product.stock || 0) <= 0
  );

  const lowInventoryProducts = safeProducts.filter((product) => {
    const stock = Number(product.stock || 0);

    return stock > 0 && stock <= 3;
  });

  const totalUnits = safeProducts.reduce(
    (sum, product) => sum + Number(product.stock || 0),
    0
  );

  const retailInventoryValue = safeProducts.reduce((sum, product) => {
    const price = Number(product.price || 0);
    const stock = Number(product.stock || 0);

    return sum + price * stock;
  }, 0);

  return {
    totalProducts: safeProducts.length,
    totalUnits,
    inStockProducts: inStockProducts.length,
    outOfStockProducts: outOfStockProducts.length,
    lowInventoryProducts: lowInventoryProducts.length,
    retailInventoryValue,
    inStockProductsList: inStockProducts,
    outOfStockProductsList: outOfStockProducts,
    lowInventoryProductsList: lowInventoryProducts,
  };
}
