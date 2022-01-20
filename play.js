const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Conecting...");
const conn = connect();
setupInput(conn);