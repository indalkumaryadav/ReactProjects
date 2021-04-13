import React, { useState, useEffect } from "react";
import "./header.css";
import Request from "../requests";
import { URL } from "../requests";
import axios from "axios";

const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      await axios
        .get(`${URL}${Request.fetchNetflixOriginals}`)
        .then((res) => {
          const random = Math.floor(Math.random() * res.data.results.length);

          setMovies(res.data.results[random]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTrending();
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        padding: 10,
        backgroundPosition: "center",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
        )`,
        height: 400,
      }}
    >
      <div
        className="banner_contains"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "350px",
          color: "white",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>{movies.name}</h1>
      </div>
    </div>
  );
};

export default Header;
