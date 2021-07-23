import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Wrap>
          <div>
            <span>About</span>
            <p>About Yelp</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Investor Relations</p>
            <p>Trust & Safety</p>
            <p>Content Guidelines</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Ad Choices</p>
          </div>
        </Wrap>
        <Wrap>
          <div>
            <span>Discover</span>
            <p>Yelp Project Cost Guid</p>
            <p>Collections</p>
            <p>Talk</p>
            <p>Events</p>
            <p>The Local Yelp</p>
            <p>Yelp Blog</p>
            <p>Support</p>
            <p>Yelp Mobile</p>
            <p>Developers</p>
            <p>RSS</p>
          </div>
        </Wrap>
        <Wrap>
          <div>
            <span>Yelp for Business</span>
            <p>Claim your Business Page</p>
            <p>Advertise on Yelp</p>
            <p>Yelp for Restaurant Owners</p>
            <p>Table Management</p>
            <p>Business Success Stories</p>
            <p>Business Support</p>
            <p>Yelp Blog for Business</p>
          </div>
        </Wrap>
        <Wrap>
          <div>
            <span>Languages</span>
            <p>English</p>
          </div>
          <div>
            <span>Countries</span>
            <p>United States</p>
          </div>
        </Wrap>
      </Wrapper>

      <img
        src='https://s3-media0.fl.yelpcdn.com/assets/public/footer_cityscape.yji-573fa19c843556eac5a998fc6d1f80f8.png'
        alt=''
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  position: relative;
  padding-left: 200px;

  img {
    width: 800px;
    margin-top: -80px;
    padding-left: 360px;
    padding-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  padding-top: 70px;
  justify-content: center;
  width: 300px;

  div {
    padding: 0px 70px 70px 10px;
    color: #d32323;

    span {
      font-weight: 700;
      font-size: 15px;
      margin-bottom: 30px;
    }
    p {
      font-size: 14px;
      color: #0581ad;
      padding: 0px;
      cursor: pointer;
    }

    p:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
