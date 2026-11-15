import { Lexer, Parser, getDefaults } from './vendor/marked/marked.esm.js';

const INLINE_TEXT_FAST_PATH = /[\\<\[!`*_~@&]/;
const options = getDefaults();
const lexer = new class extends Lexer {
  inlineTokens(src, tokens = []) {
    if (!INLINE_TEXT_FAST_PATH.test(src) &&
        !src.includes('www.') &&
        !src.includes('://') &&
        !src.includes('  \n')) {
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
}(options);
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
