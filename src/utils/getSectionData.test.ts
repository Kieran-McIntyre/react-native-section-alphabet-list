import { getSectionData } from "./getSectionData";
import countriesData from "../../fixtures/countriesData";
import countriesResult from "../../fixtures/countriesResult";
import randomData from "../../fixtures/otherData";
import randomResult from "../../fixtures/otherResult";
import { DEFAULT_LETTER_MAP } from "../values/consts"

describe("utils - getSectionData", () => {
  it("countriesDataSet > returns data in correct format", () => {
    // Arrange.
    const sectionData = getSectionData(countriesData, DEFAULT_LETTER_MAP);

    // Assert.
    expect(sectionData).toEqual(countriesResult)
  });

  it("custom lettersMap > should correctly sort", () => { })

  // it("randomDataSet > returns data in correct format", () => {
  //   // Arrange.
  //   const sectionData = getSectionData(randomData, DEFAULT_LETTER_MAP);

  //   // Assert.
  //   expect(sectionData).toEqual(randomResult)
  // });
});
