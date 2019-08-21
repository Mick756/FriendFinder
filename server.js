let express = require("express");
let path = require("path");

let app = express();
let PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app", "public", "survey.html"));
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "app", "public", "home.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});