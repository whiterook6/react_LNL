import React, { useState } from "react";
import { FaCheckSquare, FaSearch, FaSortAlphaDown, FaSquare, FaStar, FaTimesCircle } from "react-icons/fa";
import { ShowList } from "./ShowList";

/**
 * A filter, search bar, and sorter all in one. Given a list of shows, this will render a subsection
 * of them, along with a control bar at the top.
 * 
 * Your homework: implement sorting with two state variables (sortField and sortDirection). You will
 * need some callbacks and a sorting function to run after filtering. You can also choose different
 * icons to render in the select box; see https://react-icons.netlify.com/#/icons/fa for a full
 * list.
 */
export const ShowFilter = (props) => {

  // State for this component: what to search for, some filters, and ordering
  const [searchInput, setSearchInput] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [isFinishedOnly, setIsFinishedOnly] = useState(false);  

  // apply current sorting and filtering rules.
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
  };

  const sortIcon = <FaSortAlphaDown />;

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
                    <span className="icon is-small is-left">
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
                    <span className="icon is-small is-left">
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
                      <select>
                        <option value="name">Sort by Name</option>
                        <option value="rating">Sort by Rating</option>
                        <option value="popularity">Sort by Popularity</option>
                      </select>
                    </div>
                    <div className="icon is-small is-left">
                      {sortIcon}
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select>
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
  );
};
