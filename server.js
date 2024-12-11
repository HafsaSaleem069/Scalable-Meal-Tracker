const express = require("express");
const app = express();
const cors = require('cors');

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(express.json());
app.use(cors());


const users = [];
// Register a new user
app.post("/register/users", (req, res) => {
    const { fullname, email, password, phone, address } = req.body;
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({ message: "User already exists!" });
    }

    const newUser = {
        id: users.length + 1, // Unique ID
        fullname,
        email,
        password,
        phone,
        address,
        cart: [],
        purchaseHistory: [],
        notifications: [],
        queries: []
    };

    users.push(newUser);
    res.status(201).json({ message: "User registered successfully!", user: newUser });
});

// Get all users
app.get("/register/users", (req, res) => {
    res.json(users);
});

// Delete a user
app.delete("/register/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found!" });
    }

    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully!" });
});

// -----------------------------------------CLIENT SIDE ROUTES-------------------------------------------

// Home Page Route
app.get('/home', (req, res) => {
    res.render("home", { users }); // Render home.ejs with usersdata
});
// Navbar Testing Route (if required)
app.get('/navbar', (req, res) => {
    res.render("navbar", { users }); // Render navbar.ejs directly to test usersdata
});
// Burger Page Route
app.get('/home/burger', (req, res) => {
    res.render("burger", { users }); // Render burger.ejs with usersdata
});
// pizza Page Route
app.get('/home/pizza', (req, res) => {
    res.render("pizza", { users }); // Render pizza.ejs with usersdata
});
// drinks Page Route
app.get('/home/drinks', (req, res) => {
    res.render("drinks", { users }); // Render drinks.ejs with usersdata
});
// coffee Page Route
app.get('/home/coffee', (req, res) => {
    res.render("coffee", { users }); // Render coffee.ejs with usersdata
});
// desserts Page Route
app.get('/home/desserts', (req, res) => {
    res.render("desserts", { users }); // Render desserts.ejs with usersdata
});
// cart Page Route
app.get('/home/cart', (req, res) => {
    res.render("cart", { users }); // Render cart.ejs with usersdata
});
// profile Page Route
app.get('/home/profile', (req, res) => {
    res.render("profile", { users }); // Render profile.ejs with usersdata
});

//REGISTER Page Route(yahan sare api register se related hein)
app.get('/home/register', (req, res) => {
    res.render("register", { users }); // Render register.ejs with usersdata
});



//LOGIN Page Route
app.get('/home/login', (req, res) => {
    res.render("login", { users }); // Render login.ejs with usersdata
});

// -----------------------------------------ADMIN SIDE ROUTES-------------------------------------------
// login Page Route
app.get('/admin', (req, res) => {
    res.render("adminDashboard"); // Render admin.ejs with usersdata
});
// adminUsersPage Route
app.get('/admin/users', (req, res) => {
    res.render("adminUsers"); // Render adminDashboard.ejs with usersdata
});
// adminOrders Page Route
app.get('/admin/orders', (req, res) => {
    res.render("adminOrders"); // Render adminDashboard.ejs with usersdata
});

// adminProducts Page Route
app.get('/admin/products', (req, res) => {
    res.render("adminProducts"); // Render adminDashboard.ejs with usersdata
});
// adminCategory Page Route
app.get('/admin/category', (req, res) => {
    res.render("adminCategory"); // Render adminDashboard.ejs with usersdata
});
// adminDeliveredItems Page Route
app.get('/admin/deliveries', (req, res) => {
    res.render("adminDeliveredItems"); // Render adminDashboard.ejs with usersdata
});
// adminQueries Page Route
app.get('/admin/queries', (req, res) => {
    res.render("adminQueries"); // Render adminDashboard.ejs with usersdata
});
// adminSoldItems Page Route
app.get('/admin/soldItems', (req, res) => {
    res.render("adminSoldItems"); // Render adminDashboard.ejs with usersdata
});

// Root Route
app.get('/', (req, res) => {
    res.send("Server is running"); // Default route
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

