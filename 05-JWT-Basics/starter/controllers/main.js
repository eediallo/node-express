// check if username and password in post (login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

export const login = (req, res) => {
  const { username, password } = req.body;
  /**
   * Options to valid user
   *   1. Mongoose
   *   2. Third party
   *   3. Check in controller
   */

  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  // implement jwt token
  const id = Math.floor(Date.now() / 1000) + 60 * 60; // do this until DB is setup.
  const token = jsonwebtoken.sign(
    { username: username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.status(200).json({ token });
};

export const dashboard = (req, res) => {
    console.log(req.user)
  const secretNumber = Math.floor(Math.random() * 1000);
  res.status(200).json({
    msg: `Welcome ${req.user.username}. Here is your secret number to access the data: ${secretNumber}`,
  });
};
