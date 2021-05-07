import logo from './logo.svg';
import './App.css';
import Home from "./component/Home"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Artist from "./component/Artist"
import Album from "./component/Album"
import ReactDOM from 'react-dom'


function App() {
  return (
   
    <Router>
        <Route render={(routerProps) => <Home title="Home" {...routerProps} />} path="/" exact/>
        <Route component={Artist} path="/artist"  />
        <Route component={Album} path="/album"  />

       
        </Router>
   
  )
}

export default App;
