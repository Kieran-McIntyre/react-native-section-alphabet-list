import getSectionData from "../../src/utilities/getSectionData";
import countriesData from "./data/countriesData";
import countriesResult from "./data/countriesResult";
import randomData from "./data/otherData";
import randomResult from "./data/otherResult";
import { areArraysEqual } from "./helpers";

describe("getSectionData", () => {
  it("countriesDataSet > returns data in correct format", () => {
    const sectionData = getSectionData(countriesData);
    expect(areArraysEqual(sectionData, countriesResult)).toBeTruthy();
  });

  it("randomDataSet > returns data in correct format", () => {
    const sectionData = getSectionData(randomData);
    expect(areArraysEqual(sectionData, randomResult)).toBeTruthy();
  });
});
