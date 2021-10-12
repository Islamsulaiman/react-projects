import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  let { searchTerm, setSearchTerm } = useGlobalContext();

  const reference = useRef();

  useEffect(() => {
    reference.current.focus();
  }, []);
  return (
    <section>
      <div>
        <p>Search Your Favorite Cocktail</p>
      </div>
      <input
        ref={reference}
        type='text'
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </section>
  );
};

export default SearchForm;
