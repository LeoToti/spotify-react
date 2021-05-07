import logo from './logo.svg';
import './App.css';
import Home from "./component/Home"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Artist from "./component/Artist"

function App() {
  return (
   
    <Router>
        <Route component={Home} path="/" exact />
        <Route component={Artist} path="/artist" exact />

       
        </Router>
   
  )
}

export default App;
