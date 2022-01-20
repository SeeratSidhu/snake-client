let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = (key) => {

  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'z') {
    connection.write("Say: AAAHHH!");
  }
  if (key === 'f') {
    connection.write("Say: FUN");
  }
  if (key === 'g') {
    connection.write("Say: GO GO");
  }

  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput }