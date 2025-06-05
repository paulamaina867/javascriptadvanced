// Fetch and print a random joke
async function fetchJoke() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await res.json();
    console.log("🃏 Random Joke:");
    console.log("Setup:", joke.setup);
    console.log("Punchline:", joke.punchline);
  } catch (err) {
    console.error("Failed to fetch joke:", err);
  }
}

// Fetch and print products
async function fetchProducts() {
  try {
    const res = await fetch("https://sengi2025.pythonanywhere.com/api/getproducts");
    const products = await res.json();
    console.log("\n🛒 Product List:");
    products.forEach(p => {
      console.log(`Name: ${p.product_name} | Price: ${p.price}`);
    });
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }
}

// Run both functions
fetchJoke();
fetchProducts();
