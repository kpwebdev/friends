const http = require("http");

const app = require("./app");
const PORT = process.env.PORT || 9000;

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Server is listening on the port no.: ${PORT}`)
);
