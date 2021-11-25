import { SectionListData, SectionListProps, TextStyle, ViewStyle } from "react-native";

export interface IData {
  value: string;
  key: string;
}

export interface ISectionData {
  title: string;
  data: IData[];
  index?: number;
}
export interface IIndexLetterProps {
  item: ISectionData,
  index: number,
  onPress: () => void;
}

export interface AlphabetListProps extends Partial<SectionListProps<IData>> {
  data: IData[];
  index?: string[],
  style?: ViewStyle;
  indexLetterStyle?: TextStyle,
  indexLetterContainerStyle?: ViewStyle,
  indexContainerStyle?: ViewStyle,
  letterListContainerStyle?: CSSProperties,
  renderCustomItem?: (item: IData) => JSX.Element;
  renderCustomSectionHeader?: (section: SectionListData<IData>) => JSX.Element;
  renderCustomListHeader?: () => JSX.Element;
  renderCustomIndexLetter?: ({ item, index, onPress }: IIndexLetterProps) => JSX.Element;
  getItemHeight?: (sectionIndex: number, rowIndex: number) => number;
  sectionHeaderHeight?: number;
  listHeaderHeight?: number;
  uncategorizedAtTop?: boolean;
}
