import express from "express";
import { people, products } from "./data.js";

const staticDIr = new URL("./methods-public", import.meta.url).pathname;

const app = express();

// static assets
app.use(express.static(staticDIr));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, people: people });
});

app.get("/api/postman/people", (req, res) => {
  res.status(200).json({ success: true, products: products });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    console.error(`Name must be provided`);
    res.status(400).json({ success: false, name: name });
  }

  res.status(201).json({ success: true, name: name });
});

app.post("/api/postman/people", (req, res) => {
  console.log(req.body);
  const { name, id } = req.body;
  if (!name) {
    console.error(`Name must be provided`);
    res.status(400).json({ success: false, name: name });
  }

  res
    .status(201)
    .json({ success: true, data: [...people, { name: name, id: id }] });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    console.error(`Person with ${id} not found`);
    res
      .status(404)
      .json({ success: false, msg: `Person with ${id} not found` });
  }

  const updatePeopleList = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: updatePeopleList });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    console.error(`Person with ${req.params.id} not found`);
    res
      .status(404)
      .json({ success: false, msg: `Person with ${req.params.id} not found` });
  }
  const updatedPeopleList = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: updatedPeopleList });
});
app.listen(3000, () => console.log("Server is running on port 3000..."));
