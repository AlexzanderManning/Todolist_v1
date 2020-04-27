const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

//Use body parser to get data from html.
app.use(bodyParser.urlencoded({ extended: true }));

//setting view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();
  let options = { weekday: "long", month: "long", day: "numeric" };
  let day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newListItems: items });
});

//User making a post request to send us an item for the array.
app.post("/", (req, res) => {
  let item = req.body.newItem;

  //Pushing the item we got from the webpage to our items array.
  items.push(item);

  //redirect to homeroute after pushing item to items array.
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
