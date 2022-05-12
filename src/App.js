import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [character, setcharacter] = useState([]);

  const [info, setinfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setcharacter(json.results)
        setinfo(json.info)
      })
      .catch((error) => console.log(error));
  };

  const onPrevius = () => {
  fetchCharters(info.prev);
}

const onNext = () => {
  fetchCharters(info.next);
}

  useEffect(() => {
    fetchCharters(url);
  }, []);

  return (
    <>
      <Navbar brand="Rick and morthy app"></Navbar>
      <div className="container">
        <Button prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}></Button>
        <Card character={character} />
        <Button></Button>
      </div>
    </>
  );
}

export default App;
