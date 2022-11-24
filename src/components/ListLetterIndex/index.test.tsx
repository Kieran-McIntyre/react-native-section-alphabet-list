import React from 'react';
import { ListLetterIndex } from "."
import { render, screen, fireEvent } from '@testing-library/react-native';
import { View, Text, ViewStyle } from "react-native"

describe('ListLetterIndex', () => {
  const mockPressLetterFn = jest.fn()
  const sectionData = [
    {
      title: 'A',
      data: [],
      index: 0,
    },
    {
      title: 'F',
      data: [],
      index: 1,
    },
    {
      title: 'P',
      data: [],
      index: 2,
    }
  ]

  beforeEach(() => {
    mockPressLetterFn.mockReset()
  })

  it('should render all characters', () => {
    // Arrange.
    render(
      <ListLetterIndex
        sectionData={sectionData}
        onPressLetter={mockPressLetterFn}
      />
    )

    const indexItemElements = screen.getAllByTestId('indexItem');
    const indexItemLabelElements = screen.getAllByTestId('indexItem__title');

    // Assert.
    expect(indexItemElements.length).toBe(3)

    expect(indexItemLabelElements[0].props.children).toBe('A');
    expect(indexItemLabelElements[1].props.children).toBe('F');
    expect(indexItemLabelElements[2].props.children).toBe('P');
  })


  it("should render custom index letter", () => {
    // Arrange.
    const onRenderCustomIndexLetter = ({ item }: any) => (
      <View testID="customLetterIndex">
        <Text testID="customLetterIndex__label">{`custom-${item.title}`}</Text>
      </View>
    )

    render(
      <ListLetterIndex
        sectionData={sectionData}
        onPressLetter={mockPressLetterFn}
        renderCustomIndexLetter={onRenderCustomIndexLetter}
      />
    )
    const customLetterIndexElements = screen.getAllByTestId('customLetterIndex__label');

    // Assert.
    expect(customLetterIndexElements.length).toBe(3)

    expect(customLetterIndexElements[0].props.children).toBe('custom-A');
    expect(customLetterIndexElements[1].props.children).toBe('custom-F');
    expect(customLetterIndexElements[2].props.children).toBe('custom-P');
  })

  it('should call onPressLetter', () => {
    // Arrange.
    render(
      <ListLetterIndex
        sectionData={sectionData}
        onPressLetter={mockPressLetterFn}
      />
    )

    const indexItemElements = screen.getAllByTestId('indexItem');

    // Act.
    fireEvent.press(indexItemElements[1])

    // Assert.
    expect(mockPressLetterFn).toHaveBeenCalledWith(1);
  })

  it('indexLetterContainerStyle > should apply custom style', () => {
    // Arrange.
    const indexLetterContainerStyle = {
      backgroundColor: "#366bff",
      padding: 25,
      marginRight: 20,
    }

    const expectedStyle = [
      {
        alignItems: "center",
        justifyContent: "center",
        height: 15,
        width: 10,
      },
      {
        backgroundColor: "#366bff",
        padding: 25,
        marginRight: 20,
      }
    ]

    render(
      <ListLetterIndex
        sectionData={sectionData}
        onPressLetter={mockPressLetterFn}
        indexLetterContainerStyle={indexLetterContainerStyle}
      />
    )

    const indexItemContainerElements = screen.getAllByTestId("indexItem__title-container");

    // Assert.
    expect(indexItemContainerElements[0].props.style).toEqual(expectedStyle)
  })

  it('indexLetterStyle > should apply custom style', () => {
    // Arrange.
    const indexLetterStyle = {
      color: "#456667",
      backgroundColor: "red",
      padding: 20,
    }

    const expectedStyle = [
      { color: "grey", fontSize: 10, fontWeight: "bold" },
      { color: "#456667", backgroundColor: "red", padding: 20 }
    ]

    render(
      <ListLetterIndex
        sectionData={sectionData}
        onPressLetter={mockPressLetterFn}
        indexLetterStyle={indexLetterStyle}
      />
    )

    const indexItemLabelElements = screen.getAllByTestId("indexItem__title");

    // Assert.
    expect(indexItemLabelElements[0].props.style).toEqual(expectedStyle)
  })

  it('letterListContainerStyle > should apply custom style', () => {
    // Arrange.
    const letterListContainerStyle: ViewStyle = {
      alignItems: "flex-start",
    }

    const expectedStyle = [
      {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      },
      {
        alignItems: "flex-start"
      }
    ]

    render(
      <ListLetterIndex
        sectionData={sectionData}
        onPressLetter={mockPressLetterFn}
        letterListContainerStyle={letterListContainerStyle}
      />
    )

    const flatList = screen.getAllByTestId("flatList");

    // Assert.
    expect(flatList[0].props.contentContainerStyle).toEqual(expectedStyle)
  })
})
