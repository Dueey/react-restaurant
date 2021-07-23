import React from "react";
import styled from "styled-components";

function Category() {
  return (
    <Container>
      <span>Browse Businesses by Category</span>
      <Wrapper>
        <Wrap href='/restaurants'>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
            alt='restaurants'
          />
          <p>Restaurants</p>
        </Wrap>
        <Wrap href='/shopping'>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_shopping@2x.yji-559f23226d9f9f651812ddc5d6e3d1b2.png'
            alt='shopping'
          />
          <p>Shopping</p>
        </Wrap>
        <Wrap href='/nightlife'>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_nightlife@2x.yji-925cd32ac4c934d465c664f140c5b629.png'
            alt='nightlife'
          />
          <p>Nightlife</p>
        </Wrap>
        <Wrap href='/active-life'>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_active_life@2x.yji-2df9fcd6a68eb739e68a026778dd7a3f.png'
            alt='active-life'
          />
          <p>Active Life</p>
        </Wrap>
      </Wrapper>
      <Wrapper>
        <Wrap href='/beauty-spas'>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_beauty@2x.yji-3cfb4e602ac139443228f090ec71b84f.png'
            alt='beauty-spas'
          />
          <p>Beauty & Spas</p>
        </Wrap>
        <Wrap href='/automotive'>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_automotive@2x.yji-c73bd70791375ec60256243055745f63.png'
            alt='automotive'
          />
          <p>Automotive</p>
        </Wrap>
        <Wrap href='/home-services'>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_home_services@2x.yji-20723ad0e5ee302de563935be68c6638.png'
            alt='home-services'
          />
          <p>Home Services</p>
        </Wrap>
        <Wrap href='/categories'>
          <img
            src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_more_categories@2x.yji-e7be9a50bf8cf4a2eea9f7d7e2b5f194.png'
            alt='more'
          />
          <p>More Categories</p>
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
  background-color: #f5f5f5;

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
  /* padding: 20px 50px 0 0; */
`;

const Wrap = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 30px;
  margin: 15px;
  text-decoration: none;
  background-color: #fff;
  width: 155px;
  height: 75px;

  p {
    color: #000;
    font-weight: bolder;
    font-size: 14px;
    margin-bottom: -1px;
  }

  img {
    height: 70px;
    margin-bottom: -8px;
  }

  :hover {
    border: 1px solid #0073bb;
    box-shadow: 1px 5px 10px 1px lightgray;
    p {
      color: #0073bb;
    }
  }
`;

export default Category;
