import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "./firebase";
import {
  selectUserName,
  selectUserPhoto,
  selectUserLoginDetails,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import {
  Search,
  Restaurant,
  House,
  Motorcycle,
  Bathtub,
  Favorite,
  ArrowDropDown,
  ArrowDropUp,
  ChatBubble,
  Notifications,
  Person,
  People,
  Settings,
  Star,
} from "@material-ui/icons";

function SearchBar(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [profileHidden, setProfileHidden] = useState(false);
  const [signOutHidden, setSignOutHidden] = useState(true);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleProfileClick = () => {};

  const handleAvatarClick = () => {
    setSignOutHidden(false);
  };

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
        {!userName ? (
          <NoUser>
            <Login onClick={handleAuth}>
              <span>Log In</span>
            </Login>
            <Signup>
              <span>Sign Up</span>
            </Signup>
          </NoUser>
        ) : (
          <YesUser>
            <Icon>
              <ChatBubble />
            </Icon>
            <Icon>
              <Notifications />
            </Icon>
            <Avatar onClick={() => setSignOutHidden(!signOutHidden)}>
              <ProfileIcon src={userPhoto} className='profile' />
              <ArrowDropDown className='arrow' />
            </Avatar>
            {!signOutHidden ? (
              <DropDown>
                <Info>
                  <Profile src={userPhoto} />
                  <UserInfo>
                    <span>{userName}</span>
                    <p>
                      <People className='people icons' />0{" "}
                      <Star className='star icons' /> 0
                    </p>
                  </UserInfo>
                </Info>
                <Options>
                  <span>
                    <Person className='person icons' />
                    About Me
                  </span>
                  <span>
                    <People className='people icons' />
                    Find Friends
                  </span>
                  <span>
                    <Settings className='settings icons' />
                    Account Settings
                  </span>
                </Options>
                <Logout>
                  <span>Log Out</span>
                </Logout>
              </DropDown>
            ) : null}
          </YesUser>
        )}
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
  margin-bottom: -320px;
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
  white-space: nowrap;

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

const NoUser = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12vw;
  /* right: 5vw; */
`;

const Login = styled.div`
  padding-right: 12px;
  white-space: nowrap;

  span {
    padding: 10px 15px;
    color: #fff;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    .button {
      border: 4px solid white;
    }
  }

  span:hover {
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

const YesUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12vw;
  margin-top: -1px;
`;

const Icon = styled.div`
  color: white;
  padding: 5px 7px 5px 7px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-right: 5px;

  :hover {
    background-color: gray;
  }
`;

const DropDown = styled.div`
  z-index: 2;
  position: absolute;
  top: 45px;
  height: 212px;
  width: 200px;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 1px 5px 10px 1px gray;
`;

const Avatar = styled.div`
  padding: 0px 10px;
  cursor: pointer;
  margin-bottom: -6px;

  .arrow {
    color: white;
    background-color: gray;
    padding: 9px 0;
    border-radius: 0 4px 4px 0;
  }

  :hover {
    .arrow {
      background-color: #666;
      transition: 0.5s;
    }
  }
`;

const ProfileIcon = styled.img`
  height: 42px;
  /* border: 1px solid gray; */
  border-radius: 4px 0 0 4px;
`;

const Info = styled.div`
  display: flex;
  padding: 2px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e6e6e6;
`;

const Profile = styled.img`
  height: 60px;
  border-radius: 4px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding: 1px 10px;
    color: #0073bb;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 12px;

    .icons {
      font-size: 18px;
      margin: 5px 5px -2px 8px;
    }

    .people {
      color: #f15c00;
      margin-bottom: -5px;
    }

    .star {
      font-size: 13px;
      padding: 1px;
      background-color: #f15c00;
      color: white;
      border-radius: 2px;
      margin-bottom: -3px;
    }
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e6e6e6;

  span {
    color: #0073bb;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  .icons {
    font-size: 25px;
    color: #666;
    padding: 6px 7px 5px 2px;
    margin-bottom: -11px;
  }
`;

const Logout = styled.div`
  display: flex;
  padding-top: 12px;
  padding-left: 2px;

  span {
    color: #0073bb;
    font-weight: lighter;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
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
  white-space: nowrap;

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

  /* @media (max-width: 1000px) {
    left: 8vw;
  } */
`;

export default SearchBar;
