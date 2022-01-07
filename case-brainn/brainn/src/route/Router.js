import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DiaDeSortePage from "../page/diaDeSorte/DiaDeSortePage";
import LotofacilPage from "../page/lotofacil/LotofacilPage";
import LotomaniaPage from "../page/lotomania/LotomaniaPage";
import MegaSenaPage from "../page/megaSena/MegaSenaPage";
import QuinaPage from "../page/quina/QuinaPage";
import TimemaniaPage from "../page/timemania/TimemaniaPage";

const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"}>
                <MegaSenaPage />
            </Route>

            <Route exact path={"/quina"}>
                <QuinaPage />
            </Route>

            <Route exact path={"/lotofacil/:id"}>
                <LotofacilPage />
            </Route>

            <Route exact path={"/lotomania/:id"}>
                <LotomaniaPage />
            </Route>

            <Route exact path={"/timemania/:id"}>
                <TimemaniaPage />
            </Route>

            <Route exact path={"/diaDeSorte/:id"}>
                <DiaDeSortePage />
            </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default Router;