// @ts-nocheck
// Disable TS checks since TS does not currently support recursive functions

interface IObject {
  [key: string]: any;
}

export const areArraysEqual = (array1: any[], array2: any[]) => {
  return array1.every((itemArray1: any, index: number) => {
    const itemArray2 = array2[index];

    if (typeof itemArray1 === "object" && typeof itemArray2 === "object") {
      return areObjectsEqual(itemArray1, itemArray2);
    }

    return itemArray1 === itemArray2;
  });
};

export const areObjectsEqual = (object1: IObject, object2: IObject) => {
  return Object.keys(object1).every((key: string) => {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      return areArraysEqual(value1, value2);
    }

    return value1 === value2;
  });
};

export default {
  areArraysEqual,
  areObjectsEqual,
};
