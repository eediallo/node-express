import express from "express";
import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobs.js";

const jobRouter = express.Router();

jobRouter.get("/", getAllJobs);
jobRouter.post("/", createJob);
jobRouter.patch("/:id", updateJob);
jobRouter.delete("/:id", deleteJob);

export default jobRouter;
