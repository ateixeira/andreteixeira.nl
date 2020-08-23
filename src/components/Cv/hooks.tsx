import { useState, useEffect } from "react";
import { fetchFromSeed } from "../../data/fetch";
import { SeedData } from "./types";

function useFetchFromSeed() {
  const [data, setData] = useState<SeedData>({});
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData() {
    const response = await fetchFromSeed();
    setData(response);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
}
export { useFetchFromSeed };
