import type { PokemonType } from './pokemonAPI.type'

export interface resultProps {
  name: string;
  url: string;
}

export interface PokemonListProps {
  results: resultProps[];
  count: number;
  next:string | null;
  previous:string | null;
}

export interface PokemonStat {
  value: number;
  name: string;
}

export interface PokemonDetailsProps {
  id: number;
  name: string;
  image: string;
  status: PokemonStat[];
  elements: PokemonType[]
}