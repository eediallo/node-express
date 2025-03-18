export const notFound = (req, res) =>
  res.status(404).send("<h1>Router does not exist</h1>");
