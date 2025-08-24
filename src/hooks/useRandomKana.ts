const alphabets = ['hiragana', 'katakana'] as const;
export type Alphabet = typeof alphabets[number];

const romajis = [ 'a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'n', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wi', 'we', 'wo' ] as const;
export type Romaji = typeof romajis[number];

type RomajiToKanaDictionnary = {
  [R in Romaji]: {
    [A in Alphabet]: string;
  };
};
const romajiToKana: RomajiToKanaDictionnary = {
  a: { hiragana: 'あ', katakana: 'ア' },
  i: { hiragana: 'い', katakana: 'イ' },
  u: { hiragana: 'う', katakana: 'ウ' },
  e: { hiragana: 'え', katakana: 'エ' },
  o: { hiragana: 'お', katakana: 'オ' },
  ka: { hiragana: 'か', katakana: 'カ' },
  ki: { hiragana: 'き', katakana: 'キ' },
  ku: { hiragana: 'く', katakana: 'ク' },
  ke: { hiragana: 'け', katakana: 'ケ' },
  ko: { hiragana: 'こ', katakana: 'コ' },
  sa: { hiragana: 'さ', katakana: 'サ' },
  shi: { hiragana: 'し', katakana: 'シ' },
  su: { hiragana: 'す', katakana: 'ス' },
  se: { hiragana: 'せ', katakana: 'セ' },
  so: { hiragana: 'そ', katakana: 'ソ' },
  ta: { hiragana: 'た', katakana: 'タ' },
  chi: { hiragana: 'ち', katakana: 'チ' },
  tsu: { hiragana: 'つ', katakana: 'ツ' },
  te: { hiragana: 'て', katakana: 'テ' },
  to: { hiragana: 'と', katakana: 'ト' },
  na: { hiragana: 'な', katakana: 'ナ' },
  ni: { hiragana: 'に', katakana: 'ニ' },
  nu: { hiragana: 'ぬ', katakana: 'ヌ' },
  ne: { hiragana: 'ね', katakana: 'ネ' },
  no: { hiragana: 'の', katakana: 'ノ' },
  n: { hiragana: 'ん', katakana: 'ン' },
  ha: { hiragana: 'は', katakana: 'ハ' },
  hi: { hiragana: 'ひ', katakana: 'ヒ' },
  fu: { hiragana: 'ふ', katakana: 'フ' },
  he: { hiragana: 'へ', katakana: 'ヘ' },
  ho: { hiragana: 'ほ', katakana: 'ホ' },
  ma: { hiragana: 'ま', katakana: 'マ' },
  mi: { hiragana: 'み', katakana: 'ミ' },
  mu: { hiragana: 'む', katakana: 'ム' },
  me: { hiragana: 'め', katakana: 'メ' },
  mo: { hiragana: 'も', katakana: 'モ' },
  ya: { hiragana: 'や', katakana: 'ヤ' },
  yu: { hiragana: 'ゆ', katakana: 'ユ' },
  yo: { hiragana: 'よ', katakana: 'ヨ' },
  ra: { hiragana: 'ら', katakana: 'ラ' },
  ri: { hiragana: 'り', katakana: 'リ' },
  ru: { hiragana: 'る', katakana: 'ル' },
  re: { hiragana: 'れ', katakana: 'レ' },
  ro: { hiragana: 'ろ', katakana: 'ロ' },
  wa: { hiragana: 'わ', katakana: 'ワ' },
  wi: { hiragana: 'ゐ', katakana: 'ヰ' },
  we: { hiragana: 'ゑ', katakana: 'ヱ' },
  wo: { hiragana: 'を', katakana: 'ヲ' },
} as const;

export type KanaSelection = {
  romaji: Romaji,
  alphabet: Alphabet,
};

export function useRandomKana() {
	return {
		romajiToKana,
    getRandomKana: () => {
      return {
        romaji: romajis[Math.floor(Math.random()*romajis.length)],
        alphabet: alphabets[Math.floor(Math.random()*alphabets.length)]
      } as KanaSelection;
    }
	};
};