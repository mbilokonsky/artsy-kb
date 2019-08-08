const gql = require("graphql-tag");
const run_query = require("../data/hasura").run_query;

const query_string = gql`
  mutation ask_question(
    $asker_id: String
    $question_text: String
    $tags: jsonb
  ) {
    insert_questions(
      objects: {
        asker_id: $asker_id
        question_text: $question_text
        tags: $tags
      }
    ) {
      returning {
        id
        question_text
        tags
      }
    }
  }
`;

module.exports = async variables => await run_query(query_string, variables);
