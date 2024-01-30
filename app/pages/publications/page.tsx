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

                    <div className="bio-text-container" id="pubs">
                        <div className="contact-button">
                            <p>publications</p>
                        </div>
                        <div className="pubsTextWrapper">
                            <div id="bodyText">
                                <p id="pubType">POETRY</p>
                                <p id="worksLine1"><strong>“Wiregrass,”</strong> <em>Beloit Poetry Journal</em></p>
                                <p id="worksLine2"><strong>“The Strand at Lough Beg,”</strong> <em><a href="https://baltimorereview.org/fall_2021/contributor/caroline-pittman#The%20Strand%20at%20Lough%20Beg">Baltimore Review*</a></em></p>
                                <p id="worksLine3"><strong>“Dark Morning,”</strong> <em><a href="https://www.threepennyreview.com/dark-morning/">The Threepenny Review*</a></em></p>
                                <p id="worksLine4"><strong>“Readmission to the Children’s Hospital,”</strong> <em><a href="https://www.thrushpoetryjournal.com/january-2019-caroline-pittman.html">Thrush Poetry Journal*</a></em></p>
                                <p id="worksLine5"><strong>“Hangman”</strong> and <strong>“Cyclone,”</strong> <em><a href="https://www.poetrynw.org/caroline-pittman-two-poems/">Poetry Northwest*</a></em></p>
                                <p id="worksLine6"><strong>“Upper Room”</strong> and <strong>“This is Not Who We Are,”</strong> <em><a href="https://scalawagmagazine.org/author/carolinapitman/">Scalawag*</a></em></p>
                                <p id="worksLine7"><strong>“Undertow,”</strong> <em>Southern Poetry Review</em></p>
                                <p id="worksLine8"><strong>“Early Morning,”</strong> <em><a href="https://witness.blackmountaininstitute.org/issues-4-2/vol-xxix-no-2-summer-2016/early-morning/">Witness*</a></em></p>
                                <p id="worksLine9"><strong>“Not Everything is a Metaphor”</strong> and <strong>“Burden,”</strong> <em>The American Poetry Review</em></p>
                                <p id="worksLine10"><strong>“I Don’t Want to Leave the Red Dust of the World,”</strong> <em>Crab Orchard Review</em></p>
                                <br/>
                                <p id="pubType">ESSAYS</p>
                                <p id="worksLine11"><strong>“Table Talk,”</strong> <em>The Threepenny Review</em></p>
                                <p id="footnote">*click to visit<strong></strong></p>
                                <br/>

                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="spacer-bar"></div>

                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}
