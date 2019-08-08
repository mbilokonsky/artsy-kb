module.exports = async (req, res) => {
  const { body } = req;
  const json = JSON.stringify(body, null, 2);
  console.dir(req);
  console.log("req keys:", Object.keys(req).join(", "));

  const output = {
    response_type: "ephemeral",
    text: json
  };

  res.json(output);
};
