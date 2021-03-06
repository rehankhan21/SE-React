import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ReduxCom from './ReduxClass';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Translate from './Translate'
import Nav from './Nav';
import AnimeList from './AnimeList';
// import MaterialNav from './MaterialNav';
import TopAnime from './TopAnime'
import SavedWords from './SavedWords';

function App() {
  return (
    <Router>
      <div className="App">
        {/*NavBar component for all the componeents */}
        <Nav />
        {/* <MaterialNav /> */}
        <Switch>
          {/* <Route path="/" exact component={ReduxCom} /> */}
          {/* <Redux /> */}
          
          <Route path="/" exact component={Translate} />
          <Route path="/animelist" component={AnimeList} />
          <Route path="/topanime" component={TopAnime}/>
          <Route path="/savedwords" component={SavedWords}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
