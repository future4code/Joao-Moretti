import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";


export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
            <Home />
        </Route>



      </Switch>
    </BrowserRouter>
  );
}

export default Router