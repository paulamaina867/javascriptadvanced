// Assignment :create a register function 
// it will have username,email,password and phone
// check if the email is valid by checking the at symbol and dot
// check password if is strong and finally resgister successfully


function register(username, email, password, phone) {
  // 1. Check if email contains '@' and '.'
  if (email.includes("@") && email.includes(".")) {
    // 2. Check if password has at least 6 characters
    if (password.length >= 6) {
      // 3. If both checks pass, registration is successful
      console.log("Registration successful!");
      console.log("Username: " + username);
      console.log("Email: " + email);
      console.log("Phone: " + phone);
    } else {
      // Password is too short
      console.log("Password must be at least 6 characters long.");
    }
  } else {
    // Email is not valid
    console.log("Email is invalid. It must contain '@' and '.'");
  }
}


register("Alice", "alice@example.com", "mypw123", "1234567890");
