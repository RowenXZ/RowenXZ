import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import routers from './router';
import './App.css';
function App() {

  return (
    <BrowserRouter>
      <CSSTransition
        classNames="fade"
        timeout={1000}
      >
        <Switch>
          {
            routers.map(router => {
              return (
                <Route
                  exact
                  key={router.path}
                  path={router.path}
                  component={router.component}
                ></Route>
              )
            })
          }
        </Switch>
      </CSSTransition>
    </BrowserRouter>
  );
}


export default App;
