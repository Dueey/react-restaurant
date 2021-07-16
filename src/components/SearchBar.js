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
        <span>Find</span>
        <input
          type='text'
          placeholder='plumbers, delivery, takeout...'
          className='item'
        />
        <hr />
        <span>Near</span>
        <input type='text' placeholder='Irvine, CA' className='location' />
        <SearchIcon />
      </SearchInput>
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
  margin-top: 10vh;

  img {
    width: 100%;
  }
`;

const SearchInput = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 5vw;
  margin-top: 25vh;
  border-radius: 4px;
  background-color: #d32323;

  hr {
    height: 20px;
  }

  span {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    color: gray;
    height: 27px;
  }

  input.item {
    height: 45px;
    width: 35vw;
    border: none;
    font-size: 20px;
  }

  input.location {
    height: 45px;
    width: 30vw;
    border: none;
    font-size: 20px;
  }
`;

const SearchIcon = styled(Search)`
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  background-color: #d32323;
`;

export default SearchBar;
