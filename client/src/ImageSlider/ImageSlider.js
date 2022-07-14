import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import Image1 from "../Images/featured-image.png";
import Image2 from "../Images/Fintech-1024x540.jpg";
import Image3 from "../Images/Tech-Trends-artwork.jpg";

function ImageSlider() {
  return (
    <div>
      <UncontrolledCarousel
        items={[
          {
            altText: "Slide 1",
            caption: "Slide 1",
            key: 1,
            src: "https://picsum.photos/id/123/1200/600",
          },
          {
            altText: "Slide 2",
            caption: "Slide 2",
            key: 2,
            src: "https://picsum.photos/id/456/1200/600",
          },
          {
            altText: "Slide 3",
            caption: "Slide 3",
            key: 3,
            src: "https://picsum.photos/id/678/1200/600",
          },
        ]}
      />
    </div>
  );
}

export default ImageSlider;
