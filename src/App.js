import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Paginacion from "./components/Paginacion";

function App() {

    const [characters, setCharacters] = useState([]);

    const [info, setinfo] = useState({});

    const initialUrl = "https://rickandmortyapi.com/api/character";

    const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setinfo(data.info);
            })
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchCharacters(initialUrl);
    }, [])
    

    return (
        <>
            <Navbar brand="Rick and Morty App" />

            <div className="container mt-5">
                <Paginacion prev={info.prev} next={info.next} />
                <Characters characters={characters} />
                <Paginacion />
            </div>
        </>
    );
}

export default App;