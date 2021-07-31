import React from "react";
import styled from "styled-components";
import {
  Person,
  EmojiEmotions,
  ThumbUp,
  ThumbDown,
  Star,
} from "@material-ui/icons";

function Activity() {
  const color = ["red", "green"];
  var random_color = color[Math.floor(Math.random() * color.length)];

  var random_number = Math.floor(Math.random() * 5);

  return (
    <Wrap>
      <User>
        <Person className='person' style={{ color: random_color }} />
        <div>
          <p className='name'>Guest User</p>
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
        <Star className='star' />
        <Star className='star' />
        <Star className='star' />
        <Star className='star' />
        <Star className='star' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className='divider'> </div>
      </Review>
      <Reaction>
        <ThumbUp className='emote up' />
        <ThumbDown className='emote down' />
        <EmojiEmotions className='emote happy-face' />
      </Reaction>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  width: 300px;
  height: 465px;
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

  .star {
    font-size: 16px;
    color: #fff;
    background-color: #f15c4f;
    border: 1px solid transparent;
    border-radius: 4px;
    position: relative;
    left: 10px;
    margin-bottom: -12px;
    margin-right: 1px;
    margin-left: 2px;
  }
`;

const Reaction = styled.div`
  display: flex;
  padding: 10px;
  color: #e6e6e6;

  .emote {
    cursor: pointer;
    padding: 0 5px;
  }

  .up {
    :hover {
      color: #0073bb;
    }
  }

  .down {
    :hover {
      color: #d32323;
    }
  }

  .happy-face {
    display: flex;
    position: relative;
    right: -175px;
    align-items: center;
    justify-content: flex-start;

    :hover {
      color: #ffeb3b;
    }
  }
`;

export default Activity;
