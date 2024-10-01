// Utils and Constants
import { NAME_DETAILS } from "./constants";

// Interfaces
import { INameDetails } from "./interfaces/name-details.interface";

export function fetchName(name: string) {
  try {
    const index = NAME_DETAILS.findIndex((val) => val.english.name === name);
    if (index !== -1) {
      const foundName: INameDetails = {
        ...NAME_DETAILS[index],
        nextName: NAME_DETAILS[index + 1]?.english?.name,
        prevName: NAME_DETAILS[index - 1]?.english?.name,
      };
      return foundName;
    }
    return null;
  } catch (error) {
    throw new Error("Failed to fetch name.");
  }
}
