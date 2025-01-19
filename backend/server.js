import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("Server is ready !");
})

// app.listen(5000, ()=> {
//     console.log("Server started at http://localhost:5000 avinash");
// });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT} Avinash`));

// LQzRgn2KHr81Q8RN