import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  height: 400px;
`;

const Wrap = styled.div`
  padding-top: 70px;
  padding-left: 150px;
  /* display: grid; */
  /* grid-template-columns: repeat(4, minmax(0, 1fr)); */
  justify-content: center;
  background-color: #f5f5f5;

  div {
    padding: 0px 70px 70px 10px;
    color: red;

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
