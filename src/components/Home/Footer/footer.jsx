import React from "react";
import "./footer.css";
import instaSvg from "./instagram-logo.svg";
import fbSvg from './facebook-logo.svg';
import twitterSvg from './twitter-logo.svg';
import linkedinSvg from './linkedin-logo.svg';


export default function footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer>
      <div className="SocialsHeading">Socials</div>
        <div className="Socials">
          <a href='...'><img src={instaSvg} alt="insta logo"></img></a>
          <a href="..."><img src={fbSvg} alt="fb logo"></img></a>
          <a href="..."><img src={twitterSvg} alt="twitter logo"></img></a>
          <a href="..."><img src={linkedinSvg} alt="linkedin logo"></img></a>
        </div>
        <div className="copyright"><p>Copyright © {year}</p></div>
      </footer>
    </div>
  );
}
