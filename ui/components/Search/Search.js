import React, { useState } from "react";
import styles from "./Search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import SearchDropdown from "./SearchDropdown";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={styles.Search}>
      <form action="/">
        <input
          type="text"
          placeholder="Rechercher"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.searchBtn}>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </button>
      </form>
      {searchTerm && <SearchDropdown />}
    </div>
  );
};

Search.defaultProps = {};

export default Search;
