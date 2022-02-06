import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import poeple from "../reviews";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {poeple.map((e) => {
          return (
            <div>
              <img alt="user" className="mb-4" src="/img/user.png" />
              <div className="myCarousel">
                <h3>{e.name}</h3>
                <p>
                  De bloemen die ik had besteld bij FastFlower werden netjes
                  volgens de afspraak geleverd.
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    );
  }
}
