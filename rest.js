const Joi = require("joi");
const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send("The course was not found");
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.idate(req.body, schema);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);

    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.put("api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send("The course was not found");
  //lookup course
  //return 404 if dne
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.idate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);

    return;
  }

  course.name = req.body.name;

  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send("The course was not found");

  const index = courses.indexOf(course);

  courses.splice(index, 1);

  res.send(course);
});

// app.get("/tshirt", (req, res) => {
//   res.status(200).send({
//     tshirt: "big",
//     size: "green",
//   });
// });

// app.post("/tshirt/:id", (req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;

//   if (!logo) {
//     res.status(400).send("NEED A LOGO");
//   }
//   res.send({
//     tshirt: `it has this ${logo}`,
//   });
// });
