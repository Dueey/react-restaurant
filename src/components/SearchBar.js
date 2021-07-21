import React from "react";
import styled from "styled-components";
import {
  Search,
  Restaurant,
  House,
  Motorcycle,
  Bathtub,
  Favorite,
  ArrowDropDown,
} from "@material-ui/icons";

function SearchBar() {
  return (
    <Container>
      <Nav>
        <NavMenu>
          <a href='/write-a-review'>
            <span>Write a Review</span>
          </a>
          <a href='/write-a-review'>
            <span>Events</span>
          </a>
          <a href='/write-a-review'>
            <span>Talk</span>
          </a>
        </NavMenu>
        <User>
          <Login>
            <a href='/login'>
              <span>Log In</span>
            </a>
          </Login>
          <Signup>
            <span>Sign Up</span>
          </Signup>
        </User>
      </Nav>
      <Logo>
        <a href='/'>
          <img src='/images/yelp_logo.png' alt='logo' />
        </a>
      </Logo>
      <SearchInput>
        <span className='span-item'>Find</span>
        <input
          type='text'
          placeholder='plumbers, delivery, takeout...'
          className='item'
        />
        <span className='span-location'>Near</span>
        <input type='text' placeholder='Irvine, CA' className='location' />
        <SearchIcon />
      </SearchInput>
      <Services>
        <a href='/plumbers'>
          <Bathtub className='services-icon' />
          <span>Plumbers</span>
        </a>
        <a href='/restaurants'>
          <Restaurant className='services-icon' />
          <span>Restaurants</span>
        </a>
        <a href='/home-services'>
          <House className='services-icon' />
          <span>Home Services</span>
          <ArrowDropDown className='drop-down-icon' />
        </a>
        <a href='/delivery'>
          <Motorcycle className='services-icon' />
          <span>Delivery</span>
        </a>
        <a href='/black-owned'>
          <Favorite className='services-icon' />
          <span>Black Owned</span>
          <ArrowDropDown className='drop-down-icon' />
        </a>
      </Services>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: -560px;
  font-size: 14px;
  font-weight: bolder;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavMenu = styled.div`
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12vw;

  a {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: #fff;
    text-decoration: none;
    border-bottom: 2px solid transparent;
  }

  a:hover {
    border-bottom: 2px solid #fff;
  }
`;

const User = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12vw;
  /* right: 5vw; */
`;

const Login = styled.div`
  padding-right: 12px;

  a {
    padding: 10px 15px;
    color: #fff;
    text-decoration: none;
    border-bottom: 2px solid transparent;

    .button {
      border: 4px solid white;
    }
  }

  a:hover {
    border-bottom: 2px solid #fff;
  }
`;

const Signup = styled.button`
  /* position: relative; */
  font-size: 14px;
  font-weight: bold;
  height: 35px;
  width: 100px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.5s;
  }
`;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  position: relative;
  left: 45vw;
  margin-top: 8vh;
  cursor: pointer;

  img {
    width: 100%;
    filter: brightness(1.5);
  }
`;

const SearchInput = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  border-radius: 4px;
  background-color: white;
  left: 12vw;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    color: #000;
    height: 27px;
  }

  span.span-location {
    border-left: 1px solid lightgrey;
    height: 10px;
  }

  input {
    height: 45px;
    border: none;
    font-size: 20px;
    :focus {
      outline: none;
    }
  }

  input.item {
    width: 34vw;
  }

  input.location {
    width: 28vw;
  }
`;

const SearchIcon = styled(Search)`
  border-radius: 0 4px 4px 0;
  padding: 11.5px 22px;
  color: white;
  background-color: #d32323;
  cursor: pointer;

  :hover {
    background-color: #b30308;
    transition: 0.5s;
  }
`;

const Services = styled.div`
  display: flex;
  margin-top: 12vh;
  justify-content: center;
  align-items: center;

  .services-icon {
    height: 20px;
    padding-top: 2px;
    margin-bottom: -4px;
  }

  .drop-down-icon {
    height: 20px;
    margin-bottom: -5px;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0 20px;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    left: 8vw;
  }
`;

export default SearchBar;
