import Image from "next/image";
import Link from "next/link";

import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

import './css/colors.css';
import './css/body.css';
import './css/lines.css';
import './css/fonts.css';


export default function Home() {
  return (
    <>
      <Header />
      <div className="pageBody">
        <div className="body">
          <div className="canvas">
            <div className="accent-container">
              <div id="portrait-container-hidden">
                  <div className="oval"></div>
              </div>

              <div className="quote-container">
                  <h1 id="line1">Is it dark morning?</h1>
                  <h1 id="line2">my children ask</h1>
                  <h1 id="line3">in the pre-dawns of winter.</h1>
                  <h1 id="line4">This time, I don’t know</h1>
                  <h1 id="line5">the answer. I hope so, my loves,</h1>
                  <h1 id="line6">I damn sure hope</h1>
                  <h1 id="line7">this sightless cold</h1>
                  <h1 id="line8">is the broad back of daylight</h1>
                  <h1 id="line9">turning around to hold us.</h1>
              </div>


              {/* ABOUT */}

              <div className="bio-text-container" id="about">
                  <div className="contact-button">
                      <p>about</p>
                  </div>
                  <p id="bodyText">
                      Caroline Spooner Pittman was born in Mississippi, grew up in Alabama, and now 
                      lives in downtown Atlanta with her husband, children, and 2 cats. 

                      Her poems and 
                      nonfiction have appeared in Bellevue Literary Review, Threepenny Review,  Beloit 
                      Poetry Journal, Baltimore Review, and Thrush Poetry Journal, among many others. 
                  </p>
                  <br/>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
