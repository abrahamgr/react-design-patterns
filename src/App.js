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
  Onboarding,
  Hooks,
  Recursive
} from './components'
import { RegularList } from "./components/RegularList";
import { HOC } from "./components/sections/HOC";

import styled from "styled-components";

const LI = styled.li`
  display: inline-block;
  margin-right: 5px;
`;

const App = () => {
return (
    <Router>
      <div>
        <ul>
          <LI>
            <Link to="/">Home</Link>
          </LI>
          <LI>
            <Link to="/list">List</Link>
          </LI>
          <LI>
            <Link to="/modal">Modal</Link>
          </LI>
          <LI>
            <Link to="/user">User</Link>
          </LI>
          <LI>
            <Link to="/form">Form</Link>
          </LI>
          <LI>
            <Link to="/onboarding">Onboarding</Link>
          </LI>
          <LI>
            <Link to="/hoc">High Order Components</Link>
          </LI>
          <LI>
            <Link to="/hooks">Hooks</Link>
          </LI>
          <LI>
            <Link to="/recursive">Recursive</Link>
          </LI>
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
          <Route path="/hooks">
            <Hooks />
          </Route>
          <Route path="/recursive">
            <Recursive />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;