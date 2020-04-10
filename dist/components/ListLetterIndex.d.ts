import * as React from "react";
import ISectionData from "../interfaces/ISectionData";
export interface Props {
    onPressLetter: (sectionIndex: number) => void;
    sectionData: ISectionData[];
    indexLetterColor?: string;
}
export default class AlphabetLetterIndex extends React.PureComponent<Props> {
    getComputedLabelStyle(): {
        color: string;
    } | undefined;
    renderLetterItem: ({ item, index, }: {
        item: ISectionData;
        index: number;
    }) => JSX.Element;
    render(): JSX.Element;
}
