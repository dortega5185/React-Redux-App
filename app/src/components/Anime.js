import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchAnime } from "../store/actions/animeActions";

const Anime = (props) => {
  useEffect((props) => {
    // call an action creator
    fetchAnime();
  }, []);

  const [anime, setAnime] = useState("");

  const handleChanges = (e) => {
    setAnime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchAnime(anime);
    setAnime("");
  };
  //   console.log("render image", props.image);
  return (
    <div>
      <h1>MAL - Top Anime</h1>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {/* {props.quote && <h3>"{props.quote}"</h3>} */}

      {<img src={props.image} alt="Top Anime" />}
      {props.error && <p className="error">{props.error}</p>}
      <form>
        <label htmlFor="anime">
          <input
            type="text"
            placeholder="Search the anime here"
            value={anime}
            onChange={handleChanges}
          />
          <button onClick={(props.fetchAnime, handleSubmit)}>
            Fetch a anime of your choice
          </button>
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    image: state.anime.image,
    isFetching: state.anime.isFetching,
    error: state.anime.error,
  };
};

export default connect(mapStateToProps, { fetchAnime })(Anime);
