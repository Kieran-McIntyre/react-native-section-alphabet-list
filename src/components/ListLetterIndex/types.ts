import { ISectionData } from "../AlphabetList/types"

export interface ListLetterIndexProps {
    onPressLetter: (sectionIndex: number) => void;
    sectionData: ISectionData[];
    indexLetterColor?: string;
}
