document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".login-button");
    
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Retrieve input values
        const username = document.querySelector("input[type='text']").value;
        const password = document.querySelector("input[type='password']").value;
        
        // Simple validation
        if (username === "" || password === "") {
            alert("Please enter both username and password.");
        } else {
            // Proceed with login logic (e.g., sending data to the server)
            alert("Login successful!");
        }
    });
});
