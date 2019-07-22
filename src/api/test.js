const hasura = require("../data/hasura")

const query = `{
  entries(where: {tags: {tag_id: {_eq: "test"}}}) {
    question
    answer
  }
}`


module.exports = async (req, res) => {
  const result = await hasura.query(query)
  console.dir(result)
  const { question, answer } = result.entries[0]
  res.end(`<html><head></head><body><h1>${question}</h1><p>${answer}</p></body></html>`)
}