import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/Spotify';
import  Player from './components/Player'
import SpotifyWebApi from 'spotify-web-api-js';
//Datalayer is the stateProvider
import { useDataLayerValue } from './DataLayer';



const spotify = new SpotifyWebApi(); //for interaction with spotify api

function App() {

  const [{ user, token, playlists, discover_weekly }, dispatch ] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ''; //clean url
    let _token = hash.access_token;

    if (_token) {

      spotify.setAccessToken(_token);
      
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

    
      spotify.getMe().then( user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then( playlist => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlist
        })
      })

      spotify.getPlaylist('37i9dQZEVXcDtuY084mFnq?gtm=1').then( response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
        console.log('this is what we get from discover weekly', response)
      })

    }

  }, []);

  console.log( 'user is >>', user);
  console.log('i have a token >>', token);
  console.log('playlist >>', playlists);
  console.log('discover weekly >>', discover_weekly);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
