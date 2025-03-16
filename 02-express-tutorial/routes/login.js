import express from "express";

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(404).send("user not found");
  }
  res.status(200).send(`Welcome ${name}`);
});

export { loginRouter };
