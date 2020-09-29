import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const SearchResults = props => {
  console.log(props.results);
  return (
    <table className="table table-hover">
      <TableHead />
      <TableBody data={props.results} />
    </table>
  );
};

export default SearchResults;
