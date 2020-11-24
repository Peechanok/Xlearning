// const express = require('express');
// const app = express();
// const port = 3001;
// const unirest = require("unirest");

// app.get('/', (req, res) => {
// res.send("wellcome")
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = 3001;
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sys'
});
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM new_table', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      console.log("checkdata",results)
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
