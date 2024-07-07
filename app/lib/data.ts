import { singleNamesDataAttr } from "./definitions";
import { singleNamesData } from "./names";

export function fetchName(name: string) {
  try {
    const index = singleNamesData.findIndex((val) => val.english.name === name);
    if (index !== -1) {
      const foundName: singleNamesDataAttr = {
        ...singleNamesData[index],
        nextName: singleNamesData[index + 1]?.english?.name,
        prevName: singleNamesData[index - 1]?.english?.name,
      };
      return foundName;
    }
    return null;
  } catch (error) {
    throw new Error("Failed to fetch name.");
  }
}
