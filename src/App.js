import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//page component imports
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
//link components used instead of anchor tags, where "to" is essentially the href
//This currently is not working and im not sure why
//need to potentiall google the NavLink to prop
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
