import React, { Component } from "react";
import Input from "@material-ui/core/Input";

const Search = (props) => {
  return (
    
      <Input
        onChange={props.searchCountry}
        className="search-box"
        placeholder="Enter Country Name"
      />
    
  );
};

export default Search;
