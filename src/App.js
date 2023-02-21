import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

//page component imports
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>

        <Route path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
