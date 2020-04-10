# react-native-section-alphabet-list

A simple React Native component that takes an array of data and renders a SectionList with alphabetically sorted data.

![Alt text](https://media.giphy.com/media/SACshMzMIP2NvP8rvY/giphy.gif)

## Motivation

Unlike alternatives, this package takes an array of data rather than an object with letters as keys.

For example,

_Other packages_

```javascript
const data = {
  A: [{...}, ...],
  B: [{...}, ...],
  C: [{...}, ...],
  ...
}
```

_This package_

```javascript
const data = [{...}, {...}, {...}, ...]
```

For _react-native-section-alphabet-list_, the data does not need to be pre-formatted and sorted before use. The component handles all this logic internally.

## Installation

Using npm:

```bash
npm install react-native-section-alphabet-list
```

or with yarn:

```bash
yard add react-native-section-alphabet-list
```

## Usage

### Import the module

```javascript
import AlphabetList from "react-native-section-alphabet-list";
```

### Use the component

```javascript
<AlphabetList
  data={YourData}
  renderItem={YourRenderItemFunction}
  renderSectionHeader={YourRenderSectionHeaderFunction}
  getItemHeight={YourItemHeight}
  sectionHeaderHeight={YourHeaderHeight}
  indexLetterColor={ColorOfTheIndexSidebarLetters}
/>
```

`YourData` should be provided as an Array of objects, with each object item having both a `value`and a `key`.

```javascript
const YourData = [
  {
     value: string, // determines which alphabet section to place the object in
     key: string // used as the key in the keyExtractor for SectionList
     ... // your other properties
  },
  ...
]
```

## Example

```javascript
class ListItem extends Component {
   const { value } = this.props.item

   return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemLabel}>{value}</Text>
      </View>
    );
}

class SectionHeader extends Component {
   const { title } = this.props.section

   return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderLabel}>{title}</Text>
      </View>
    );
}

class MyComponent extends Component {
  state = {
     data: [
       { value: 'Albania', key: 'AL' },
       { value: 'Canada', key: 'CA' },
       { value: 'Benin', key: 'BJ' },
       { value: 'Guinea', key: 'GN' },
       { value: 'Ethiopia', key: 'ET' },
       { value: 'Azerbaijan', key: 'AZ' },
       { value: 'Bermuda', key: 'BM' },
       { value: 'Greece', key: 'GR' },
       { value: 'Hong Kong', key: 'HK' },
       { value: 'Hungary', key: 'HU' },
       { value: 'India', key: 'IN' },
       { value: 'Ireland', key: 'IE' },
       { value: 'Dominica', key: 'DM' },
       { value: 'Jamaica', key: 'JM' },
       { value: 'Mexico', key: 'MX' },
       { value: 'Lithuania', key: 'LT' },
       { value: 'Luxembourg', key: 'LU' },
       { value: 'New Zealand', key: 'NZ' },
       { value: 'Portugal', key: 'PT' },
       { value: 'Japan', key: 'JP' },
       { value: 'France', key: 'FR' },
       { value: 'Egypt', key: 'EG' },
       { value: 'Finland', key: 'FI' },
       { value: 'China', key: 'CN' },
       { value: 'Denmark', key: 'DK' }
     ]
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AlphabetList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={ListItem}
          renderSectionHeader={SectionHeader}
          getItemHeight={() => sizes.itemHeight}
          sectionHeaderHeight={sizes.headerHeight}
          indexLetterColor={colors.primary}
        />
      </SafeAreaView>
    );
  }
}

const colors = {
  background: {
    light: 'white',
    dark: '#8e8e93',
  },

  seperatorLine: '#e6ebf2',

  text: {
    dark: '#1c1b1e',
  },

  primary: '#007aff',
};

const sizes = {
  itemHeight: 40,
  headerHeight: 30,

  spacing: {
    regular: 15,
  },
};

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
});
```

## Roadmap

- Support for more custom styles
- Option to highlight which section is active when scrolling

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
