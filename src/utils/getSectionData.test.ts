import { getSectionData } from "./getSectionData";
import { countriesData, countriesResult } from "../../fixtures/countriesData";
import { customMapData, customMapResult } from "../../fixtures/customMapData";
import { DEFAULT_CHAR_INDEX } from "../values/consts"

describe("utils - getSectionData", () => {
  it("countriesDataSet > returns data in correct format", () => {
    // Arrange.
    const sectionData = getSectionData(countriesData, DEFAULT_CHAR_INDEX);

    // Assert.
    expect(sectionData).toEqual(countriesResult)
  });

  it("custom lettersMap > should correctly sort", () => {
    // Arrange.
    const customLettersMap = ["1", "2", "3", "X", "K"]
    const sectionData = getSectionData(customMapData, customLettersMap);

    // Assert.
    expect(sectionData).toEqual(customMapResult)
  })

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
});
