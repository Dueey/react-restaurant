import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import SearchBar from "./SearchBar";
import Businesses from "./Businesses";
import MobileApps from "./MobileApps";
import Category from "./Category";
import City from "./City";
import Recent from "./Recent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  selectUserLoginDetails,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import ReviewAwaits from "./ReviewAwaits";

function Home() {
  const userName = useSelector(selectUserName);

  return (
    <Container>
      <ImgSlider />
      <SearchBar />
      {userName ? <ReviewAwaits /> : null}
      <Businesses />
      <City />
      <Recent />
      <Category />
      <MobileApps />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

export default Home;
