import Navbar from './Navbar';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
