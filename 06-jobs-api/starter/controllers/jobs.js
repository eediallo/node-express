import { Job } from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/unauthenticated.js"
import { BadRequestError } from "../errors/bad-request.js";

const getAllJobs = async (req, res) => {
  res.send("get all jobs route");
};

const createJob =  async (req, res) => {
  req.body.createdBy = req.user.userId // do this to identifier to user who created the job
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  res.send("update a job route");
};
const deleteJob = async (req, res) => {
  res.send("delete job route");
};

export { getAllJobs, createJob, updateJob, deleteJob };
