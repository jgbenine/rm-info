import axios from "axios";

export const fetchDefault = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: {
    accept: "application/json",
  },
});

export async function fetchCharacterDataByPage(
  currentPage: number
): Promise<any> {
  const endpoint = `character?page=${currentPage}`;
  try {
    const response = await fetchDefault(endpoint);
    return response.data;
  } catch (error) {
    console.error("Request error", error);
    throw new Error("Failed to fetch character data");
  }
}

export async function fetchDetailCharacter(id: number): Promise<any> {
  const endpoint = `character/${id}`;
  try {
    const response = await fetchDefault(endpoint);
    return response.data;
  } catch (error) {
    console.error("Request error", error);
    throw new Error("Failed to fetch character data");
  }
}

export async function fetchCharacterDataBySearch(
  currentPage: number,
  searchInputQuery: string
): Promise<any> {
  const endpoint = `character/?page=${currentPage}&name=${searchInputQuery}`;

  try {
    const response = await fetchDefault(endpoint);
    return response.data.results;
  } catch (error) {
    console.error("Request error", error);
    throw new Error("Failed to fetch character data");
  }
}
