import { SectionListData, SectionListProps, ViewStyle } from "react-native";

export interface IData {
  value: string;
  key: string;
}

export interface ISectionData {
  title: string;
  data: IData[];
  index?: number;
}

export interface AlphabetListProps extends Partial<SectionListProps<IData>> {
  data: IData[];
  index?: string[],
  style?: ViewStyle;
  renderCustomItem?: (item: IData) => JSX.Element;
  renderCustomSectionHeader?: (section: SectionListData<IData>) => JSX.Element;
  getItemHeight?: (sectionIndex: number, rowIndex: number) => number;
  sectionHeaderHeight?: number;
  indexLetterColor?: string;
}
