import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './SearchPage';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  return (
    
    <div className="App">
        <Router>

          <Switch>

            <Route path="/search">
              <SearchPage />
              

              </Route>
              <Route path="/">
              <Home />

              </Route>

            </Switch>


          </Router>


      

      {/* {Home page} */}
      

      {/* {search result page} */}
    </div>
  );
}

export default App;
