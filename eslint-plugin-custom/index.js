const consoleRule =  require('./rules/no-console-log');

const plugin = {
    rules: { "no-console-log" : consoleRule }
};

module.exports = plugin;
