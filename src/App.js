import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { 
  Home, List, Modal, people,
  SmallPersonListItem, UserComponent,
  Form,
  Onboarding
} from './components'
import { RegularList } from "./components/RegularList";
import { HOC } from "./components/sections/HOC";

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
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/onboarding">Onboarding</Link>
          </li>
          <li>
            <Link to="/hoc">High Order Components</Link>
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
          <Route path="/user">
            <UserComponent />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/onboarding">
            <Onboarding />
          </Route>
          <Route path="/hoc">
            <HOC />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;