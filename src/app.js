const express = require("express");
const bodyParser = require("body-parser");
const friendsRouter = require("./routes/friends.route");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use("/friends", friendsRouter);
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head></head>
      <body>
        <form method="POST" action="/friends">
          <div>
            <label for="name">Name:</label>
            <input name="name" id="name" />
          </div>
          <div>
            <label for="age">Age:</label>
            <input name="age" id="age" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
    `);
});

module.exports = app;
