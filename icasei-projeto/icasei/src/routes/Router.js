import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/details/:videoId"}>
                    <DetailsPage />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Router;