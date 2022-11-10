/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { AlphabetList } from 'react-native-section-alphabet-list';

import { exampleData } from './src/data';
import { colors } from './src/colors';
import { sizes } from './src/sizes';

const App = () => {
  const renderListItem = (item: any) => {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemLabel}>{item.value}</Text>
      </View>
    );
  };

  const renderSectionHeader = (section: any) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
      </View>
    );
  };

  const renderCustomListHeader = () => {
    return (
      <View style={styles.listHeaderContainer}>
        <Text>List Header</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AlphabetList
        style={{ flex: 1 }}
        data={exampleData}
        renderCustomItem={renderListItem}
        renderCustomSectionHeader={renderSectionHeader}
        renderCustomListHeader={renderCustomListHeader}
        getItemHeight={() => sizes.itemHeight}
        sectionHeaderHeight={sizes.headerHeight}
        listHeaderHeight={sizes.listHeaderHeight}
        indexLetterStyle={{ color: colors.primary }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },

  listItemContainer: {
    flex: 1,
    height: sizes.itemHeight,
    paddingHorizontal: sizes.spacing.regular,
    justifyContent: 'center',
    borderTopColor: colors.seperatorLine,
    borderTopWidth: 1,
  },

  listItemLabel: {
    color: colors.text.dark,
    fontSize: 14,
  },

  sectionHeaderContainer: {
    height: sizes.headerHeight,
    backgroundColor: colors.background.dark,
    justifyContent: 'center',
    paddingHorizontal: sizes.spacing.regular,
  },

  sectionHeaderLabel: {
    color: colors.background.light,
  },

  listHeaderContainer: {
    height: sizes.listHeaderHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
