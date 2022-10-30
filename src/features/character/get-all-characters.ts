import { getCharacters } from "./get-characters";

export const getAllCharacters = async () => {
  const firstPage = await getCharacters(1);

  if (process.env.NODE_ENV === "development")
    return firstPage.characters.results;

  const pages = firstPage.characters.info.pages;

  const pagePromises = [...Array(pages)].map((_, idx) =>
    getCharacters(idx + 1)
  );

  const allPages = await Promise.all(pagePromises);

  return allPages.flatMap((page) => page.characters.results);
};
