import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form className="form-inline" id="search-form">
        <input
          type="City"
          className="form-control"
          placeholder="Find Your City"
          id="find-city"
        />
        <button type="button" class="btn btn-info" id="go-Button">
          Go!
        </button>
      </form>
      <button type="button" class="btn btn-info" id="now-Button">
        Now!
      </button>
    </div>
  );
}
