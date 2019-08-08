const gql = require("graphql-tag");
const run_query = require("../data/hasura").run_query;

const query_string = gql`
  query search_by_tag($tags: jsonb) {
    questions(where: { tags: { _contains: $tags } }) {
      id
      question_text
      tags
      asker {
        email
      }
      answers {
        id
        author {
          email
        }
        answer_text
      }
    }
  }
`;

module.exports = async tags => await run_query(query_string, { tags });
