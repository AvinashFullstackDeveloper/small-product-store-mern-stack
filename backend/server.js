import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req,res) => {
    res.send("Server is ready !");
})

console.log(process.env.MONGO_URI)

// app.listen(5000, ()=> {
//     console.log("Server started at http://localhost:5000 avinash");
// });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT} Avinash`));
