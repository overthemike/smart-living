const mysql = require('mysql')
const config = require('config')

const conn = getConn()

function getConn() {
  return mysql.createConnection({
    host: config.get('db.host'),
    user: config.get('db.user'),
    password: config.get('db.password'),
    database: config.get('db.database')
  })
}

conn.on('error', function(err) {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    conn = getConn()
  }
})

module.exports = conn
