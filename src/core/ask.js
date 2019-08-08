const gql = require("graphql-tag");
const run_query = require("../data/hasura").run_query;

const query_string = gql`
  query {
    questions {
      question_text
    }
  }
`;

module.exports = async ({ question_id, answer_text, author_id }) =>
  await run_query(query_string, { question_id, answer_text, author_id });
