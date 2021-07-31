import React from "react";
import styled from "styled-components";
import { Star, Close } from "@material-ui/icons";

function ReviewAwaits() {
  return (
    <Container>
      <span>Your Next Review Awaits</span>
      <Wrapper>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/bphoto/I0BkC0ZsjrVeLvINfO7wuQ/ls.jpg'
            alt=''
          />
          <Info>
            <Close className='close' />
            <span>KoKo Chicken & BBQ</span>
            <p>Help the community decide</p>
            <Stars>
              <Star className='star star1' />
              <Star className='star star2' />
              <Star className='star star3' />
              <Star className='star star4' />
              <Star className='star star5' />
            </Stars>
          </Info>
        </Wrap>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/bphoto/ETzNYO8k3l9JJiwGBaSZ9Q/ls.jpg'
            alt=''
          />
          <Info>
            <Close className='close' />
            <span>85'C Bakery Cafe</span>
            <p>Help the community decide</p>
            <Stars className='stars'>
              <Star className='star' />
              <Star className='star' />
              <Star className='star' />
              <Star className='star' />
              <Star className='star' />
            </Stars>
          </Info>
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
`;

const Wrap = styled.div`
  margin: 20px;
  width: 468px;
  height: 153px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  .close {
    position: relative;
    align-self: flex-end;
    right: -100px;
    top: 10px;
    color: gray;
    cursor: pointer;
  }

  span {
    font-size: 16px;
    color: #0073bb;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 14px;
  }
`;

const Stars = styled.div`
  .star {
    font-size: 24px;
    color: #fff;
    border: 2px solid #cccccc;
    border-radius: 4px;
    margin: 0 2px;
    background-color: #cccccc;

    :hover {
      border: 2px solid #f15c4f;
      background-color: #f15c4f;
    }
  }
`;

export default ReviewAwaits;
