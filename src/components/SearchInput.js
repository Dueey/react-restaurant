import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";

function SearchInput() {
  return (
    <SearchBar>
      <span className='span-item'>Find</span>
      <input
        type='text'
        placeholder='plumbers, delivery, takeout...'
        className='item'
      />
      <span className='span-location'>Near</span>
      <input type='text' placeholder='Irvine, CA' className='location' />
      <Search className='search-icon' />
    </SearchBar>
  );
}

const SearchBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4vh;
  border-radius: 4px;
  background-color: white;
  left: 12vw;
  box-shadow: 0px 0px 15px 0px gray;

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

  .search-icon {
    border-radius: 0 4px 4px 0;
    padding: 11.5px 22px;
    color: white;
    background-color: #d32323;
    cursor: pointer;
    font-size: 30px;
    padding: 9px 15px;

    :hover {
      background-color: #b30308;
      transition: 0.5s;
    }
  }
`;

// const SearchIcon = styled(Search)`
//   border-radius: 0 4px 4px 0;
//   padding: 11.5px 22px;
//   color: white;
//   background-color: #d32323;
//   cursor: pointer;

//   :hover {
//     background-color: #b30308;
//     transition: 0.5s;
//   }
// `;

export default SearchInput;
