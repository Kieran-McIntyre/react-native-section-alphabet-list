import IData from "../interfaces/IData";
import IPreSectionData from "../interfaces/IPreSectionData";
import validLetters from "./validLetters";

interface IAlphabetSet {
  [key: string]: IData[];
}

interface IEntry {
  title: string;
  data: IData[];
}

const getSectionData = (data: IData[]) => {
  const alphabetEntrySet: [string, IData[]][] = getAlphabetEntrySet(data);

  return alphabetEntrySet
    .map(formatEntry)
    .sort(sortSectionsAlphabetically)
    .map((section: IPreSectionData, index: number) => ({ ...section, index }));
};

const getAlphabetEntrySet = (data: IData[]) => {
  const alphabetSet: IAlphabetSet = {};

  data.forEach((item) => {
    const letter = getItemFirstLetter(item.name);

    if (!letter) {
      return;
    }

    if (!alphabetSet[letter]) {
      alphabetSet[letter] = [];
    }

    alphabetSet[letter].push(item);
  });

  return Object.entries(alphabetSet);
};

const getItemFirstLetter = (string: string) => {
  const firstChar: string = string.substring(0, 1);
  const isValidLetter: boolean = validLetters[firstChar.toLowerCase()];

  if (isValidLetter) {
    return firstChar.toUpperCase();
  }

  return "#";
};

const formatEntry = (entry: [string, any[]]) => {
  const [title, unsortedData] = entry;

  const data = unsortedData.sort((a, b) =>
    alphabeticComparison(a.name, b.name)
  );

  return { title, data } as IEntry;
};

const sortSectionsAlphabetically = (a: IEntry, b: IEntry) => {
  const { title: charA } = a;
  const { title: charB } = b;

  const isBHash = charA !== "#" && charB === "#";
  if (isBHash) {
    return -1;
  }

  const isAHash = charA === "#" && charB !== "#";
  if (isAHash) {
    return 1;
  }

  return alphabeticComparison(charA, charB);
};

const alphabeticComparison = (a: string, b: string) => {
  const aCap = a.toUpperCase();
  const bCap = b.toUpperCase();

  if (aCap < bCap) {
    return -1;
  }

  if (aCap > bCap) {
    return 1;
  }

  return 0;
};

export default getSectionData;
