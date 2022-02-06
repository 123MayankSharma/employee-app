const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./Employee");

app.use(bodyParser.json());

const port = 8000;
const Employee = mongoose.model("employee");
const mongoUrl =
  "insert-mongo-db-credentials";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});

mongoose.connection.on("error", (err) => {
  throw err;
});

app.get("/", (req, res) => {
  Employee.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/sendData", (req, res) => {
  /* console.log(req.body); */
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    photo: req.body.photo,
    salary: req.body.salary,
    position: req.body.position,
  });
  employee
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/delete", (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      console.log("Deleted!");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/update", (req, res) => {
  Employee.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
    position: req.body.position,
    photo: req.body.photo,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
