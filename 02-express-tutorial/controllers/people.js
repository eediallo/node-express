import { people } from "../data.js";

const getPerson = (req, res) => {
  res.status(200).json({ success: true, people: people });
};

const createPerson = (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    console.error(`Name must be provided`);
    res.status(400).json({ success: false, name: name });
  }
  res.status(201).json({ success: true, name: name });
};

const getPersonPostman = (req, res) => {
  console.log(req.body);
  const { name, id } = req.body;
  if (!name) {
    console.error(`Name must be provided`);
    res.status(400).json({ success: false, name: name });
  }

  res
    .status(201)
    .json({ success: true, data: [...people, { name: name, id: id }] });
};


const updatePerson = (req, res) => {
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
  }


  const deletePerson = (req, res) => {
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
  }

  export {getPerson, createPerson, getPersonPostman, updatePerson, deletePerson}