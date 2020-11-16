const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");

const app = Express();
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get("/personnel", (req, res) => {
  const data = [
    {
      name: "Jean Luc",
      email: "jeanluc.picard@enterprise.com",
      phone: "555-111-1",
    },
    { name: "Worlf", email: "worlf.picard@enterprise.com", phone: "555-222-2" },
    {
      name: "Deanna",
      email: "deanna.picard@enterprise.com",
      phone: "555-333-3",
    },
    { name: "Data", email: "mr.picard@enterprise.com", phone: "555-444-4" },
  ];
  res.json({
    items: data,
  });
});

app.post("/personnel", (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Сервер слушает по адресу 'http://localhost:${port}.'`);
});
