import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ISectionData from "../interfaces/ISectionData";
import styles from "../styles/ListLetterIndexStyle";

export interface Props {
  onPressLetter: Function;
  sectionData: ISectionData[];
  indexLetterColor?: string;
}

export default class AlphabetLetterIndex extends React.PureComponent<Props> {
  getComputedLabelStyle() {
    const { indexLetterColor } = this.props;

    if (indexLetterColor) {
      return {
        color: indexLetterColor,
      };
    }
  }

  renderLetterItem = ({
    item,
    index,
  }: {
    item: ISectionData;
    index: number;
  }) => {
    const { indexLetterColor } = this.props;
    const computedLabelStyle = this.getComputedLabelStyle();

    return (
      <TouchableOpacity onPress={() => this.props.onPressLetter(index)}>
        <View style={styles.letterIndexItem}>
          <Text style={[styles.letterIndexLabel, computedLabelStyle]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.letterIndexContainer}>
        <FlatList
          contentContainerStyle={styles.letterIndexList}
          data={this.props.sectionData}
          renderItem={this.renderLetterItem}
          keyExtractor={(i) => i.title}
        />
      </View>
    );
  }
}
