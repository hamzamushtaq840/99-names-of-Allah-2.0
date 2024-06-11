"use server";

import { NameAttr } from "./definitions";
import names from "./names";

// Define the fetchNames function to return a Promise
export async function fetchNames(page: number) {
  console.log(page);
  const perPage = 3;
  const start = (page - 1) * perPage;
  const end = page * perPage;

  // Slice the names array to return only the names for the current page
  console.log(names.slice(start, end));
  return names.slice(start, end) as NameAttr[];
}
