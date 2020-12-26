import React from 'react';
import { ListLetterIndex } from "."
import { render, fireEvent } from '@testing-library/react-native';

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
        const { getAllByTestId } = render(<ListLetterIndex sectionData={sectionData} onPressLetter={mockPressLetterFn} />)
        const indexItemElements = getAllByTestId('indexItem');
        const indexItemLabelElements = getAllByTestId('indexItem__title');

        // Assert.
        expect(indexItemElements.length).toBe(3)

        expect(indexItemLabelElements[0].props.children).toBe('A');
        expect(indexItemLabelElements[1].props.children).toBe('F');
        expect(indexItemLabelElements[2].props.children).toBe('P');
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

    it('should apply custom colour', () => {
        // Arrange.
        const indexLetterColor = "#456667"

        const { getAllByTestId } = render(
            <ListLetterIndex
                sectionData={sectionData}
                onPressLetter={mockPressLetterFn}
                indexLetterColor={indexLetterColor}
            />
        )

        const indexItemLabelElements = getAllByTestId("indexItem__title");

        // Assert.
        expect(indexItemLabelElements[0].props.style).toContainEqual({ color: indexLetterColor })
    })
})