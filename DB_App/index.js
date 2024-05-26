// Code based on lecture notes
// Express is imported as the app
const express = require('express');
const app = express();
// parse through the URLs
const bodyParser = require("body-parser");
// allows nested objects to be parsed
app.use(bodyParser.urlencoded({extended:true}));


// Set new engine
app.set("view engine", "ejs");


//import authentication module
const auth = require('./auth.js');


//let to set a variable in js set to false so no changes can be made
let loggedIn = false
// auth is calling the node for authentification and the credentials are set to user and pass
auth.createUser("user", "pass");
console.log(auth.auththenticateUser("user", "pass"));

//Connect to database:
const mysql = require('mysql');
//Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'g00232918'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    // console will return the messages based on the details entered
    console.error('Error connecting to database: ', err);
  } else {
    console.log('Connected to database!');
  }
});


// Server static files from the public directory
app.use(express.static("home"));
app.use(express.static("ImagesCar"));


// Random value example - https://linuxhint.com/getting-random-value-from-javascript-array/



// Get requests to define a route to the chosen templates which can then be used in any view
// Render is to view and send the template
app.get("/StorePicks", function (req, res){
  res.render("StorePicks")
});

app.get("/store", function (req, res){
  res.render("store")
});

app.get("/failed", function (req, res){
  res.render("failed")
});

app.get("/purchased", function (req, res){
  // checks if the customer is logged in
  if (loggedIn)
  // if they are they will be allow into the purchased view
  {res.render("purchased")}
  // if they are not correct they will be redirected to the failed page and asked to retry their login if they wish
  else {res.redirect("/home")}
});



//route to get login
app.post("/login", function(req,res) {
  // Retireves the username and login from login
  const username = req.body.username;
  const password = req.body.password;
  // authenticate the user based on the credentials
  const authenticated = auth.auththenticateUser(username, password);
  console.log(authenticated);


  //Test for successful authenication
  if(authenticated)

  {
    // if the authentication was successful, the user is directed to the homepage
    loggedIn = true
    console.log("Authentication was successful!")
    res.redirect("/home");
    
  }else{
    // if the authenticate was unsucessful the user is sent to the failed page where they have to try to login again
    console.log("Authenticiation was not successful!")
  res.render("failed.ejs")
  }
});

// get requests for the homepage and failed pages based on the loggedIn variable
app.get("/home", (req, res) => {
  
    if (loggedIn) {
      res.render('home.ejs');
    } else {
      console.log("Not Authenticated")
      res.render("failed.ejs")
    }
});


app.get("/shop", function(req, res){
  // Get the ID from the parameters set
  const ID = req.query.rec;
    // row is an array, fields is names and datatypes
    // Execute the db query to get product description
    connection.query("SELECT * FROM prod_data WHERE ID = ?", [ID], function(err, rows, fields)
    {
      // Handle error when retrieving product  
      if(err)
        {
            console.error("Error retreiving data from database", err);
            res.status(500).send("Error retrieving data from database");
        }
        // if there is no product
        else if(rows.length === 0)
        {
            // console returns the ID not found
            console.error("No rows found for ID $[ID]");
            res.status(404).send("No product found for ID $[ID]");
        }
        else
        {
            // when the data is retrieved you get the details listed Album Name etc.
            console.log("Data retrieved from the Database!");
            console.log(rows[0].Album_Name);
            console.log(rows[0].Artist);
            console.log(rows[0].Image);
            console.log(rows[0].Price);
            // variables set for the results
            const AlbName = rows[0].Album_Name;
            const Band = rows[0].Artist;
            const image = rows[0].Image;
            const price = rows[0].Price;
            // the shop view is render with the details retrieved
            res.render("shop.ejs",{myMessage: AlbName, model:Band, myImages: image, myPrice: price});
        }
    })
});

// get the ID based on the request body
app.post("/shop", function(req, res){
  const ID = req.body.rec2;
    // row is an array, fields is names and datatypes
    connection.query("SELECT * FROM prod_data WHERE ID = ?", [ID], function(err, rows, fields)
    {
        if(err)
        {
            // console will show error and status
            console.error("Error retreiving data from database", err);
            res.status(500).send("Error retrieving data from database");
        }
        else if(rows.length === 0)
        {
            // if no rows found the error will be present in the console
            console.error("No rows found for ID $[ID]");
            res.status(404).send("No product found for ID $[ID]");
        }
        else
        {
            // the data will be pulled for each row if true
            console.log("Data retrieved from the Database!");
            console.log(rows[0].Album_Name);
            console.log(rows[0].Artist);
            console.log(rows[0].Price);
            console.log(rows[0].Image);
            const AlbName = rows[0].Album_Name;
            const Band = rows[0].Artist;
            res.render("shop.ejs",{myMessage: AlbName, model:Band});
        }
    })
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000')
});