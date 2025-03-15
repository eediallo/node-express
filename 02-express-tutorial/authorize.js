export const authorize = (req, res, next) => {
  const { user } = req.query;
    if (user === 'Elhadj') {
    req.user = { name: "Elhadj", id: 12 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
