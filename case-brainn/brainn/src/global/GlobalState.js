import React from "react";
import { BASE_URL } from "../constants/url";
import useRequest from "../hooks/useRequest";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {


    const loterias = useRequest(`${BASE_URL}/loterias`, [])
    const loteriasConcursos = useRequest(`${BASE_URL}/loterias-concursos`, [])

    const data = {loterias, loteriasConcursos}

  return (
    <GlobalStateContext.Provider value={data}>
        {props.children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalState;