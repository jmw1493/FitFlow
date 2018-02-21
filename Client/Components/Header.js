import React, { Component } from 'react';

const Header = (props) => {
  //const { letters, handleClick, row } = props;
  const headerSections = [];
  headerSections.push(
    <div key={6} className='feed'></div>
  );
  headerSections.push(
    <div key={7} className='fitflow'></div>
  );
  headerSections.push(
    <div key={8} className='profile'></div>
  );
  return (
    <div className="header">
      {headerSections}
    </div>
  );
};

export default Header;