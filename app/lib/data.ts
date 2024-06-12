import { namesIndex } from "./names";

export function fetchName(name: string) {
  try {
    let nameData = namesIndex[name];
    return nameData || null;
  } catch (error) {
    throw new Error("Failed to fetch name.");
  }
}
