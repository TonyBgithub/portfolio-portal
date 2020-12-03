import React from 'react';
import "./search.scss";

function Search() {

function disableSearch() {
  document.getElementById("query").disabled = true;
}


return (
    <div className="search-docs">
      <form>
        <div className="input-text-wrap is-search">
          <span id="query" className="form-control search-hero__query search-query st-default-search-input" name="q" >/!\ Search disabled</span> 
        </div>
      </form>
    </div>
  );
}

export default Search;