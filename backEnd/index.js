const server = require("./src/app.js");
const { conn } = require("./src/database/db.js");
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  conn.sync({ force: false });
  console.log(`listening at ${PORT}`);
});
