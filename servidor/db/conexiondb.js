var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user:process.env.MYSQL_USER,
  password:process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DATABASE
});

function query(statement) {
  return new Promise(function(resolve, reject) {
    connection.query(statement, function(error, results, fields) {
      if (error) {
        reject(error)
        return
      }
      resolve(results)
    })
  })
}

module.exports = {
  connection,
  query
}
