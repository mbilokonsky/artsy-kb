import { search } from "../core";
export default async function(req, res) {
  const { tag } = req.query;
  const result = await search(tag);
  res.end(JSON.stringify(result, null, 2));
}
