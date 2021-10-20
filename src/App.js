import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home, List, Modal, people, SmallPersonListItem  } from './components'
import { RegularList } from "./components/RegularList";

const App = () => {
return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/modal">
            <Modal>
              <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} /> 
            </Modal>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;