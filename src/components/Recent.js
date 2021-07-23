import React from "react";
import styled from "styled-components";
import { Person, EmojiEmotions, ThumbUp, ThumbDown } from "@material-ui/icons";

function Recent() {
  return (
    <Container>
      <span>Recent Activity</span>
      <Wrapper>
        <Wrap>
          <User>
            <Person className='person' />
            <div>
              <p className='name'>Guest User 1</p>
              <p className='activity'>Wrote a review</p>
            </div>
          </User>
          <Restaurant>
            <img
              src='https://s3-media0.fl.yelpcdn.com/bphoto/A2uVoSZnL5BUHdTFI21w1Q/l.jpg'
              alt=''
            />
            <p>Buffalo Wild Wings</p>
            <div className='divider'> </div>
          </Restaurant>
          <Review>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className='divider'> </div>
          </Review>
          <Reaction>
            <EmojiEmotions />
            <ThumbUp />
            <ThumbDown />
          </Reaction>
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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  width: 300px;
  height: 500px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  overflow-x: hidden;
`;

const User = styled.div`
  display: flex;
  padding: 15px;
  padding-bottom: 10px;

  .person {
    border: 2px solid #e6e6e6;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    color: red;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
      padding: 1px 10px;
    }

    p.name {
      color: #0073bb;
      font-size: 16px;
      font-weight: bolder;
      white-space: nowrap;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const Restaurant = styled.div`
  img {
    height: 120px;
    width: 100%;
    object-fit: cover;
  }

  p {
    color: #0073bb;
    font-size: 16px;
    font-weight: bolder;
    white-space: nowrap;
    cursor: pointer;
    padding: 0 15px 0px 15px;

    :hover {
      text-decoration: underline;
    }
  }

  .divider {
    position: relative;
    left: 13px;
    width: 270px;
    border-bottom: 1px solid #e6e6e6;
  }
`;

const Review = styled.div`
  p {
    padding: 0 10px 0 15px;
    font-size: 16px;
  }

  .divider {
    position: relative;
    left: 13px;
    width: 270px;
    border-bottom: 1px solid #e6e6e6;
  }
`;

const Reaction = styled.div`
  display: flex;
  padding: 10px;
  color: gray;
`;

export default Recent;
