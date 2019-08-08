module.exports = async (req, res) => {
  console.log("SLACK ENDPOINT HIT!");

  const { body } = req;
  const json = JSON.stringify(body, null, 2);
  console.log(json);

  const output = {
    response_type: "ephemeral",
    text: json
  };

  res.json(output);
};
