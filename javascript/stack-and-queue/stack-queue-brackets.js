'use strict';
const Stack = require('./Stack');

function validateBrackets(string) {
  let stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    let content = string[i];
    if (content === '(' || content === '[' || content === '{') {
      stack.push(content);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    let balance;
    switch (content) {
    case ')':
      balance = stack.pop();
      if (balance !== '(') return false;
      break;
    case ']':
      balance = stack.pop();
      if (balance !== '[')return false;
      break;
    case '}':
      balance = stack.pop();
      if (balance !== '{')return false;
      break;
    }
  }
  return stack.length === 0;
}
module.exports = { validateBrackets: validateBrackets };
