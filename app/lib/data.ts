import { singleNamesData } from "./names";

export function fetchName(name: string) {
  try {
    const foundName = singleNamesData.find((val) => val.english.name === name);
    return foundName || null;
  } catch (error) {
    throw new Error("Failed to fetch name.");
  }
}
