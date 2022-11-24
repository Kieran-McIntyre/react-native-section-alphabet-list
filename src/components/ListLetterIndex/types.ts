import { AlphabetListProps, ISectionData } from "../AlphabetList/types"

export interface ListLetterIndexProps<Type> {
    onPressLetter: (sectionIndex: number) => void;
    sectionData: ISectionData<Type>[];
    indexContainerStyle?: AlphabetListProps<Type>["indexContainerStyle"],
    indexLetterStyle?: AlphabetListProps<Type>["indexLetterStyle"],
    indexLetterContainerStyle?: AlphabetListProps<Type>["indexLetterContainerStyle"],
    renderCustomIndexLetter?: AlphabetListProps<Type>["renderCustomIndexLetter"],
    letterListContainerStyle?: AlphabetListProps<Type>["letterListContainerStyle"]
}
