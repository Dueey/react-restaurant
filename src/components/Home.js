import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import SearchBar from "./SearchBar";
import Businesses from "./Businesses";
import MobileApps from "./MobileApps";
import Category from "./Category";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <SearchBar />
      <Businesses />
      <Category />
      <MobileApps />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

export default Home;
