import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo>
        <img src='/images/food_delivery_icon_2x.png' alt='food_icon' />
        <p>You can always order in</p>
      </Logo>
      <Wrapper>
        <a href='/delivery'>Delivery</a>
        <a href='/pizza_delivery'>Pizza Delivery</a>
        <a href='/chinese_delivery'>Chinese Food Delivery</a>
      </Wrapper>
    </Nav>
  );
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 36px;
  /* letter-spacing: 16px; */
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  margin-top: 5px;
  max-height: 70px;
  font-size: 10;
  justify-content: space-between;
  display: flex;

  img {
    height: 40px;
    padding-right: 10px;
  }

  p {
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  justify-content: space-between;
  margin-top: 20px;

  a {
    font-size: 12px;
    padding: 15px;
    text-decoration: none;
    color: #0073bb;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Header;
