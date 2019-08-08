const gql = require("graphql-tag");
const run_query = require("../data/hasura").run_query;

const query_string = gql`
  mutation answer_question(
    $question_id: Int
    $answer_text: String
    $author_id: String
  ) {
    insert_answers(
      objects: {
        answer_text: $answer_text
        author_id: $author_id
        question_id: $question_id
      }
    ) {
      returning {
        question {
          question_text
          answers(limit: 1, order_by: { timestamp: desc }) {
            timestamp
            answer_text
          }
        }
      }
    }
  }
`;

module.exports = async ({ question_id, answer_text, author_id }) =>
  await run_query(query_string, { question_id, answer_text, author_id });
