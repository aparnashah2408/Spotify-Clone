import React from 'react'
import "./Player.css"; 
import Sidebar from "./Sidebar"
import "./Sidebar.css";
import Body from './Body';
import Footer from './Footer';

function Player( ) {
  return (
    <div className='player'>
      <div className='player_body'>
        <Sidebar />
        <Body />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Player
