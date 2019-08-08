const answer = require("../../../core/answer");
module.exports = async ([question_id, answer_text, author_id]) =>
  await answer({ question_id, answer_text, author_id });
