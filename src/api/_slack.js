module.exports = async (req, res) => {
  console.log("SLACK ENDPOINT HIT!");

  const { body } = req.body;

  console.log(body);

  const output = {
    response_type: "ephemeral",
    text: "KB server sees you!"
  };

  res.json(output);
};
