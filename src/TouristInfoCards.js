import React from "react";
import CardInfo from "./CardInfo";

const TouristInfoCards = props => {
  return (
    <div className="cardSection">
      <CardInfo
        city="Glasgow"
        image="https://robcartwrightphotography.files.wordpress.com/2012/02/clyde-pipe-bridge-tidal-weir-from-glasgow-green-at-night-long-exposure.jpg"
        altText="Glasgow Night Life"
        link="https://peoplemakeglasgow.com/"
      />
      <CardInfo
        city="Manchester"
        image="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/Manchester-travel-B6PY6Y-xlarge.jpg"
        altText="Wheel of Manchester"
        link="https://www.visitmanchester.com/"
      />
      <CardInfo
        city="London"
        image="https://i.ytimg.com/vi/aEQK8jrLkg8/maxresdefault.jpg"
        altText="London at night"
        link="https://www.visitlondon.com/"
      />
    </div>
  );
};

export default TouristInfoCards;
