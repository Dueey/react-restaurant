import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import SearchBar from "./SearchBar";
import Businesses from "./Businesses";
import MobileApps from "./MobileApps";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <SearchBar />
      <Businesses />
      <MobileApps />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

export default Home;
