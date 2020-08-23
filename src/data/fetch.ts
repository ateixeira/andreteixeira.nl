import data from "./seed.json";
import { SeedData } from "../components/Cv/types";

export const fetchFromSeed = (): Promise<SeedData> => {
  const seedPromise = new Promise((resolve, reject) => {
    resolve(data);
  });

  return seedPromise;
};
