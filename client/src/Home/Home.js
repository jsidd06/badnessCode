import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Image1 from "../Images/technology-1-1.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Card inverse>
        <CardImg alt="Card image cap" src={Image1} />
        <CardImgOverlay className="text-center">
          <CardTitle tag="h5">Welcome</CardTitle>
          <Link to="/" className="btn btn-success centered ">
            Read Now
          </Link>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default Home;
