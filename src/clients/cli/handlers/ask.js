const ask = require("../../../core/ask");
module.exports = async ([asker_id, question_text, tags]) =>
  await ask({ asker_id, question_text, tags });
