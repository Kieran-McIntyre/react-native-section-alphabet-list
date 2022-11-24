import { SectionListData, SectionListProps, TextStyle, ViewStyle } from "react-native";

export interface IData<Type> {
  value: Type;
  key: string;
}

export interface ISectionData<Type> {
  title: string;
  data: IData<Type>[];
  index?: number;
}
export interface IIndexLetterProps<Type> {
  item: ISectionData<Type>,
  index: number,
  onPress: () => void;
}

export interface AlphabetListProps<Type> extends Partial<SectionListProps<IData<Type>>> {
  data: IData<Type>[];
  index?: string[],
  style?: ViewStyle;
  indexLetterStyle?: TextStyle,
  indexLetterContainerStyle?: ViewStyle,
  indexContainerStyle?: ViewStyle,
  letterListContainerStyle?: ViewStyle,
  renderCustomItem?: (item: IData<Type>) => JSX.Element;
  renderCustomSectionHeader?: (section: SectionListData<IData<Type>>) => JSX.Element;
  renderCustomListHeader?: () => JSX.Element;
  renderCustomIndexLetter?: ({ item, index, onPress }: IIndexLetterProps<Type>) => JSX.Element;
  getItemHeight?: (sectionIndex: number, rowIndex: number) => number;
  sectionHeaderHeight?: number;
  listHeaderHeight?: number;
  uncategorizedAtTop?: boolean;
}
