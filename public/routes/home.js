const users = []; // Stores user objects
document.getElementById("RegisterButton").addEventListener("click", (event) => {
    console.log("Register button clicked");
    register(event);
});

async function register(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    try {
        const response = await fetch('http://localhost:3000/home/register/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullname, email, password, phone, address })
        });

        if (response.ok) {
            alert("User registered successfully!");
            // Clear fields only after successful registration
            document.getElementById("fullname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("address").value = "";
        } else {
            const errorMessage = await response.json();
            alert(`Registration failed: ${errorMessage.message}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while registering. Please try again.");
    }
}

//login


// 2. Cart

// addItemToCart(itemID, quantity)
// removeItemFromCart(itemID)
// incrementItemQuantity(itemID)
// decrementItemQuantity(itemID)
// viewCart() (to show all items, prices, and total price)
// placeOrder(cartItems) (to complete the purchase and move data to purchase history)
// clearCart() (to clear the cart after placing the order)


// 3. Notifications

// getNotifications(customerID) (to fetch notifications for the customer)
// sendResponseNotification(customerID, queryID) (for query responses)


// 4. Contact

// sendQuery(customerID, queryText)

// 5. Profile

// viewProfile(customerID)
// editProfile(customerID, updatedDetails)
// viewPurchaseHistory(customerID)

// 6. Logout

// logoutCustomer(customerID)