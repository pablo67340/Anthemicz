import * as React from "react";
import Layout from "../components/Layout";
import "../scss/templates/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import melle from "../img/artists/mel.png";
import haley from "../img/artists/haley.png";
import jireh from "../img/artists/jireh.png";
import nauz from "../img/artists/nauz.png";
import yaz from "../img/artists/yaz.png";
import wave from "../img/wavy_bg_desktop.png";
import collage from "../img/artsy_collage.png";

import heart from "../img/icons/heart.png";
import hearts from "../img/icons/hearts.png";
import connection from "../img/icons/connection.png";
import friends from "../img/icons/friends.png";

import brand from "../img/brand_board.png";

import Slider from "react-slick";
import { Link } from "gatsby";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };


  render() {
    return (
      <Layout hasNav={true} hasFooter={false}>
        <section className="masthead">
          <div className="gradient-background"></div>
        </section>
        <section className="meet-the-team">
          <div className="meet-holder">
            <h2 className="meet-title">MEET THE ARTISTS</h2>
            <div className="slider-holder">
              <Slider {...this.settings}>
                <div>
                  <img src={melle} alt="Melle Baby Music" />
                </div>
                <div>
                  <img src={haley} alt="Haley" />
                </div>
                <div>
                  <img src={jireh} alt="Jireh" />
                </div>
                <div>
                  <img src={nauz} alt="Nauz" />
                </div>
                <div>
                  <img src={yaz} alt="Yaz" />
                </div>
                <div>
                  <img src={haley} alt="Haley" />
                </div>
              </Slider>
            </div>
            <Link className="meet-button" to="/contact/examples">
              meet all of us
            </Link>
          </div>
          <div className="meet-wave"><img src={wave} alt="Wave Background" /></div>
        </section>

        <section className="we-are">
          <div className="we-are-holder">
            <div className="columns">
              <div className="column is-half-desktop is-full-mobile">
                <img src={collage} alt="Artist Preview" />
              </div>
              <div className="column is-half-desktop is-full-mobile">
                <div className="we-are-text-holder">
                  <p className="we-grey">we are</p>
                  <p className="we-blue">An<span className="we-red">the</span><span className="we-gold">micZ</span></p>
                  <p className="we-para">AnthemicZ are a diverse group of solo artists uniting to become the world's first metaverse supergroup empowering Generation Z with Dialog Songs, a new genre of music and edutainment experience.</p>
                  <br />
                  <p className="we-para">Dialog Songs help teens and young adults have better relationships, improved mental health and access to more success and joy in life.</p>
                  <br />
                  <p className="we-para">Using the power of Dialog Lessons and Dialog Songs, the AnthemicZ are creating a world where personal freedom, universal equality, total inclusion, celebration of diversity, safety for all and empathy for others is the value system that reigns supreme.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="statements">
          <div className="statements-holder">
            <h2 className="statements-header">SONG STATEMENTS</h2>
            <div className="columns is-multiline is-mobile">
              <div className="column is-one-quarter-desktop is-half-mobile statements-red statements-text">
                <img src={heart} alt="Heart" />
                <h2>Romantic</h2>
                <p>Romantic, is an upbeat pop smash about the first stage of love, the Romantic Stage. Romantic sounds like your favorite romcom turned into song with the awareness of how to get the happy ending everyone is looking for.</p>
              </div>
              <div className="column is-one-quarter-desktop is-half-mobile statements-gold statements-text">
              <img src={connection} alt="Connection" />
                <h2>Connection</h2>
                <p>Connection, is a powerful pop song about the importance of connecting with people you care about. Connection sounds like a mix of modern r&b and pop but with a hopeful message to leave you feeling grateful for those around you.</p>
              </div>
              <div className="column is-one-quarter-desktop is-half-mobile statements-blue statements-text">
              <img src={friends} alt="Friends" />
                <h2>Friends</h2>
                <p>That's What Friends Are For, is an upbreat friendship anthem about appreciating true friendship. That's What Friends Are For sounds like a catchy feel good song with a welcoming melody that makes you want to surround yourself with the people you care for.</p>
              </div>
              <div className="column is-one-quarter-desktop is-half-mobile statements-grey statements-text">
              <img src={hearts} alt="Hearts" />
                <h2>Unconditional Love</h2>
                <p>Unconditional Love, is a soulful D-pop hit about the third and final stage of love, Real Love. Unconditional Love sounds like sweet pop ballad but with a compelling message that will make you want to give and receive unconditional love.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="merch">
          <div className="merch-holder">
            <div className="columns is-multiline">
              <div className="column is-half-desktop is-full-mobile merch-col merch-text">
                <h2>FOLLOW ANTHEMICZ</h2>
                <p>Keep up with all new and exciting new music, events and so much more.</p>
                <br />
                <a href="#" className="merch-pink">@anthemicz</a>
                <a href="#" className="merch-blue">twitter.com/anthemicz</a>
                <a href="#" className="merch-gold">youtube.com/anthemicz</a>
                <a href="#" className="merch-red">tiktok.com/anthemicz</a>
              </div>

              <div className="column is-half-desktop is-full-mobile merch-col">
                <img src={brand} alt="Brand Board" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
