import * as React from "react";
import { useEffect, useState, useRef } from "react"
import { SectionList, View, Text, SectionListData } from "react-native";
import sectionListGetItemLayout from "react-native-section-list-get-item-layout";
import { getSectionData } from "../../utils/getSectionData";
import { ListLetterIndex } from "../ListLetterIndex";
import { IData, ISectionData, AlphabetListProps } from "./types";
import { styles } from "./styles";
import { sizes } from "../../values/sizes";
import { DEFAULT_CHAR_INDEX } from "../../values/consts"

export const AlphabetList: React.FC<AlphabetListProps> = (props) => {
  const {
    data,
    index = DEFAULT_CHAR_INDEX,
    style,
    indexLetterColor,
    getItemHeight: onGetItemHeight = () => sizes.itemHeight,
    sectionHeaderHeight = sizes.itemHeight,
    uncategorizedAtTop = false,
    renderCustomSectionHeader,
    renderCustomItem,
    ...sectionListProps
  } = props

  const sectionListRef = useRef(null);
  const [sectionData, setSectionData] = useState<ISectionData[]>([])

  useEffect(() => {
    setSectionData(getSectionData(data, index, uncategorizedAtTop))
  }, [data])

  const onScrollToSection = (sectionIndex: number) => {
    const sectionList = sectionListRef.current! as SectionList;
    if (!sectionList) return

    sectionList.scrollToLocation({
      sectionIndex,
      itemIndex: 0,
    });
  }


  const onGetItemLayout: any = sectionListGetItemLayout({
    getItemHeight: (_rowData, sectionIndex: number, rowIndex: number) => {
      return onGetItemHeight(sectionIndex, rowIndex)
    },
    getSectionHeaderHeight: () => sectionHeaderHeight,
    getSectionFooterHeight: () => 0,
  });

  const onRenderSectionHeader = ({ section }: { section: SectionListData<IData> }) => {
    if (renderCustomSectionHeader) return renderCustomSectionHeader(section);

    return (
      <View testID="header" style={styles.sectionHeaderContainer}>
        <Text testID="header__label" style={styles.sectionHeaderLabel}>{section.title}</Text>
      </View>
    );
  };

  const onRenderItem = ({ item }: { item: IData }) => {
    if (renderCustomItem) return renderCustomItem(item);

    return (
      <View testID="cell" style={styles.listItemContainer}>
        <Text testID="cell__label" style={styles.listItemLabel}>{item.value}</Text>
      </View>
    );
  };


  return (
    <View style={[styles.container, style]}>
      <SectionList
        {...sectionListProps}
        testID="sectionList"
        ref={sectionListRef}
        sections={sectionData}
        keyExtractor={(item: IData) => item.key}
        renderItem={onRenderItem}
        renderSectionHeader={onRenderSectionHeader}
        getItemLayout={onGetItemLayout}
      />

      <ListLetterIndex
        sectionData={sectionData}
        onPressLetter={onScrollToSection}
        indexLetterColor={indexLetterColor}
      />
    </View>
  );
}
