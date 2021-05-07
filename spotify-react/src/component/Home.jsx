import React from "react";
import { Card, Row } from "react-bootstrap";
import { Col, Form, Button, FormControl, Spinner } from "react-bootstrap";
import logo from "../logo/Spotify_Logo.png"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Shuffle from "../playerbuttons/Shuffle.png"
import Previous from "../playerbuttons/Previous.png"
import Play from  "../playerbuttons/Play.png"
import Next from "../playerbuttons/Next.png"
import Repeat from "../playerbuttons/Repeat.png"





class Home extends React.Component {

  state = {
    query: "queen",
    queryError: "",
    selected: [],
    isLoading: false,
  };

  fectchData = async function () {
    this.setState({ isLoading: true });
    let endpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?";
    let query = this.state.query;
    let endpointQuery = "q=" + "%7B"+query+"%7D";
    try {
      let response = await fetch(endpoint + endpointQuery);

      if (response.ok) {
        console.log("Response is ok!!");
        let data = await response.json();
        console.log(data);
        if (data.data) {
          this.setState({ queryError: "" });
          this.setState({ selected: data.data });
          console.log(this.state.selected);
          this.setState({ isLoading: false });
        } else {
          this.setState({ queryError: data.Error });
          this.setState({ isLoading: false });
          console.log(this.state.queryError);
        }
      } else {
        alert("Cant fetch the data!");
      }
    } catch (error) {
      alert(error);
    }

  }

  componentDidMount = async function () {
    this.fectchData()
    
  };

  componentDidUpdate = async (previousProps, previousState) => {
    

    if (previousState.query !== this.state.query) {
       
        this.fectchData()
    }
}




  load = this.props.loading


render() {
  let title = this.props.title
  return (
   
   
     
   
    <>
    {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  {/* Bootstrap CSS */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossOrigin="anonymous" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>Home</title>
  <div className="container-fluid">
    <div className="row">
      {/*SIDEBAR VERTICAL*/}
      <div className="col-2">
        <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
          <div className="nav-container">
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="Spotify_Logo" width={131} height={40} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <a className="nav-item nav-link" href="index.html"><i className="fas fa-home fa-lg" />&nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-item nav-link" href="#"><i className="fas fa-book-open fa-lg" />&nbsp; Your
                      Library</a>
                  </li>
                  <li>
                    <div className="input-group mt-3">
                      <input type="text" className="form-control mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                      <div className="input-group-append" style={{marginBottom: '4%'}}>
                        <button className="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" onclick="search()">
                          GO
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">Sign Up</button>
            <button className="btn login-btn" type="button">Login</button>
            <a href="#">Cookie Policy</a> |
            <a href="#"> Privacy</a>
          </div>
        </nav>
      </div>
      {/*END SIDEBAR VERTICAL*/}
      {/*MAIN*/}
      <div className="col-12 mainPage">
        <div className="row justify-content-center">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a id="Rock" href="#">ROCK</a>
            <a id="Pop" href="#">POP</a>
            <a id="Hip Hop" href="#">HIP HOP</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <div id="searchResults" style={{display: 'none'}}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <div id="results">
              <h2 className="pl-3 text-white" />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                <div>
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*END MAIN*/}
  {/*NAVBAR FLEX-BOTTOM*/}
  <div className="player container-fluid fixed-bottom bg-container pt-1">
    <div className="row flex-nowrap justify-content-between playBar py-3">
      <div className="col-3">
        <div className="playerArtistInfo d-flex">
          <img />
          <div className="d-flex flex-column pl-2">
            <h6 />
            <p />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="playerControls w-50 d-flex justify-content-between">
          <a href="#">
            <img src={Shuffle} alt="shuffle" />
          </a>
          <a href="#">
            <img src={Previous} alt="previous" />
          </a>
          <a id="playBtn" href="#" onclick="handlePlay()">
            <img src={Play} alt="play" />
          </a>
          <a href="#">
            <img src={Next} alt="next" />
          </a>
          <a href="#">
            <img src={Repeat} alt="repeat" />
          </a>
        </div>
        <div className="progressContainer d-flex align-items-center">
          <span className="currentTime">00:00</span>
          <div className="progress w-100">
            <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
              <audio />
            </div>
          </div>
          <span className="duration">00:00</span>
        </div>
      </div>
      <div className="col-auto mr-3">
        <div className="playerVolume">
          <i className="fa fa-volume-up" onclick />
          <input type="range" defaultValue={50} onchange />
        </div>
      </div>
    </div>
  </div>
  {/*END NAVBAR BOTTOM*/}
</>


    )
    
}
}

export default Home;