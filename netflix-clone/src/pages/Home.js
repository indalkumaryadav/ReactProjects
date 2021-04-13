import React, { useEffect } from "react";
import axios from "axios";
import Row from "../components/Row";
import Request from "../requests";
import { URL } from "../requests";
import Header from "../components/Header";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />

      <Row
        title="Trending Movies"
        fetchUrl={`${URL}${Request.fetchTrending}`}
      />
      <Row
        title="Netflix Originals"
        fetchUrl={`${URL}${Request.fetchNetflixOriginals}`}
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={`${URL}${Request.fetchTopRated}`}
      />
      <Row
        title="Action Movies"
        fetchUrl={`${URL}${Request.fetchActionMovie}`}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={`${URL}${Request.fetchComedyMovie}`}
      />
      <Row
        title="Horror Movies"
        fetchUrl={`${URL}${Request.fetchHorrorMovie}`}
      />
      <Row
        title="Romance Movies"
        fetchUrl={`${URL}${Request.fetchRomanceMovie}`}
      />
      <Row
        title="Documantries "
        fetchUrl={`${URL}${Request.fetchDocumantries}`}
      />
    </div>
  );
};

export default Home;
