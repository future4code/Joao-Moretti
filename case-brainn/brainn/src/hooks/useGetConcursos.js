import axios from "axios";
import React, { useEffect, useState } from "react";

  
export const useGetConcursos = (url, initialState) => {
    const [concurso, setConcurso] = useState(initialState)

    useEffect(() => {
        axios.get(url)
        .then((response) => {
          setConcurso(response.data.numeros)
          
        })
        .catch((error) => {
          console.log(error)
        })
    }, [url])

    return concurso
    
  }