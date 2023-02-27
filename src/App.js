import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

//page component imports
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
//link components used instead of anchor tags, where "to" is essentially the href

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
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
