export const login = (req, res) => {
  res.send("Fake login/register/signup");
};

export const dashboard = (req, res) => {
  const secretNumber = Math.floor(Math.random() * 1000);
  res.status(200).json({
    msg: `Welcome Elhadj. Here is your secret number to access the data: ${secretNumber}`,
  });
};
