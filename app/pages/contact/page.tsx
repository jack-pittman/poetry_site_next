import Image from "next/image";
import Link from "next/link";

import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";

import '../../css/colors.css';
import '../../css/body.css';
import '../../css/lines.css';
import '../../css/fonts.css';


export default function Page() {
  return (
    <>
      <Header />
        <div className="body">
            <div className="canvas">
                <div className="accent-container">
                    <div className='contact-row'>
                        <div id="portrait-container">
                            <img src="/media/images/portrait.jpeg" id="portrait" alt="Portait of Caroline Pittman."/>
                        </div>
                        <div className="bio-text-container" id="contact">
                            <div className="contact-button">
                                <p>contact</p>
                            </div>
                            <p id="bodyText">
                                For readings, lectures, classroom visits, or requests for work, contact me at csppoetry@gmail.com
                                <br/>

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
