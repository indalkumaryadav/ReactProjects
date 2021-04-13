import React, { useState, useEffect } from "react";
import "./row.css";
import Request from "../requests";
import { URL } from "../requests";
import axios from "axios";

const Row = ({ title, fetchUrl }) => {
  const url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      await axios
        .get(`${fetchUrl}`)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTrending();
  }, []);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((m) => {
          console.log(m);
          return (
            <img
              key={m.id}
              className="row_poster"
              src={`${url}${m.backdrop_path}`}
              alt={m.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
