import * as React from "react";
import { SectionList, View, Text, SectionListData } from "react-native";
import sectionListGetItemLayout from "react-native-section-list-get-item-layout";
import getSectionData from "./utilities/getSectionData";
import ListLetterIndex from "./components/ListLetterIndex";
import IData from "./interfaces/IData";
import ISectionData from "./interfaces/ISectionData";
import IAlphabetListProps from "./interfaces/IAlphabetListProps";
import styles from "./styles/AlphabetListStyle";
import sizes from "./values/sizes";

export default class AlphabetListView extends React.PureComponent<
  IAlphabetListProps
> {
  state: {
    sectionData: ISectionData[];
  } = {
    sectionData: [],
  };

  sectionList!: SectionList;
  onGetItemLayout: any;

  constructor(props: IAlphabetListProps) {
    super(props);

    const {
      getItemHeight: onGetItemHeight = () => sizes.itemHeight,
      sectionHeaderHeight = sizes.itemHeight,
    } = props;

    this.onGetItemLayout = sectionListGetItemLayout({
      getItemHeight: (_, sectionIndex: number, rowIndex: number) =>
        onGetItemHeight({ sectionIndex, rowIndex }),
      getSectionHeaderHeight: () => sectionHeaderHeight,
      getSectionFooterHeight: () => 0,
    });
  }

  componentDidMount() {
    this.setSectionData();
  }

  componentDidUpdate(prevProps: IAlphabetListProps) {
    if (prevProps.data.length !== this.props.data.length) {
      this.setSectionData();
    }
  }

  private setSectionData = () => {
    const { data = [] } = this.props;
    const sectionData = getSectionData(data);

    this.setState({ sectionData });
  };

  private onScrollToSection = (sectionIndex: number) => {
    this.sectionList.scrollToLocation({
      sectionIndex,
      itemIndex: 0,
    });
  };

  private onSetSectionListRef = (sectionList: SectionList) => {
    if (!sectionList) {
      return;
    }

    this.sectionList = sectionList;
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <SectionList
          {...this.props}
          ref={this.onSetSectionListRef}
          sections={this.state.sectionData}
          keyExtractor={(item: IData) => item.key}
          renderItem={this.onRenderItem}
          renderSectionHeader={this.onRenderSectionHeader}
          getItemLayout={this.onGetItemLayout}
        />

        <ListLetterIndex
          sectionData={this.state.sectionData}
          onPressLetter={this.onScrollToSection}
          indexLetterColor={this.props.indexLetterColor}
        />
      </View>
    );
  }

  private onRenderItem = ({ item }: { item: IData }) => {
    const { renderItem } = this.props;

    if (renderItem) {
      return renderItem(item);
    }

    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemLabel}>{item.value}</Text>
      </View>
    );
  };

  private onRenderSectionHeader = ({
    section,
  }: {
    section: SectionListData<IData>;
  }) => {
    const { renderSectionHeader } = this.props;

    if (renderSectionHeader) {
      return renderSectionHeader(section);
    }

    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
      </View>
    );
  };
}
