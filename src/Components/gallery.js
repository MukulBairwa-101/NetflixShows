import React, { useState } from "react";
import data from "../assets/data";
import { Stars5, Stars4, Stars3, Stars2, Stars1 } from "../assets/stars";
import {BiSearch} from "react-icons/bi"

const Gallery = () => {
  const [shows, setShows] = useState(data);
  const [searchInput, setSearchInput] = useState("");
  const filterShows = (genreItem) => {
    // console.log(genreItem);
    let filteredData = [];
    if (genreItem !== "All") {
      filteredData = data.filter((show) => {
        return show.genre === genreItem;
      });
      setShows(filteredData);
    } else setShows(data);
  };

  const handleSearch = () => {
    let filteredData = [];
    filteredData = data.filter((show) => show.name.includes(searchInput));
    setShows(filteredData);
  };

  return (
    <>
      <div className="search">
        <input
          placeholder="Dark , Peaky Blinders , gray man ..."
          type="search"
          name="searchinput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
        />
        <BiSearch onClick={handleSearch} className="search-button" />
      </div>
      <div className="gallery_container">
        <div className="tabs_container ">
          <button onClick={() => filterShows("All")} className="tab pointer">
            All
          </button>
          <button onClick={() => filterShows("Action")} className="tab pointer">
            Action
          </button>
          <button
            onClick={() => filterShows("Animation")}
            className="tab pointer"
          >
            Animation
          </button>
          <button onClick={() => filterShows("Crime")} className="tab pointer">
            Crime
          </button>
          <button onClick={() => filterShows("Kids")} className="tab pointer">
            Kids
          </button>
          <button onClick={() => filterShows("Horror")} className="tab pointer">
            Horror
          </button>
          <button onClick={() => filterShows("Sci-Fi")} className="tab pointer">
            Sci-Fi
          </button>
        </div>
        <div>
          <div className="shows_container">
            {shows.map((item) => {
              const { id, cover, name, link, ratings, genre } = item;

              return (
                <div className="shows_wrapper" key={id}>
                  <div className="show_image-wrapper ">
                    <img
                      src={cover}
                      alt={name}
                      className="card_image pointer"
                    />
                  </div>
                  <div className="show_text_wrapper">
                    <h3>{name}</h3>
                    <span>{genre}</span>
                    <p>
                      {ratings}
                      {ratings === 1 ? (
                        <Stars1 />
                      ) : ratings === 2 ? (
                        <Stars2 />
                      ) : ratings === 3 ? (
                        <Stars3 />
                      ) : ratings === 4 ? (
                        <Stars4 />
                      ) : ratings === 5 ? (
                        <Stars5 />
                      ) : (
                        ""
                      )}
                    </p>
                    <a href={link} className="btn btn-watch pointer">
                      Watch Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
