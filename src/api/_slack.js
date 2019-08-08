module.exports = async (req, res) => {
  console.log("SLACK ENDPOINT HIT!");

  const { body } = req;
  const payload = JSON.parse(body);
  const json = JSON.stringify(payload, null, 2);
  console.log(json);

  const output = {
    response_type: "ephemeral",
    text: json
  };

  res.json(output);
};
