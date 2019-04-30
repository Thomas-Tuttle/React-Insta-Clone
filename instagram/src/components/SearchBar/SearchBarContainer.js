import React from 'react';
import Logo from '../../assets/iglogo.png';
import Camera from '../../assets/camera-logo.svg';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="navContainer">
      <div className="camera">
      <img alt="camera" src={Camera} className="logoImages" />
      </div>
      <div className="logo">
      <img alt="instagram logo" src={Logo} className="logoImages" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="navBtnContainer">
        <div className="navBtn">
          <i className="far fa-compass" />
        </div>
        <div className="navBtn">
          <i className="far fa-heart" />
        </div>
        <div className="navBtn">
          <i className="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;