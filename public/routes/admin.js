// Fetch and display users
async function fetchUsers() {
    try {
        const response = await fetch("http://localhost:3000/api/users");
        const users = await response.json();

        const tableBody = document.getElementById("userTableBody");
        tableBody.innerHTML = ""; // Clear existing rows

        users.forEach((user, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.fullname}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.address}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Delete a user
async function deleteUser(userId) {
    try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("User deleted successfully!");
            fetchUsers(); // Refresh the table
        } else {
            alert("Failed to delete user.");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

// Initialize user table on page load
document.addEventListener("DOMContentLoaded", fetchUsers);

// 1. Orders
// Methods:
// viewOrders(status) (to filter recent, pending, or delivered orders)
// updateOrderStatus(orderID, newStatus)
// notifyCustomer(orderID, notificationMessage) (e.g., "Ready your payment")
// Total: 3 methods

// 2. Products
// Methods:
// viewProducts(filters) (e.g., filter by category, stock status, etc.)
// editProductStatus(productID, newStatus)
// deleteProduct(productID)
// Total: 3 methods

// 3. Categories
// Methods:
// viewCategories()
// Total: 1 method

// 4. Customer List
// Methods:
// viewCustomerList()
// deleteCustomer(customerID)
// Total: 2 methods

// 5. Queries
// Methods:
// viewQueries()
// respondToQuery(queryID, responseText)
// Total: 2 methods

// 6. Sales Report
// Methods:
// viewSalesReport(dateRange) (to fetch sales data for a day or month)
// Total: 1 method