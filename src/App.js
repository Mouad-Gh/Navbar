import Navbar from './navbar/index';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
