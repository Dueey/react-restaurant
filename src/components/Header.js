import React, { useState } from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";

function Header() {
  const [isHidden, setIsHidden] = useState(true);

  function handleHide() {
    setIsHidden(false);
  }

  return (
    <div>
      {isHidden ? (
        <Nav>
          <Logo>
            <img src='/images/food_delivery_icon_2x.png' alt='food_icon' />
            <p>You can always order in</p>
          </Logo>
          <Wrapper>
            <a href='/delivery'>Delivery</a>
            <a href='/pizza_delivery'>Pizza Delivery</a>
            <a href='/chinese_delivery'>Chinese Food Delivery</a>
            <Close className='close-icon' onClick={handleHide} />
          </Wrapper>
        </Nav>
      ) : null}
    </div>
  );
}

const Nav = styled.div`
  position: relative;
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
  white-space: nowrap;
`;

const Logo = styled.a`
  padding: 0;
  font-size: 10;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding-left: 8vw;

  img {
    height: 35px;
    padding-right: 10px;
    margin-top: -5px;
  }

  p {
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8vw;

  a {
    font-size: 12px;
    padding: 15px;
    text-decoration: none;
    color: #0073bb;
  }

  a:hover {
    text-decoration: underline;
  }

  .close-icon {
    height: 20px;
    color: gray;
    cursor: pointer;
  }

  .close-icon:hover {
    color: black;
  }
`;

export default Header;
