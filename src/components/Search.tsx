import React, { useState } from "react";
import { useHistory } from "react-router";

const Search = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);

    if (event.key !== "Enter") {
      return false;
    }
    return handleOnClick()
  };

  const handleOnClick = () => {
    history.push({
      pathname: "/search-results",
      state: { term: searchTerm },
    });
 
  };

  return (
    <div className="dev-u-margin-default--4px">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleOnClick} className="dev-btn">
        Search
      </button>
    </div>
  );
};

export default Search;
