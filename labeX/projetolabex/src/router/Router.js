import React from "react"
import HomePage from "../pages/HomePage/HomePage"
import { BrowserRouter, Switch , Route } from "react-router-dom"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"



function Router() {
  return (
      <BrowserRouter>
      <Switch>


      <Route exact path={"/"}>
        <HomePage />
      </Route>

      <Route exact path={"/trips/list"}>
        <ListTripsPage />
      </Route>

      <Route exact path={"/trips/application"}>
        <ApplicationFormPage />
      </Route>

      <Route exact path={"/login"}>
        <LoginPage />
      </Route>

      <Route exact path={"/adminPage"}>
        <AdminHomePage />
      </Route>

      <Route exact path={"/admin/trips/create"}>
        <CreateTripPage />
      </Route>      

      </Switch>      
      </BrowserRouter>
  )
}

export default Router