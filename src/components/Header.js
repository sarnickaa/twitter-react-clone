import React from 'react';
import '../styles/Header.css'
// import backgoundImage from '../images/backgorundImage.jpg'

const Header = props => {
  const styles = {
    backgroundImage: props.headerImage
  }

  return (
    <div className="Header-div" style={styles}>
    {props.username}
    </div>
  )
};

export default Header;
