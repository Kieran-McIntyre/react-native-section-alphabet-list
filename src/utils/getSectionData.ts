import { ISectionData, IData } from "../components/AlphabetList/types";

interface IAlphabetSet {
  [key: string]: IData[];
}

interface IEntry {
  title: string;
  data: IData[];
}

interface ILetterMap {
  [key: string]: number
}

export const getSectionData = (data: IData[], charIndex: string[]) => {
  const validLettersMap = getValidLettersMap(charIndex)
  const alphabetEntrySet: [string, IData[]][] = getAlphabetEntrySet(data, validLettersMap);

  return alphabetEntrySet
    .map(formatEntry)
    .sort((a, b) => sortSectionsByCharIndex(a, b, validLettersMap))
    .map((section: ISectionData, index: number) => ({ ...section, index }));
};

const getValidLettersMap = (letterMap: string[]) => {
  const map: ILetterMap = {}

  letterMap.forEach((letter, i) => {
    map[letter.toLowerCase()] = i + 1
  })

  return map
}

const getAlphabetEntrySet = (data: IData[], validLettersMap: ILetterMap) => {
  const alphabetSet: IAlphabetSet = {}

  data.forEach((item) => {
    const letter = getItemFirstLetter(item.value, validLettersMap)
    if (!letter) return

    if (!alphabetSet[letter]) {
      alphabetSet[letter] = []
    }

    alphabetSet[letter].push(item)
  });

  return Object.entries(alphabetSet)
};

const getItemFirstLetter = (value: string, validLettersMap: ILetterMap) => {
  const firstChar = value.substring(0, 1)
  const isValidLetter = validLettersMap[firstChar.toLowerCase()]

  if (isValidLetter) {
    return firstChar.toUpperCase()
  }

  return "#"
};

const formatEntry = (entry: [string, any[]]) => {
  const [title, unsortedData] = entry;
  const data = unsortedData.sort((a, b) => alphabeticComparison(a.value, b.value));

  return { title, data } as IEntry;
};

const isLetterHash = (charOne: string, charTwo: string) => charOne !== "#" && charTwo === "#";

const sortSectionsByCharIndex = (a: IEntry, b: IEntry, validLettersMap: ILetterMap) => {
  const charA = a.title.toLowerCase()
  const charB = b.title.toLowerCase()

  const isBHash = isLetterHash(charA, charB)
  if (isBHash) return -1;

  const isAHash = isLetterHash(charB, charA)
  if (isAHash) return 1;

  const charAPosition = validLettersMap[charA]
  const charBPosition = validLettersMap[charB]
  return charAPosition - charBPosition
};

const alphabeticComparison = (a: string, b: string) => {
  const aCap = a.toUpperCase()
  const bCap = b.toUpperCase()

  if (aCap < bCap) return -1

  if (aCap > bCap) return 1

  return 0
};
