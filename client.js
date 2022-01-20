const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: MKS");
  });

  conn.on('data', (data) => {
    console.log(data);
  })
  return conn;
};

module.exports = { connect }