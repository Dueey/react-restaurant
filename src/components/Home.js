import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <SearchBar />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 60px;
`;

export default Home;
