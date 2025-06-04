//sync en await functions
//this two keywords are used wen the function ur using is expecting some other additional info/ data from outside the function

const fetchdata = async () => {
    try {
        // Send a request to the API
        let response = await fetch("https://api.chucknorris.io/jokes/random");

        // Convert the response to JSON and destructure the needed values
        let { id, created_at, value } = await response.json();

        // Print the ID of the joke
        console.log("joke ID: " + id);

        // Print the date and joke
        console.log("date created: " + created_at);
        console.log("joke: " + value);
    } catch (error) {
        // Catch and handle any errors
        console.error("error fetching the data: " + error);
    }
};

fetchdata();


//   Assignment use async to 
// https://official-joke-api.appspot.com/random_joke
// Extract and print out the contents of the setup and the punchline
// https://sengi2025.pythonanywhere.com/api/getproducts
// On the above api endpoint extract the product_name, and the price and print them out