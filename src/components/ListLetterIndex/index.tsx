import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ListLetterIndexProps } from "./types"
import { styles } from "./styles";

export const ListLetterIndex: React.FC<ListLetterIndexProps> = ({
  sectionData,
  onPressLetter,
  indexLetterColor
}) => {
  const labelStyle = indexLetterColor ? { color: indexLetterColor } : {}

  return (
    <View style={styles.letterIndexContainer}>
      <FlatList
        contentContainerStyle={styles.letterIndexList}
        data={sectionData}
        keyExtractor={(i) => i.title}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onPressLetter(index)}>
            <View style={styles.letterIndexItem}>
              <Text style={[styles.letterIndexLabel, labelStyle]}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}