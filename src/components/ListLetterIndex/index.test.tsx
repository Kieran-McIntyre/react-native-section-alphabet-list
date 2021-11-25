import React from 'react';
import { ListLetterIndex } from "."
import { render, fireEvent } from '@testing-library/react-native';
import { View, Text } from "react-native"

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
        const { getAllByTestId } = render(
            <ListLetterIndex
                sectionData={sectionData}
                onPressLetter={mockPressLetterFn}
            />
        )

        const indexItemElements = getAllByTestId('indexItem');
        const indexItemLabelElements = getAllByTestId('indexItem__title');

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

        const { getAllByTestId } = render(
            <ListLetterIndex
                sectionData={sectionData}
                onPressLetter={mockPressLetterFn}
                renderCustomIndexLetter={onRenderCustomIndexLetter}
            />
        )
        const customLetterIndexElements = getAllByTestId('customLetterIndex__label');

        // Assert.
        expect(customLetterIndexElements.length).toBe(3)

        expect(customLetterIndexElements[0].props.children).toBe('custom-A');
        expect(customLetterIndexElements[1].props.children).toBe('custom-F');
        expect(customLetterIndexElements[2].props.children).toBe('custom-P');
    })

    it('should call onPressLetter', () => {
        // Arrange.
        const { getAllByTestId } = render(
            <ListLetterIndex
                sectionData={sectionData}
                onPressLetter={mockPressLetterFn}
            />
        )

        const indexItemElements = getAllByTestId('indexItem');

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

        const { getAllByTestId } = render(
            <ListLetterIndex
                sectionData={sectionData}
                onPressLetter={mockPressLetterFn}
                indexLetterContainerStyle={indexLetterContainerStyle}
            />
        )

        const indexItemContainerElements = getAllByTestId("indexItem__title-container");

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

        const { getAllByTestId } = render(
            <ListLetterIndex
                sectionData={sectionData}
                onPressLetter={mockPressLetterFn}
                indexLetterStyle={indexLetterStyle}
            />
        )

        const indexItemLabelElements = getAllByTestId("indexItem__title");

        // Assert.
        expect(indexItemLabelElements[0].props.style).toEqual(expectedStyle)
    })

    it('letterListContainerStyle > should apply custom style', () => {
        // Arrange.
        const letterListContainerStyle = {
            alignItems: "flex-start",
        }

        const expectedStyle = [
            {
                alignItems: "center",
                justifyContent: "center",
                height: '100%',
            },
            {
                alignItems: "flex-start"
            }
        ]

        const { getAllByTestId } = render(
            <ListLetterIndex
                sectionData={sectionData}
                onPressLetter={mockPressLetterFn}
                letterListContainerStyle={letterListContainerStyle}
            />
        )

        const flatList = getAllByTestId("flatList");
      
          // Assert.
        expect(flatList[0].props.contentContainerStyle).toEqual(expectedStyle)
    })

})
