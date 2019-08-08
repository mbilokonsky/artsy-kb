const search = require("../../../core/search");
module.exports = async tags => {
  console.log("Now searching for tags:", tags);
  const output = await search(tags);
  return output;
};
