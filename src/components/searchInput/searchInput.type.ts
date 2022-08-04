import React, {Dispatch,SetStateAction} from "react"

export interface SearchInputProps {
  // data
  data: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
  //styling
  style?: React.CSSProperties;
  // optional if component clickable
  isDisabled?: boolean;
  // onClick function
  onClick?: () => void;
  // active state
  isActive?: boolean;
}

