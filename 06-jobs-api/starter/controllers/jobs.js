const getAllJobs = async (req, res) => {
  res.send("get all jobs route");
};

const createJob = async (req, res) => {
  res.send("create job route");
};
const updateJob = async (req, res) => {
  res.send("update a job route");
};
const deleteJob = async (req, res) => {
  res.send("delete job route");
};

export { getAllJobs, createJob, updateJob, deleteJob };
