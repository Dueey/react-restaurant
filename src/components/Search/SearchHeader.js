import React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";

function SearchHeader() {
  return (
    <Nav>
      <NavMenu>
        <a href='/'>
          <img src='/images/yelp_logo.png' alt='logo' />
        </a>
        <SearchInput className='search' />
        <span>For Businesses</span>
        <span>Write a Review</span>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  height: 130px;
  border-bottom: 1px solid #eeeeef;
`;

const NavMenu = styled.div`
  display: flex;

  a {
    padding: 30px;
    padding-left: 30px;

    img {
      width: 90px;
    }
  }

  .search {
    margin-top: -10px;
  }

  span {
  }
`;

export default SearchHeader;
