import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";

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
        <img src='/images/yelp_logo.png' alt='logo' />
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
          <span>Plumbers</span>
        </a>
        <a href='/restaurants'>
          <span>Restaurants</span>
        </a>
        <a href='/home-services'>
          <span>Home Services</span>
        </a>
        <a href='/delivery'>
          <span>Delivery</span>
        </a>
        <a href='/black-owned'>
          <span>Black Owned</span>
        </a>
      </Services>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 100px;
  font-size: 14px;
  font-weight: bolder;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavMenu = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 5vw;

  a {
    display: flex;
    align-items: center;
    padding-right: 30px;
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const User = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 5vw;
`;

const Login = styled.div`
  a {
    padding: 20px;
    color: #fff;
    text-decoration: none;

    .button {
      border: 4px solid white;
    }
  }
`;

const Signup = styled.button`
  position: relative;
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
  justify-self: center;
  align-items: center;
  width: 150px;
  position: fixed;
  left: 45vw;
  margin-top: 12vh;
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
  margin-top: 25vh;
  border-radius: 4px;
  background-color: white;
  left: 10vw;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    color: gray;
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
`;

const Services = styled.div`
  position: fixed;
  margin-top: 32vh;
  justify-content: center;
  align-items: center;
  left: 20vw;
  a {
    color: white;
    text-decoration: none;
    padding: 0 20px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default SearchBar;
