import React, { Component } from 'react';

//need prop # followers

const UnderHeader = (props) => {
  return (
    <div className="under-header">
      <div className = 'follower-count'>{props.followCount}</div>
      <div className="scrollbar"></div>
    </div>
  );
};

export default UnderHeader;