import { ICountry } from "../types/models/country";

export const createCountry = (title: string): ICountry => ({
  id: `${Math.trunc(Math.random() * 1000)}`,
  title,
});

export const countries = [
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "Egypt",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "Mexico",
  "Russia",
  "South Africa",
  "Spain",
  "Thailand",
  "Turkey",
  "United Kingdom",
  "United States",
].map(createCountry);
