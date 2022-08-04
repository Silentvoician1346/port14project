import type {PokemonProps} from 'src/services/pokemonAPI.type'
import type { PokemonDetailsProps } from "src/services/pokemon.type";

export interface PokemonCardProps {
  // data
  data:  PokemonDetailsProps;
  //styling
  style?: React.CSSProperties;
  // optional if component clickable
  isDisabled?: boolean;
  // onClick function
  onClick?: () => void;
  // active state
  isActive?: boolean;
}

