import React from "react";
import styled from "styled-components";
import { Person, EmojiEmotions, ThumbUp, ThumbDown } from "@material-ui/icons";
import Activity from "./RecentActivity";

function Recent() {
  return (
    <Container>
      <span>Recent Activity</span>
      <Wrapper>
        <Activity />
        <Activity />
        <Activity />
      </Wrapper>
      <Wrapper>
        <Activity />
        <Activity />
        <Activity />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #fff;

  span {
    display: flex;
    color: #d32323;
    font-size: 20px;
    font-weight: bolder;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export default Recent;
