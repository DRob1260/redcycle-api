import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navigator } from './Navigator/Navigator';
import { Home } from './Home/Home';
import { PostCreator } from './PostCreator/PostCreator';


export const App = () => {
  return (
    <div className="App" data-testid={'App'}>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route path={'/redcycle/post-creator'}>
            <PostCreator />
          </Route>
          <Route path={'/redcycle'}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
