const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken'); //to identify the authenticated user
app.use(cors());
require("./db/conn"); // Connect to the database
const Register = require("./models/registers"); // Correct import path for the register model

const port = process.env.PORT || 3000;

// Set the path for static files
const static_path = path.join(__dirname, "../public");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(static_path));

// Set the view engine (if you are using a templating engine like EJS, Pug, etc.)
// Uncomment and set the appropriate view engine if needed
// app.set("view engine", "ejs"); // Example for EJS
// app.set("views", path.join(__dirname, "../views")); // Set views directory

// Route to render index view
app.get("/", (req, res) => {
    res.sendFile(path.join(static_path, "index.html")); // Serve the index.html file
});

// Route to render register view
app.get("/register", (req, res) => {
    res.sendFile(path.join(static_path, "registration.html")); // Serve the registration.html file
});

// Create new user in our database
app.post("/register", async (req, res) => {
    try {
        const { password, confirmPassword, username, email, phone, country, gender, age } = req.body;

        // Validate input data (ensure none of the fields are empty)
        if (!password || !confirmPassword || !username || !email || !phone || !country || !gender || !age) {
            return res.status(400).send("All fields are required.");
        }

        // Check if passwords match
        if (password === confirmPassword) {
            // Hash the password before saving it
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user instance
            const registerUser = new Register({
                Username: username,
                Email: email,
                PhoneNo: phone,
                Country: country,
                Gender: gender,
                Age: age,
                Password: hashedPassword // Store hashed password
            });

            // Save the user to the database
            await registerUser.save();

            res.status(201).send("Registration successful!");
        } else {
            // Send an error message if passwords don't match
            res.status(400).send("Passwords do not match.");
        }
    } catch (error) {
        console.error("Error during registration:", error); // Log the error for debugging

        // Capture specific error details
        if (error.name === "ValidationError") {
            res.status(400).send("Validation error: " + error.message);
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = await Register.findOne({ Username: username });
    
    console.log(user);
    
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.Password); // Use user.Password to match your schema

    if (isPasswordValid) {
        const token = jwt.sign({ username: user.Username }, 'sushil', { expiresIn: '1h' }); // Use your JWT secret here
        res.status(200).json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});