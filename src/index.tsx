import * as React from "react";
import {
  SectionList,
  View,
  Text,
  SectionListData,
  TouchableOpacity,
  SectionListRenderItem,
} from "react-native";
import sectionListGetItemLayout from "react-native-section-list-get-item-layout";
import getSectionData from "./utilities/getSectionData";
import ListLetterIndex from "./components/ListLetterIndex";
import IData from "./interfaces/IData";
import ISectionData from "./interfaces/ISectionData";
import styles from "./styles/AlphabetListStyle";

interface Props {
  data: IData[];

  style?: any;
  renderItem?: (item: IData) => JSX.Element;
  renderSectionHeader?: (section: any) => JSX.Element;
  onLoadMoreItems?: Function;

  getItemHeight?: ({
    sectionIndex,
    rowIndex,
  }: {
    sectionIndex: number;
    rowIndex: number;
  }) => number;

  sectionHeaderHeight?: number;
  indexLetterColor?: string;
}

export default class AlphabetListView extends React.PureComponent<Props> {
  state: {
    sectionData: ISectionData[];
  } = {
    sectionData: [],
  };

  sectionList!: SectionList;
  onGetItemLayout: any;

  constructor(props: Props) {
    super(props);

    const {
      getItemHeight: onGetItemHeight = () => 40,
      sectionHeaderHeight = 40,
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

  componentDidUpdate(prevProps: Props) {
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
          keyExtractor={(item: IData) => item.name}
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

  onRenderItem = ({ item }: { item: IData }) => {
    const { renderItem } = this.props;

    if (renderItem) {
      return renderItem(item);
    }

    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  private onRenderSectionHeader = ({ section }: { section: any }) => {
    const { renderSectionHeader } = this.props;

    if (renderSectionHeader) {
      return renderSectionHeader(section);
    }

    return (
      <View style={styles.header}>
        <Text style={styles.headerLabel}>{section.title}</Text>
      </View>
    );
  };
}
