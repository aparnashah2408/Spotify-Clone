// client id for spotify-clone app : 333f4b2aaeac4c0e8f39f9a8238fc87c


import './App.css';
import Login from './Components/Login';
import React, {useEffect, useState} from 'react';
import { getTokenFromUrl } from './Components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';
import { useDataLayerValue } from './Components/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const[token, setToken] = useState();

  //Run code based on a given condition-> useEffect
  useEffect( () => {
    const hash = getTokenFromUrl();

    //we dont want access token to be visible in url for security reasons so
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then( (user) => {
        console.log(user);
      });
    }
    console.log("I have a token -> ",_token);
  },[]);


  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
