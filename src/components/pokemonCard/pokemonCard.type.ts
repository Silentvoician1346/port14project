import type { PokemonDetailsProps } from "src/services/pokemon.type";
import { Dispatch, SetStateAction } from 'react';

export interface PokemonCardProps {
  // data
  data:  PokemonDetailsProps;
  // close card
  close: Dispatch<SetStateAction<boolean>>;
  //styling
  style?: React.CSSProperties;
  // optional if component clickable
  isDisabled?: boolean;
  // onClick function
  onClick?: () => void;
  // active state
  isActive?: boolean;
}

