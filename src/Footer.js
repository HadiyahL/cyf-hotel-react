import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.address.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
