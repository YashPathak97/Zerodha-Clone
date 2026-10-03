require('dotenv').config();   // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UsersModel } = require("./model/UsersModel");
const { auth } = require("./middlewares/auth");

// cookie settings used by signup and login
const cookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    secure: false,                      // set true when you deploy on https
    maxAge: 24 * 60 * 60 * 1000,        // 1 day
};

function makeToken(user) {
    return jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
}



const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


const app = express();

// app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }));


// app.get('/addHoldings', async(req, res) => {  // This route is used to add sample holdings data to the database. It creates an array of holdings objects and saves each one to the database using the HoldingsModel.
//     let tempHoldings =  [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
//   ];

//   tempHoldings.forEach(async (item) => {
//     let newHolding = new HoldingsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//     });
//     await newHolding.save();
//   });

//   res.send("Holdings added successfully");
// })

// app.get("/addPositions", async(req,res) =>{  // This route is used to add sample positions data to the database. It creates an array of positions objects and saves each one to the database using the PositionsModel.
//         let tempPostions= [
//     {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//     },
//     {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//     },
//     ];

//     tempPostions.forEach(async (item) => {
//         let newPositions = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         await newPositions.save();
//     });
//     res.send("Positions added successfully");
// });


app.get('/allHoldings', async (req, res) => {  // This route is used to retrieve all holdings data from the database. It uses the HoldingsModel to find all documents in the holdings collection and sends the result as a JSON response.
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get('/allPositions', async (req, res) => {  // This route is used to retrieve all positions data from the database. It uses the PositionsModel to find all documents in the positions collection and sends the result as a JSON response.
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder",auth, async (req, res) => { 
    let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
            userId: req.user.userId,

    });
    await newOrder.save();
    res.send("Order created successfully");
})

app.get("/allOrders", auth, async (req, res) => {
    res.json(await OrdersModel.find({ userId: req.user.userId })); // only my orders
});

// This route is used to create a new order. It receives the order data in the request body, creates a new instance of the HoldingsModel with the received data, saves it to the database, and sends a success message as a response.



//signup route to create a new user account. It checks if the email and password are provided and meet the required criteria, then hashes the password and saves the new user to the database. If the user already exists, it returns a conflict error.
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password || password.length < 6) {
            return res.status(400).json({ message: "Username, email and a password of 6+ characters required" });
        }
        const exists = await UsersModel.findOne({ $or: [{ email }, { username }] });
        if (exists) return res.status(409).json({ message: "User already exists" });

        const hashed = await bcrypt.hash(password, 10);
        const user = await new UsersModel({ username, email, password: hashed }).save();

        res.cookie("token", makeToken(user), cookieOptions);
        res.status(201).json({ message: "Signup successful", user: { username: user.username, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});



//Login route to authenticate users and provide a JWT token for authorized access to protected routes. It checks the provided email and password against the database, and if valid, generates a token with user ID and role, which expires in 1 day.
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UsersModel.findOne({ email });
        const ok = user && (await bcrypt.compare(password, user.password));
        if (!ok) return res.status(401).json({ message: "Invalid email or password" });

        res.cookie("token", makeToken(user), cookieOptions);
        res.json({ message: "Login successful", user: { username: user.username, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});



app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
});

app.get("/me", auth, async (req, res) => {
    const user = await UsersModel.findById(req.user.userId).select("username email role");
    if (!user) return res.status(401).json({ message: "User not found" });
    res.json({ user });
});




app.listen(PORT, () => {
    console.log(`App started`);
    mongoose.connect(url);
    console.log("MongoDB connected");
});