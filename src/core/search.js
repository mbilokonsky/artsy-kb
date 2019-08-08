const gql = require("graphql-tag");
import { run_query } from "../data/hasura";

const query_string = gql`
  query questions_by_tag($tag: String) {
    _tags(where: { tag: { _eq: $tag } }) {
      usages {
        question {
          question_text
          asker {
            email
            name
          }
          tags {
            tag {
              tag
            }
          }
          repos {
            repo {
              name
              url
            }
          }
          links {
            link {
              label
              url
            }
          }
        }
      }
    }
  }
`;

module.exports = async tag => await run_query(query_string, { tag });
