const search = require("../core").search;
export default async function(req, res) {
  const { tags } = req.query;
  const result = await search(tags);
  res.end(JSON.stringify(result, null, 2));
}
