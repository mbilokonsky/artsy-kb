const ora = require("ora");
const minimist = require("minimist");
const handlers = require("./handlers");
const formatters = require("./formatters");

const notfound = cmd => () => `No handler exists for ${cmd}`;
const tojson = result => JSON.stringify(result, null, 2);

const get_handler = cmd => handlers[cmd] || notfound(cmd);
const get_formatter = cmd => formatters[cmd] || tojson;

module.exports = async () => {
  const args = minimist(process.argv.slice(2));

  const spinner = ora().start();

  let cmd = args._[0] || "help";
  const handler = get_handler(cmd);
  const formatter = get_formatter(cmd);

  const parameters = args._.slice(1);
  const results = await handler(parameters);
  const output = formatter(results);

  spinner.stop();
  console.log(output);
};
