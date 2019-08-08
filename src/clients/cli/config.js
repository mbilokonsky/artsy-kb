const fs = require("fs");
const path = require("path");
const home_dir = process.env.$HOME;
const config_location = path.join(home_dir, "kb.json");
let config;

const get_config = () => config;
const save_config = new_config => {
  fs.writeFileSync(config_location, JSON.stringify(new_config, null, 2));
  config = new_config;
  return config;
};

module.exports = {
  get_config,
  save_config,
  config_location
};
