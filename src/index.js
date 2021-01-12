// const { Parser } = require('./parser.js').Parser;
import { Parser } from './parser.js';

const parser = new Parser();
console.log(parser.evaluate('2+2'));
console.log(parser.evaluate('PI/100000'));
console.log(parser.evaluate('0.26-0.15+0.08-0.18+0.08-0.12+0.54-0.54+0.04-0.01'));
console.log(parser.evaluate('1.1-0.11'));
console.log(parser.evaluate('3.3%3.2'));
