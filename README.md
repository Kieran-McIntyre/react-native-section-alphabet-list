# react-native-section-alphabet-list

A simple React Native component that takes an array of data and renders a SectionList with alphabetically (or custom) sorted data.

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

For _react-native-section-alphabet-list_, the data does not need to be pre-formatted and sorted before use. The component handles all this logic internally. You can also provide an array of characters to sort your sections in a custom order.

## Installation

Using npm:

```bash
npm install react-native-section-alphabet-list
```

or with yarn:

```bash
yard add react-native-section-alphabet-list
```

## Basic Usage

### Import the module

```javascript
import { AlphabetList } from "react-native-section-alphabet-list";
```

### Use the component

## Custom Alphabet

You can provide an array of characters to the component using the `letterMap` prop. For example, if we wanted to sort alphabetically in-reverse, we could do:

```javascript
const customLetterMap = [
  "Z",
  "Y",
  "X",
  ...
]

<AlphabetList
  letterMap={customLetterMap}
  ...
/>
```


The result is:

![Alt text](https://media.giphy.com/media/SACshMzMIP2NvP8rvY/giphy.gif)

Or if we wanted to sort by numbers, we could do:

```javascript
const customLetterMap = [
  "1",
  "2",
  "3",
]

<AlphabetList
  letterMap={customLetterMap}
  ...
/>
```
The result is:

![Alt text](https://media.giphy.com/media/SACshMzMIP2NvP8rvY/giphy.gif)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
