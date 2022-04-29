import { useState, useEffect } from "react";

import Card from "./Card";

export default function App() {
    const [pokemons, setPokemons] = useState([1]);
    const [input, setInput] = useState("");
    


    const handleItem = () => {
        console.log(pokemons);
        const randomId = Math.floor(Math.random() * 800);
        // quando estiver 2 pokemos vai remover o ultimo
        // const limit =
        const newArray = [randomId, ...pokemons];
        if (pokemons.length === 2) {
            newArray.pop();
        }
        setPokemons(newArray);
    };
    const handleChange = (e) => {
        if (e.key === "Enter") {
            setInput(e.target.value);
            e.target.value = "";
        }
    };

    return (
        <div className="App">
            <h2>Start editing to see some magic happen!</h2>
            <h1>Hello CodeSandbox</h1>
            <div className="entryValue">
                <input
                    placeholder="such a name"
                    className="input"
                    onKeyPress={handleChange}
                ></input>
                <button className="btn" onClick={handleItem}>
                    catch a pokemon
                </button>
            </div>
            <div className="item">
                {input && <Card name={input} />}

                {pokemons.map((item) => (
                    <Card key={item} id={item} />
                ))}
            </div>
        </div>
    );
}
