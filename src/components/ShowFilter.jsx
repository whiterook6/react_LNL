import React, { useState } from "react";
import { FaCheckSquare, FaSearch, FaSquare, FaStar, FaTimesCircle, FaSortAlphaUp, FaSortAlphaDown, FaSortAmountUp, FaSortAmountDown, FaSortNumericUp, FaSortNumericDown } from "react-icons/fa";
import { ShowList } from "./ShowList";

export const ShowFilter = (props) => {

  const [searchInput, setSearchInput] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [isFinishedOnly, setIsFinishedOnly] = useState(false);
  const [sortDirection, setSortDirection] = useState("ascending");
  const [sortField, setSortField] = useState("name");

  const results = props.shows.filter(show => {
    if (show.vote_average < minRating){
      return false;
    }
    if (isFinishedOnly && !show.in_production){
      return false;
    }
    if (searchInput.length > 2){
      const search = `${show.name} ${show.overview} ${show.genres.map(genre => `${genre.name}`).join()}`.toLowerCase();
      const inputBits = searchInput.toLowerCase().split(/\s/).filter(bit => bit.length > 2);

      for (const inputBit of inputBits){
        if (!search.includes(inputBit)){
          return false;
        }
      }
    }

    return true;
  });

  const onSearchInputChange = (event) => {
    setSearchInput(event.target.value || "");
  };

  const clearSearchInput = () => {
    setSearchInput("");
  };

  const onMinRatingChange = (event) => {
    const minRatingInput = parseInt(event.target.value, 10);
    setMinRating(Math.max(0, Math.min(minRatingInput, 10)));
  };

  const onToggleIsFinishedOnly = () => {
    setIsFinishedOnly(!isFinishedOnly);
  }

  const onChangeSortField = (field) => {
    if (["name", "rating", "popularity"].includes(field)){
      if (sortField !== field){
        setSortField(field);
      }
    }
  };

  const onChangeSortDirection = (direction) => {
    if (["ascending", "descending"].includes(direction)) {
      if (sortDirection !== direction) {
        setSortDirection(direction);
      }
    }
  };

  let SortingIcon;
  switch (sortField){
    case "name":
      if (sortDirection === "ascending"){
        SortingIcon = FaSortAlphaUp;
      } else {
        SortingIcon = FaSortAlphaDown;
      }
      break;
    case "rating":
      if (sortDirection === "ascending"){
        SortingIcon = FaSortAmountUp;
      } else {
        SortingIcon = FaSortAmountDown;
      }
      break;
    case "popularity":
      if (sortDirection === "ascending"){
        SortingIcon = FaSortNumericUp;
      } else {
        SortingIcon = FaSortNumericDown;
      }
      break;
  }

  return (
    <>
      <div className="box">
        <label className="label">Search and Filter</label>
        <div className="level" style={{flexWrap: "wrap"}}>
          <div className="level-left">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field has-addons">
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="Start typing..." onChange={onSearchInputChange} value={searchInput} />
                    <span className="icon is-small is-left" style={{ color: "inherit" }}>
                      <FaSearch />
                    </span>
                  </div>
                  <div className="control">
                    <a className="button" onClick={clearSearchInput}>
                      <FaTimesCircle />
                    </a>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left">
                    <div className="select">
                      <select onChange={onMinRatingChange} value={minRating}>
                        <option value={0}>Any rating</option>
                        <option value={9}>9+ stars</option>
                        <option value={8}>8+ stars</option>
                        <option value={7}>7+ stars</option>
                        <option value={6}>6+ stars</option>
                        <option value={5}>5+ stars</option>
                      </select>
                    </div>
                    <div className="icon is-small is-left">
                      <FaStar style={{color:"orange"}} />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left">
                    <button className="button" onClick={onToggleIsFinishedOnly}>Is Finished Airing</button>
                    <span className="icon is-small is-left" style={{color:"inherit"}}>
                      {isFinishedOnly ? <FaCheckSquare /> : <FaSquare />}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control has-icons-left">
                    <div className="select">
                      <select onChange={onChangeSortField} value={sortField}>
                        <option value="name">Sort by Name</option>
                        <option value="rating">Sort by Rating</option>
                        <option value="popularity">Sort by Popularity</option>
                      </select>
                    </div>
                    <div className="icon is-small is-left">
                      <SortingIcon />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select onChange={onChangeSortDirection} value={sortDirection}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowList shows={results} />
    </>
  )
};