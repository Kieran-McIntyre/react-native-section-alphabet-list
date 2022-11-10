import React from 'react';
import { AlphabetList } from "."
import { render, screen } from '@testing-library/react-native';
import { View } from "react-native"

describe('AlphabetList', () => {
  const data = [
    { value: 'Carrot', key: 'carrot' },
    { value: 'Apple', key: 'apple' },
    { value: 'Cauliflower', key: 'cauliflower' },
    { value: 'Banana', key: 'banana' },
    { value: 'Azucar', key: 'azucar' },
  ]

  it('should render all cells', () => {
    // Arrange.
    render(<AlphabetList data={data} />)

    const cellElements = screen.getAllByTestId('cell');
    const cellLabelElements = screen.getAllByTestId('cell__label');

    // Assert.
    expect(cellElements.length).toBe(5);

    expect(cellLabelElements[0].props.children).toBe("Apple");
    expect(cellLabelElements[1].props.children).toBe("Azucar");
    expect(cellLabelElements[2].props.children).toBe("Banana");
    expect(cellLabelElements[3].props.children).toBe("Carrot");
    expect(cellLabelElements[4].props.children).toBe("Cauliflower");
  })

  it('should render all headers', () => {
    // Arrange.
    render(<AlphabetList data={data} />)
    const headerElements = screen.getAllByTestId('header');
    const headerLabelElements = screen.getAllByTestId('header__label');

    // Assert.
    expect(headerElements.length).toBe(3);

    expect(headerLabelElements[0].props.children).toBe("A");
    expect(headerLabelElements[1].props.children).toBe("B");
    expect(headerLabelElements[2].props.children).toBe("C");
  })

  it('should render custom cell', () => {
    // Arrange.
    const onRenderCell = () => <View testID="customCell" />
    render(<AlphabetList data={data} renderCustomItem={onRenderCell} />)

    const cellElements = screen.queryAllByTestId('cell');
    const customCellElements = screen.getAllByTestId('customCell');

    // Assert.
    expect(cellElements.length).toBe(0);
    expect(customCellElements.length).toBe(5)
  })

  it('should render custom header', () => {
    // Arrange.
    const onRenderHeader = () => <View testID="customHeader" />
    render(<AlphabetList data={data} renderCustomSectionHeader={onRenderHeader} />)

    const headerElements = screen.queryAllByTestId('header');
    const customHeaderElements = screen.getAllByTestId('customHeader');

    // Assert.
    expect(headerElements.length).toBe(0);
    expect(customHeaderElements.length).toBe(3)
  })

  it('should render custom list header', () => {
    // Arrange.
    const onRenderListHeader = () => <View testID="customListHeader" />
    render(<AlphabetList data={data} renderCustomListHeader={onRenderListHeader} />)

    const customListHeaderElement = screen.getByTestId('customListHeader');

    // Assert.
    expect(customListHeaderElement).toBeDefined();
  })

  it('should pass props to SectionList', () => {
    // Arrange.
    render(
      <AlphabetList
        data={data}
        horizontal={true}
        keyboardDismissMode="on-drag"
      />
    )
    const sectionList = screen.getByTestId("sectionList")

    // Assert.
    expect(sectionList.props.keyboardDismissMode).toBe("on-drag")
    expect(sectionList.props.horizontal).toBe(true)
  })

  describe("uncategorised items", () => {
    const dataWithUncategorised = [
      { value: '€20', key: 'euro' },
      { value: '2', key: '2' },
      { value: '1', key: '1' },
      { value: '3', key: '3' },
      { value: 'Apple', key: 'apple' },
      { value: '!Hola!', key: 'hola' },
    ]

    it('by default > should render uncategorised section at top', () => {
      // Arrange.
      render(<AlphabetList data={dataWithUncategorised} uncategorizedAtTop={true} />)

      const cellElements = screen.getAllByTestId('cell');
      const cellLabelElements = screen.getAllByTestId('cell__label');

      // Assert.
      expect(cellElements.length).toBe(6);

      expect(cellLabelElements[0].props.children).toBe("!Hola!");
      expect(cellLabelElements[1].props.children).toBe("1");
      expect(cellLabelElements[2].props.children).toBe("2");
      expect(cellLabelElements[3].props.children).toBe("3");
      expect(cellLabelElements[4].props.children).toBe("€20");
      expect(cellLabelElements[5].props.children).toBe("Apple");
    })

    it('should render headers', () => {
      // Arrange.
      render(<AlphabetList data={dataWithUncategorised} uncategorizedAtTop={true} />)

      const headerElements = screen.getAllByTestId('header');
      const headerLabelElements = screen.getAllByTestId('header__label');

      // Assert.
      expect(headerElements.length).toBe(2);

      expect(headerLabelElements[0].props.children).toBe("#");
      expect(headerLabelElements[1].props.children).toBe("A");
    })
  })
})