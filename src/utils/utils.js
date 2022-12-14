const { Console } = require('@woowacourse/mission-utils');

const print = (message) => Console.print(message);

const input = (message, callback) => {
  Console.readLine(message, callback.bind(this));
};

const close = () => Console.close();

module.exports = { print, input, close };
