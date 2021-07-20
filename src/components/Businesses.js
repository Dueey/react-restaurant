import React from "react";
import styled from "styled-components";

function Businesses() {
  return (
    <Container>
      <span>Find the Best Businesses in Town</span>
      <Wrapper>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/gyms@2x.yji-3fb0a4f3e62f2e048ff6b94dcc909a4b.jpg'
            alt='gym'
          />
          <p>Gyms</p>
        </Wrap>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/dryclean@2x.yji-ff5b642fbbdf949c26c3ca19b6dfb4bb.jpg'
            alt='dry-cleaning'
          />
          <p>Dry Cleaning</p>
        </Wrap>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/locksmiths@2x.yji-3f05ca8eefd68641e705ee8ce1148105.jpg'
            alt='locksmith'
          />
          <p>Locksmith</p>
        </Wrap>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/mobilephonerepair@2x.yji-8d16cabd40520ed32733ee590e6bc5f4.jpg'
            alt='phone-repair'
          />
          <p>Phone Repair</p>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  top: -320px;
  padding: 40px;
  background-color: #f5f5f5;

  span {
    position: relative;
    color: #d32323;
    font-size: 20px;
    font-weight: bolder;
    left: 42%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 0 0 4px 4px;
  background-color: #fff;

  img {
    height: 174px;
    width: auto;
    border-radius: 4px 4px 0 0;
  }

  p {
    font-weight: bolder;
    font-size: 15px;
  }

  :hover {
    box-shadow: 1px 5px 10px 1px lightgray;
    p {
      color: #0073bb;
    }
  }
`;

export default Businesses;
