import * as React from "react";
import { SectionList } from "react-native";
import IData from "./interfaces/IData";
import ISectionData from "./interfaces/ISectionData";
interface Props {
    data: IData[];
    style?: any;
    renderItem?: (item: IData) => JSX.Element;
    renderSectionHeader?: (section: any) => JSX.Element;
    onLoadMoreItems?: Function;
    getItemHeight?: ({ sectionIndex, rowIndex, }: {
        sectionIndex: number;
        rowIndex: number;
    }) => number;
    sectionHeaderHeight?: number;
    indexLetterColor?: string;
}
export default class AlphabetListView extends React.PureComponent<Props> {
    state: {
        sectionData: ISectionData[];
    };
    sectionList: SectionList;
    onGetItemLayout: any;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    private setSectionData;
    private onScrollToSection;
    private onSetSectionListRef;
    render(): JSX.Element;
    onRenderItem: ({ item }: {
        item: IData;
    }) => JSX.Element;
    private onRenderSectionHeader;
}
export {};
