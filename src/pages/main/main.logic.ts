import { getPokemonDetails, getPokemonList } from "src/services/pokemon";
import { Dispatch,SetStateAction } from "react";
import type { PokemonDetailsProps } from "src/services/pokemon.type";


const checkPage = (next: string | null, previous: string | null, setIsFirstPage: Dispatch<SetStateAction<boolean>>,
  setIsLastPage: Dispatch<SetStateAction<boolean>>) => {
  if (previous === null) {
    setIsFirstPage(true);
  } else if (next === null) {
    setIsLastPage(true);
  } else {
    setIsFirstPage(false);
    setIsLastPage(false);
  }
};

const searchHandle = async ( 
  setIsFirstPage: Dispatch<SetStateAction<boolean>>,
  setIsLastPage: Dispatch<SetStateAction<boolean>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  currentPage: number,
  setMaxPage: Dispatch<SetStateAction<number>>,
  setSearchResult: Dispatch<SetStateAction<PokemonDetailsProps[]>>,
  checkPage: (next: string | null, previous: string | null, setIsFirstPage: Dispatch<SetStateAction<boolean>>,
    setIsLastPage: Dispatch<SetStateAction<boolean>> ) => void
) => {
  setIsLoading(true);
  const { results, count, next, previous } = await getPokemonList(currentPage);
  setMaxPage(Math.floor(count / 24) + 1);
  const searchResult = await getPokemonDetails(results);
  setSearchResult(searchResult);
  checkPage(next, previous, setIsFirstPage, setIsLastPage);
  setIsLoading(false);
};


export {searchHandle, checkPage}