import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalState } from '../global/GlobalState';
import { DetailsPage } from '../pages/DetailsPage/DetailsPage';
import { ErrorPage } from '../pages/errorPage/ErrorPage';
import { FeedPage } from '../pages/FeedPage/FeedPage';
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'

export const Router = () => {

        return (
            <BrowserRouter>
            <GlobalState>
            
            <Switch>
            <Route exact path={'/login'}>
                <LoginPage/>
            </Route>

            <Route exact path={'/register'}>
                <RegisterPage/>
            </Route>

            <Route exact path={'/details/:id'}>
                <DetailsPage/>
            </Route>     
            
            <Route exact path={'/'}>
                <FeedPage/>
            </Route>


            <Route>
                <ErrorPage/>
            </Route>
            </Switch>
            
            
            </GlobalState>
            </BrowserRouter>
        )
}  