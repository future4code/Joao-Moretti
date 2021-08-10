import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PokeCard() {
    const [pokemon, setPokemon] = useState({})

    const  pegaPokemon = pokeName => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                // guarda as infos do pokemon no estado
                setPokemon(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };


    useEffect((props) => {
        pegaPokemon(props.pokemon);

    }, [])

    useEffect((prevProps, props) => {

        if (prevProps.pokemon !== props.pokemon) {
            pegaPokemon(props.pokemon);
        }
    }, [])


    const pokemons = pokemon;
    return (
        <div>
            <p>{pokemons.name}</p>
            <p>{pokemons.weight} Kg</p>
            {pokemons.types && <p>{pokemons.types[0].type.name}</p>}
            {pokemons.sprites && (
                <img src={pokemons.sprites.front_default} alt={pokemons.name} />
            )}
        </div>
    );
}

