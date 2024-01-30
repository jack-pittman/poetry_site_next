"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import './menuButton.css'; // Make sure to import your CSS file
import '../header.css'; // Make sure to import your CSS file

function MenuButton() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="menu-container">
      <p id="menuIcon" onClick={toggleOverlay}>
        |||
      </p>

      {isOverlayVisible && (
        <div className="overlay" onClick={toggleOverlay}>
          {/* Use the Link component from 'next/link' for navigation */}
          <Link href="/" onClick={toggleOverlay}>
            <p>ABOUT</p>
          </Link>
          <Link href="/pages/publications" onClick={toggleOverlay}>
            <p>PUBLICATIONS</p>
          </Link>
          <Link href="/pages/contact" onClick={toggleOverlay}>
            <p>CONTACT</p>
          </Link>

        </div>
      )}
    </div>
  );
}

export default MenuButton;