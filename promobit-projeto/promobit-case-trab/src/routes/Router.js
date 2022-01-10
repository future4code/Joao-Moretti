import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MovieDetails from "../pages/movieDetails/movieDetails"
import MovieList from "../pages/moviesList/moviesList"


const Router = () => {
    return< BrowserRouter>
        <Switch>

            <Route exact path={"/"}>
                <MovieList />
            </Route>

            <Route exact path={"/details/:id"}>
                <MovieDetails />
            </Route>

        </Switch>
    </BrowserRouter>

}

export default Router