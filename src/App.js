
import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";
import { formatSeasons } from "./utils/formatSeason";
import { getData } from './utils/getData';
import Episodes from "./components/Episodes";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];


  useEffect(() => {
    let mounted = true;
    const fetchShow = async () => {
      const data = await getData();
      if(mounted) {
         setShow(data);
         setSeasons(formatSeasons(data._embedded.episodes));
      }
    };
    fetchShow();
    return () => { mounted = false; }
  }, []);

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes data-testid="episodes" episodes={episodes} />
    </div>
  );
}