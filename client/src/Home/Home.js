import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Image1 from "../Images/technology-1-1.jpg";
import { Link } from "react-router-dom";
import CardScreen from "../Cards/Cards";
import TableScreen from "../TableScreen/TableScreen";
import ListScreen from "../ListScreen/ListScreen";
import ListGroupScreen from "../ListScreen/ListGroupScreen";
import ImageSlider from "../ImageSlider/ImageSlider";
import According from "../According/According";
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
      <According />
      <CardScreen />
      <TableScreen />
      <ListScreen />
      <ListGroupScreen />
      <ImageSlider />
    </>
  );
}

export default Home;
