import express from "express";
import {
  getPerson,
  createPerson,
  getPersonPostman,
  updatePerson,
  deletePerson,
} from "../controllers/people.js";

const PeopleRouter = express.Router();

PeopleRouter.get("/", getPerson);

PeopleRouter.post("/", createPerson);

PeopleRouter.post("/postman", getPersonPostman);

PeopleRouter.put("/:id", updatePerson);

PeopleRouter.delete("/:id", deletePerson);

export { PeopleRouter };
