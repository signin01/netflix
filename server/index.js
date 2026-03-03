const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors()); 
app.use(express.json());

const MOCK_USER = {
    email: "user@example.com",
    password: "password123"
};


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

   
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
        res.status(200).json({ success: true, message: "Login successful!" });
    } else {
        res.status(401).json({ success: false, message: "Invalid email or password." });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});