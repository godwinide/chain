const express = require("express");
const dotenv = require("dotenv");
const expressLayout = require("express-ejs-layouts");

dotenv.config();
const app = express();


app.use(express.static('./public'));
app.set("view engine", "ejs");
app.use(expressLayout);

app.use("/stake", (req,res) => {
    return res.render("stake");
})

app.use("/", (req,res) => {
    return res.render("index");
});



const PORT = process.env.PORT || 5659;

app.listen(PORT, ()=> console.log(`server started on PORT ${PORT}`));

