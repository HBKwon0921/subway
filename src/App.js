import React from 'react';
import { BrowserRouter , Route, Switch, } from 'react-router-dom';
import Home from '../components/Home';
import SubwayArrivalData from '../components/SubwayArrivalData';
import SubwayMap from '../components/SubwayMap';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/arrivals" component={SubwayArrivalData} />
        <Route path="/map" component={SubwayMap} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

