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






class Album extends React.Component {

    state = {
        query: "tt0250415",
        queryError: "",
        selected: {},
        isLoading: false,
      };
    
      fectchData = async function () {
        this.setState({ isLoading: true });
        let endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
        let query = this.state.query;
        let idFromTheURLBar = this.props.match.params.id;
        console.log(idFromTheURLBar)
        
    
        console.log(query)
        this.setState({ query: idFromTheURLBar });
        let endpointQuery = + query;
        console.log(endpointQuery)
        try {
          let response = await fetch(endpoint + endpointQuery);
    
          if (response.ok) {
            console.log("Response is ok!!");
            let data = await response.json();
            console.log(data);
            if (data) {
              this.setState({ queryError: "" });
              console.log(data)
              this.setState({ selected: data });
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
      };
    
      componentDidMount = async function () {
        this.fectchData();
      };
    
      componentDidUpdate = async (previousProps, previousState) => {
        if (previousState.query !== this.state.query) {
          this.fectchData();
        }
      };





render() {
    let title = this.props.id
    return (
        
             
               
             
        <>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  {/* Bootstrap CSS */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossOrigin="anonymous" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>Album</title>
  <div className="container-fluid">
    <div className="row">
      {/*SIDEBAR VERTICAL*/}
      <div className="col-2">
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
          <div className="nav-container">
            <a className="navbar-brand" href="index.html">
              <img src="logo/Spotify_Logo.png" alt="Spotify_Logo" width={131} height={40} />
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
        <div className="row justify-content-center mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a id="Rock" href="#">ROCK</a>
            <a id="Pop" href="#">POP</a>
            <a id="Hip Hop" href="#">HIP HOP</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div id="img-container" className="col-md-3 pt-5 text-center">
            <img src="data:image/jpeg;base64,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" className="card-img img-fluid" alt="Album" />
            <div className="mt-4 text-center">
              <p className="album-title">... All this time</p>
            </div>
            <div className="text-center">
              <p className="artist-name">STING</p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div id="trackList" className="col-md-10 mb-5">
                <div id="err" />
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
      <div className="col-auto">
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
            <img src="playerbuttons/Shuffle.png" alt="shuffle" />
          </a>
          <a href="#">
            <img src="playerbuttons/Previous.png" alt="previous" />
          </a>
          <a href="#" onclick>
            <img src="playerbuttons/Play.png" alt="play" />
          </a>
          <a href="#">
            <img src="playerbuttons/Next.png" alt="next" />
          </a>
          <a href="#">
            <img src="playerbuttons/Repeat.png" alt="repeat" />
          </a>
        </div>
        <div className="progressContainer d-flex align-items-center">
          <span className="currentTime">00:00</span>
          <div className="progress w-100" onclick>
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
          <input type="range" defaultValue={100} onchange />
        </div>
      </div>
    </div>
  </div>
  {/*END NAVBAR BOTTOM*/}
</>

      
          
              )
              
          }
          }
          
          export default Album;
     
     
       
    
  
  