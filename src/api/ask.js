const answer = require("../core").ask;
export default async function(req, res) {
  const { asker_id, question_text, tags } = req.query;
  const result = await answer({ asker_id, question_text, tags: tags || [] });
  res.end(JSON.stringify(result, null, 2));
}
