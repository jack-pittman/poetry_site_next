import React from 'react';
import Link from 'next/link';

import './header.css';
import './menu.css';

import '../../css/fonts.css';

import MenuButton from './menuButton/menuButton.js';


const Header = ( imageSource ) => {
  return (
    <div className="pageHeader">
      <div id="myFuckingSiteHeader">
          <div className="image-container">
              <img src="/media/logos/cspLogo7.png" id="simpleSiteLogo" alt="site logo"/>
              <p id="mobileHeaderText">CAROLINE PITTMAN</p>
          </div>

          <div className="menu-container">

            <div className="menu">
              <Link href="/"><p>ABOUT</p></Link>
              <Link href="/pages/publications"><p>PUBLICATIONS</p></Link>
              <Link href="/pages/contact"><p>CONTACT</p></Link>
            </div>

            <MenuButton />

            {/* <p id="menuIcon">|||</p> */}
          </div>
      </div>
    </div>
  );
};

export default Header;