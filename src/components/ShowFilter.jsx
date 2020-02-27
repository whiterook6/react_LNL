import React, { useState } from "react";
import { FaCheckSquare, FaSearch, FaSquare, FaStar, FaTimesCircle } from "react-icons/fa";
import { ShowList } from "./ShowList";

export const ShowFilter = (props) => {

  const [searchInput, setSearchInput] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [isFinishedOnly, setIsFinishedOnly] = useState(false);

  const results = props.shows.filter(show => {
    if (show.vote_average < minRating){
      return false;
    }
    if (isFinishedOnly && !show.in_production){
      return false;
    }
    if (searchInput.length > 2){
      const search = `${show.name} ${show.overview}`.toLowerCase();
      if (!search.includes(searchInput.toLowerCase())){
        return false;
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

  return (
    <>
      <div className="box">
        <label className="label">Search and Filter</label>
        <div className="level">
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
        </div>
      </div>
      <ShowList shows={results} />
    </>
  )
};