import React from "react";
import styled from "styled-components";
import { Search, Whatshot, Star } from "@material-ui/icons";

function City() {
  return (
    <Container>
      <span>Yelp Irvine</span>
      <Nav>
        <a href='/san-francisco'>San Francisco</a>
        <a href='/new-york'>New York</a>
        <a href='/san-jose'>San Jose</a>
        <a href='los-angeles'>Los Angeles</a>
        <a href='chicago'>Chicago</a>
        <a href='palo-alto'>Palo Alto</a>
        <a href='more-cities'>
          <Search className='search-icon' />
          More Cities
        </a>
      </Nav>
      <br />
      <p>Hot & New Businesses</p>
      <Wrapper>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/bphoto/GwMEmJiNVZwo_AA01Qt9GA/l.jpg'
            alt=''
          />
          <a href='/kokonut'>Oishi Shabu Shabu</a>
          <p>
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            51 reviews
          </p>
          <p>Japanese</p>
          <p>Irvine, CA</p>
          <p className='opened'>
            <Whatshot className='fire' />
            Opened 4 weeks ago
          </p>
        </Wrap>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/bphoto/FDb1yEQqeDubSvDdgP9LrA/l.jpg'
            alt=''
          />
          <a href='/kokonut'>
            Mario's Neighborhood Butcher Shop & Delicatessen
          </a>
          <p>
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            51 reviews
          </p>
          <p>Japanese</p>
          <p>Irvine, CA</p>
          <p className='opened'>
            <Whatshot className='fire' />
            Opened 4 weeks ago
          </p>
        </Wrap>
        <Wrap>
          <img
            src='https://s3-media0.fl.yelpcdn.com/bphoto/ycbWtSqk5CXgDWnewo3Q9w/l.jpg'
            alt=''
          />
          <a href='/kokonut'>Kokonut Dessert Bar</a>
          <p>
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            <Star className='star' />
            51 reviews
          </p>
          <p>Japanese</p>
          <p>Irvine, CA</p>
          <p className='opened'>
            <Whatshot className='fire' />
            Opened 4 weeks ago
          </p>
        </Wrap>
      </Wrapper>
      <span>
        <a href='/more-businesses' className='more-businesses'>
          See more hot and new businesses
        </a>
      </span>
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

  p {
    display: flex;
    color: #d32323;
    font-size: 17px;
    font-weight: bolder;
    justify-content: center;
    padding: 10px;
  }

  a.more-businesses {
    display: flex;
    justify-content: center;
    padding: 15px;
    text-decoration: none;
    color: #0073bb;
    font-size: 14px;
    font-weight: lighter;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  width: 1000px;
  margin: auto;

  a {
    text-decoration: none;
    color: #000;
    padding: 20px 13px 6px 13px;
    font-size: 14px;
    white-space: nowrap;
    border-bottom: 3px solid transparent;

    .search-icon {
      height: 18px;
      margin-bottom: -5px;
    }
  }

  a:hover {
    border-bottom: 3px solid #d32323;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  width: 300px;
  height: 350px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  overflow-x: hidden;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #0073bb;
    font-size: 16px;
    font-weight: bolder;
    white-space: nowrap;
    padding: 15px 10px 0px 12px;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    color: #000;
    font-size: 14px;
    font-weight: lighter;
    padding: 0 8px;
    margin: 5px;
  }

  .opened {
    color: #f15c00;
  }

  .fire {
    height: 20px;
    margin-top: -2px;
    margin-left: -5px;
  }

  .star {
    font-size: 16px;
    color: #fff;
    background-color: #f15c4f;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-right: 5px;
    padding: 0.5px;
    margin-top: -1px;
    margin-left: -2px;
  }
`;

export default City;
