// async and await functions
// these two keywords are used when the function you're using is expecting some data from outside the function

const fetchdata = async () => {
    try {
        // First: fetch a random joke
        let jokeResponse = await fetch("https://official-joke-api.appspot.com/random_joke");

        // Destructure the setup and punchline
        let { setup, punchline } = await jokeResponse.json();

        // Print the joke
        console.log(" Joke Setup: " + setup);
        console.log(" Punchline: " + punchline);

        // Second: fetch the product list
        let productResponse = await fetch("https://sengi2025.pythonanywhere.com/api/getproducts");

        // Parse the response JSON
        let products = await productResponse.json();

        // Loop through and print product_name and price
        console.log(" Product List:");
        products.forEach(product => {
            console.log("Product Name: " + product.product_name);
            console.log("Price: " + product.price);
            console.log("--------------------");
        });

    } catch (error) {
        // Catch and print any error
        console.error(" Error fetching the data: " + error);
    }
};

// Call the function
fetchdata();
