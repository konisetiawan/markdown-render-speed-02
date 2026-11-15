import { Lexer, Parser, getDefaults } from './vendor/marked/marked.esm.js';

const options = getDefaults();
const plainTextPattern = /[\\<\[!`*_~@&]/;

class FastLexer extends Lexer {
  inlineTokens(src, tokens = []) {
    if (!plainTextPattern.test(src)
      && !src.includes('www.')
      && !src.includes('://')
      && !src.includes('  \n')) {
      tokens.push({
        type: 'text',
        raw: src,
        text: src,
        escaped: this.state.inRawBlock
      });
      return tokens;
    }
    return super.inlineTokens(src, tokens);
  }
}

const lexer = new FastLexer(options);
const parser = new Parser(options);

export function parse(markdown) {
  lexer.tokens = [];
  lexer.tokens.links = Object.create(null);
  lexer.state = {
    inLink: false,
    inRawBlock: false,
    linkEmitted: false,
    linkParenPossible: true,
    top: true
  };
  lexer.inlineQueue = [];
  return parser.parse(lexer.lex(markdown));
}
