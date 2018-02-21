import React, { Component } from 'react';

//needs to be JSX file?

const Photos = (props) => {
  //props will be current photo we're on and all props associated w/ that 
  //date
  //img source
  //functions to run onclick of buttons
  const photoSection = [];
  photoSection.push(
    <button key={14} className='left-button' onClick={props.handleLeftClick}>&larr;</button>
  );
  photoSection.push(
    <div key={15} className='small-photo-left'></div>
  );
  photoSection.push(
    <div key={16} className='big-photo'>
      {/* <div className='date'>{props.date}</div> */}
      <img className='main-photo' src={props.img}/>
    </div>
  );
  photoSection.push(
    <div key={17} className='small-photo-right'></div>
  );
  photoSection.push(
    <button key={18} className='right-button' onClick={props.handleRightClick}>&rarr;</button>
  );
  return (
    <div className="photo-section">
      {photoSection}
    </div>
  );
};

export default Photos;