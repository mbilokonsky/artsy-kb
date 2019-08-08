const gql = require("graphql-tag");
const run_query = require("../data/hasura").run_query;

const by_email = gql`
  query get_user_by_email($email: String) {
    users(where: { email: { _eq: $email } }) {
      email
      slack_id
    }
  }
`;

const by_slack_id = gql`
  query get_user_by_slack_id($slack_id: String) {
    users(where: { slack_id: { _eq: $slack_id } }) {
      email
      slack_id
    }
  }
`;

module.exports = {
  by_email: async email => await run_query(by_email, { email }),
  by_slack_id: async slack_id => await run_query(by_slack_id, { slack_id })
};

module.exports = async email => {};
