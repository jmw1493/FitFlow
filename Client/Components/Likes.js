import React, { Component } from 'react';

const Likes = (props) => {
  //props will be current photo we're on and all props associated w/ that 
  //date
  //# of likes
  //functions to run onclick of buttons
  const likeSection = [];
  likeSection.push(
    <button key={9} className='like-button'>Like</button>
  );
  likeSection.push(
    <div key={10} className='like-number'>{props.likes}</div>
  );
  likeSection.push(
    <button key={11} className='comment-button'>Comment</button>
  );
  likeSection.push(
    <div key={12} className='div-for-space'></div>
  );
  likeSection.push(
    <button key={13} className='follow-button'>Follow</button>
  );
  return (
    <div className="like-section">
      {likeSection}
    </div>
  );
};

export default Likes;