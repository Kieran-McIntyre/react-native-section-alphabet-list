import * as React from "react";
import { SectionList } from "react-native";
import ISectionData from "./interfaces/ISectionData";
import IAlphabetListProps from "./interfaces/IAlphabetListProps";
export default class AlphabetListView extends React.PureComponent<IAlphabetListProps> {
    state: {
        sectionData: ISectionData[];
    };
    sectionList: SectionList;
    onGetItemLayout: any;
    constructor(props: IAlphabetListProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IAlphabetListProps): void;
    private setSectionData;
    private onScrollToSection;
    private onSetSectionListRef;
    render(): JSX.Element;
    private onRenderItem;
    private onRenderSectionHeader;
}
