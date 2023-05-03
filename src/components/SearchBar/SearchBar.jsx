import React from "react";
import { Search, Input } from "./SearchBarStyle";

const SearchBar = ({ placeholder, onValueChange, disabled }) => {
  const handleInputChange = (e) => {
    onValueChange(e.target.value);
  };

  return (
    <Search>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        disabled={disabled}
      />
    </Search>
  );
};

export default SearchBar;
