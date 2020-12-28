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
});
