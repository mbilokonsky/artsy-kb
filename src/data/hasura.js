const { query } = require("graphqurl");
const { HGE_ENDPOINT, ADMIN_SECRET } = require("../../config");


module.exports = {
  query: async (gql_query, args=null) => {
    try {
      const result = await query({
        query: gql_query,
        endpoint: HGE_ENDPOINT,
        headers: {
          "x-hasura-admin-secret": ADMIN_SECRET
        },
        variables: args || null
      });

      return result.data
    } catch(e) {
      return { error: e }
    }
  }
}