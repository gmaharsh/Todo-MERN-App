var express  =  require('express');
var app =  express();
var cors =  require('cors');
var mongoose = require('mongoose');

require('dotenv').config();

app.use(cors());
app.use(express.json());

//Mongoose Connection
const uri = "mongodb+srv://gmaharsh:admin123@cluster0-g6hm1.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//Users Route
var usersRouter = require('./routes/user');
app.use('/users', usersRouter);

app.listen(2701, function(req, res){
    console.log("Server Started")
})