import * as React from "react";
import Layout from "../components/Layout";
import "../scss/templates/landing.scss";
import music from "../img/music.png";
import azlogo from "../img/heart_light.png";
import Tilt from 'react-parallax-tilt';
import { Gallery } from "react-grid-gallery";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  images = [
    {
      src: "/img/covers/melle.jpg",
      caption: "Melle",
      alt: "Haley",
    },
    {
      src: "/img/covers/haley.jpg",
      caption: "Haley",
      alt: "Haley",
    },
    {
      src: "/img/covers/yaz.jpg",
      caption: "Yaz",
      alt: "Yaz",
    },
    {
      src: "/img/covers/jireh.jpg",
      caption: "Jireh",
      alt: "Jireh",
    },
    {
      src: "/img/covers/matrell.jpg",
      caption: "Matrell",
      alt: "Matrell",
    },
  ];

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
      <Layout hasNav={false} hasFooter={true}>
        <div className="tile-holder">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical is-4">
                  <Tilt className="tile is-child notification tile-1">
                    <article className="tile-1">
                      <p className="title">OUR MUSIC</p>
                      <img className="music-logo" src={music} alt="Our Music" />

                    </article>
                  </Tilt>
                  <Tilt className="tile is-child notification tile-2">
                    <article className="tile-2">
                      <p className="title">OUR MISSION</p>
                      <img src={azlogo} alt="Our Mission" />
                    </article>
                  </Tilt>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <Gallery enableImageSelection={false} images={this.images} />
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <Tilt className="tile is-child notification tile-4">
                  <article className="tile-4">
                    <div className="tile-4-wrapper">
                      <div className="tile-4-holder">
                        <p className="title">Wide tile</p>
                        <p className="subtitle">Aligned with the right tile</p>
                        <div className="content">
                        </div>
                      </div>
                      <div className="tile-4-holder">
                        <p className="title">Press</p>
                        <p className="subtitle">Aligned with the right tile</p>
                        <div className="content">
                        </div>
                      </div>
                      <div className="tile-4-holder">
                        <p className="title">Videos</p>
                        <p className="subtitle">Aligned with the right tile</p>
                        <div className="content">
                        </div>
                      </div>
                      <div className="tile-4-holder">
                        <p className="title">Merch</p>
                        <p className="subtitle">Aligned with the right tile</p>
                        <div className="content">
                        </div>
                      </div>
                    </div>
                  </article>
                </Tilt>
              </div>
            </div>
            <div className="tile is-parent">
              <Tilt className="tile is-child notification is-success tile-5">
                <article className="tile-5">
                  <div className="content">
                    <p className="title">UPCOMING EVENTS</p>
                    <p className="subtitle">Feb 24, 2023 @ 8:00PM PST</p>
                    <div className="content">
                      <p>Laborum esse commodo nisi id officia cillum magna dolor eiusmod fugiat culpa ullamco sit.</p>
                    </div>
                    <p className="subtitle">Feb 25, 2023 @ 8:00PM PST</p>
                    <div className="content">
                      <p>Laborum esse commodo nisi id officia cillum magna dolor eiusmod fugiat culpa ullamco sit.</p>
                    </div>
                    <p className="subtitle">Feb 26, 2023 @ 8:00PM PST</p>
                    <div className="content">
                      <p>Laborum esse commodo nisi id officia cillum magna dolor eiusmod fugiat culpa ullamco sit.</p>
                    </div>
                  </div>
                </article>
              </Tilt>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
