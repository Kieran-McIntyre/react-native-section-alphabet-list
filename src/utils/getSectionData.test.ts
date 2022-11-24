import { getSectionData } from "./getSectionData";
import { countriesData, countriesResult } from "../../fixtures/countriesData";
import { DEFAULT_CHAR_INDEX } from "../values/consts"

describe("utils - getSectionData", () => {
  it("countriesDataSet > returns data in correct format", () => {
    // Arrange.
    const sectionData = getSectionData(countriesData, DEFAULT_CHAR_INDEX);

    // Assert.
    expect(sectionData).toEqual(countriesResult)
  });

  describe("has custom lettersMap", () => {
    it("should filter and correctly sort data", () => {
      // Arrange.
      const customMapData = [
        { value: '400', key: '10' },
        { value: '110', key: '6' },
        { value: 'Kansas', key: '1' },
        { value: 'Yamaha', key: '3' },
        { value: '100', key: '4' },
        { value: '250', key: '8' },
        { value: '430', key: '11' },
        { value: 'Xero', key: '2' },
        { value: '101', key: '5' },
        { value: '200', key: '7' },
        { value: '33', key: '9' },
      ]

      const customLettersMap = ["1", "2", "3", "X", "K"]

      const expectedResult = [
        {
          index: 0,
          title: "1",
          data: [
            { value: '100', key: '4' },
            { value: '101', key: '5' },
            { value: '110', key: '6' },
          ]
        },
        {
          index: 1,
          title: "2",
          data: [
            { value: '200', key: '7' },
            { value: '250', key: '8' },
          ]
        },
        {
          index: 2,
          title: "3",
          data: [
            { value: '33', key: '9' },
          ]
        },
        {
          index: 3,
          title: "X",
          data: [
            { value: 'Xero', key: '2' },
          ]
        },
        {
          index: 4,
          title: "K",
          data: [
            { value: 'Kansas', key: '1' },
          ]
        },
        {
          index: 5,
          title: "#",
          data: [
            { value: '400', key: '10' },
            { value: '430', key: '11' },
            { value: 'Yamaha', key: '3' },
          ]
        },
      ]

      const sectionData = getSectionData(customMapData, customLettersMap);

      // Assert.
      expect(sectionData).toEqual(expectedResult)
    })
  })

  describe("uncategorizedAtTop", () => {
    it("uncategorizedAtTop is false > uncategorized items are at bottom of list", () => {
      // Arrange.
      const sectionData = getSectionData(countriesData, DEFAULT_CHAR_INDEX);
      const charStart = sectionData[0]
      const charEnd = sectionData[sectionData.length - 1]

      // Assert.
      expect(charStart.title).toBe('A')
      expect(charEnd.title).toBe('#')
    })

    it("uncategorizedAtTop is false > uncategorized items are at top of list", () => {
      // Arrange.
      const sectionData = getSectionData(countriesData, DEFAULT_CHAR_INDEX, true);
      const charStart = sectionData[0]
      const charEnd = sectionData[sectionData.length - 1]

      // Assert.
      expect(charStart.title).toBe('#')
      expect(charEnd.title).toBe('Z')
    })
  })
});
