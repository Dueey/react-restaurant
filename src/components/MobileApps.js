import React from "react";
import styled from "styled-components";
import { Apple } from "@material-ui/icons";

function MobileApps() {
  return (
    <Container>
      <span>Yelp Mobile Apps</span>
      <Wrapper>
        <Wrap href='/mobile-apps-apple'>
          <p>
            iPhone, iPad, and <Apple className='apple-icon' /> Watch
          </p>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/pitch_ios.yji-960cce5c1917bdabc568aa735f2d866f.png'
            alt='apple'
          />
        </Wrap>
        <Wrap href='/mobile-apps-android'>
          <p>Android</p>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/pitch_android.yji-a91a4a087787b1aa9aa729e3de5743d7.png'
            alt='android'
          />
        </Wrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 40px;

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
  align-items: center;
  padding: 20px;
`;

const Wrap = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 30px;
  height: 195px;
  width: 400px;
  margin: 20px;
  text-decoration: none;

  p {
    color: #000;
    font-weight: bolder;

    .apple-icon {
      height: 19px;
      margin-bottom: -2px;
      margin-right: -5px;
    }
  }

  :hover {
    border: 1px solid #0073bb;
    box-shadow: 1px 5px 10px 1px lightgray;
    p {
      color: #0073bb;
    }
  }
`;

export default MobileApps;
