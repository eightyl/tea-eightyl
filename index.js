// Sample data - an array of products
const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Headphones', price: 80 },
    { id: 3, name: 'Mouse', price: 25 },
    { id: 4, name: 'Keyboard', price: 100 },
  ];
  
  // Helper function to filter products by price range
  function filterProductsByPrice(productsArray, minPrice, maxPrice) {
    if (!Array.isArray(productsArray) || productsArray.length === 0 || typeof minPrice !== 'number' || typeof maxPrice !== 'number') {
      throw new Error("Invalid inputs. Products array must be a non-empty array, and minPrice and maxPrice must be numbers");
    }
  
    return productsArray.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }
  
  // Helper function to sort products by price in ascending order
  function sortProductsByPrice(productsArray) {
    if (!Array.isArray(productsArray) || productsArray.length === 0) {
      throw new Error("Input must be a non-empty array of products");
    }
  
    return productsArray.slice().sort((a, b) => a.price - b.price);
  }
  
  // Demo using the helper functions
  try {
    const affordableProducts = filterProductsByPrice(products, 30, 200);
    console.log("Affordable Products:", affordableProducts);
  
    const sortedProductsByPrice = sortProductsByPrice(products);
    console.log("Sorted Products by Price:", sortedProductsByPrice);
  } catch (error) {
    console.error("Error:", error.message);
  }
  