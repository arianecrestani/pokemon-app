import { useState } from "react";
import Card from "./Card";


export default function App() {
    const [pokemons, setPokemons] = useState([1]);

    const handleItem = () => {
        console.log(pokemons);
        const randomId = Math.floor(Math.random() * 800);
        // quando estiver 2 pokemos vai remover o ultimo
        // const limit =
        const newArray = [randomId, ...pokemons];
        if (pokemons.length === 6) {
            newArray.pop();
        }
        setPokemons(newArray);
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <button onClick={handleItem}>catch a pokemon</button>
            <div className="item">
            {pokemons.map((item) => (
                <Card key={item} id={item} />
            ))}

            <h2>Start editing to see some magic happen!</h2>
            </div>
        </div>
    );
}
