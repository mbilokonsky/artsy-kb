const answer = require("../core").answer;
export default async function(req, res) {
  const { question_id, answer_text, author_id } = req.query;
  const result = await answer(question_id, answer_text, author_id);
  res.end(JSON.stringify(result, null, 2));
}
