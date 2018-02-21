import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';

//import sub-components
import Header from './Header.js'
import UnderHeader from './UnderHeader.js';
import Photos from './Photos.js';
import Likes from './Likes.js';
import Details from './Details.js';
import Comments from './Comments.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      imgInd: 0,
      maxInd: 0,
      followCount: 0,
      imgOnDisplay: {}
    };
    this.postPhoto = this.postPhoto.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.urlTyping = this.urlTyping.bind(this);
    this.urlEntry = this.urlEntry.bind(this);
  }

  postPhoto(imgUrl) {
    fetch('/photo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        id: this.state.imgInd,
        img: imgUrl
      }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return Promise.reject(response.statusText);
    })
    .then(post => {
      this.setState({
        imgInd: this.state.maxInd + 1,
        maxInd: this.state.maxInd + 1,
        imgOnDisplay: post
      });
    })
    .catch(err => {
      console.log('ERROR!', err);
    });
  }

  handleLeftClick() {
    if(this.state.imgInd <= 1) return;
    let id = this.state.imgInd - 2;
    fetch('/photo-change', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
    .then(response => response.json())  
    .then(post => {
      this.setState({
        imgInd: id + 1,
        imgOnDisplay: post
      });
    });
  }

  handleRightClick() {
    if(this.state.imgInd === this.state.maxInd) return;
    let id = this.state.imgInd;
    console.log(id)
    fetch('/photo-change', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
    .then(response => response.json())  
    .then(post => {
      this.setState({
        imgInd: id + 1,
        imgOnDisplay: post
      });
    });
  }

  urlTyping(event) {
    this.setState({url: event.target.value})
  }

  urlEntry(event) {
    event.preventDefault();
    this.postPhoto(this.state.url);
  }


  render() {
    console.log(this.state)
    const mainSections = [];
    let i = 0;
    mainSections.push(<Header 
      key={0} 
      followCount={this.state.imgOnDisplay.followCount}
      />);
    mainSections.push(<UnderHeader 
      key={1} 
      followCount={this.state.imgOnDisplay.followCount}
      />);
    mainSections.push(
      <div key={22} className='main'>
        <div key={21} className='left-column'>
        <form key={23} className='url-form' onSubmit={this.urlEntry}>
          <textarea type="text" name="imgUrl" className='url-box' value={this.state.url} onChange={this.urlTyping}/>
          <input type="submit" value="Submit" className='submit-url'/>
        </form>
        </div>
        <div key={20} className='content'>
          <Photos 
            key={2}
            // date={this.state.imgOnDisplay.date} 
            img={this.state.imgOnDisplay.img} 
            handleLeftClick={this.handleLeftClick} 
            handleRightClick={this.handleRightClick}
          />
          <Likes
            key={3} 
            likes={this.state.imgOnDisplay.likes} 
            //functions onclick of like/comment buttons
          />
          <Details key={4}/>
          <Comments key={5}/>
        </div>
      </div>
    )
    // mainSections.push(<div key={21} className='left-column'></div>);
    // mainSections.push(
    //   <div key={20} className='content'>
    //     <Photos 
    //       key={2}
    //       date={this.state.imgOnDisplay.date} 
    //       img={this.state.imgOnDisplay.img} 
    //       handleLeftClick={this.handleLeftClick} 
    //       handleRightClick={this.handleRightClick}
    //     />
    //     <Likes
    //       key={3} 
    //       likes={this.state.imgOnDisplay.likes} 
    //       //functions onclick of like/comment buttons
    //     />
    //     <Details key={4}/>
    //     <Comments key={5}/>
    //   </div>);
    // mainSections.push(<div key={20} className='left-column'></div>);
    // mainSections.push(<Photos 
    //   key={2}
    //   date={this.state.imgOnDisplay.date} 
    //   img={this.state.imgOnDisplay.img} 
    //   handleLeftClick={this.handleLeftClick} 
    //   handleRightClick={this.handleRightClick}
    // />);
    // mainSections.push(<Likes
    //   key={3} 
    //   likes={this.state.imgOnDisplay.likes} 
    //   //functions onclick of like/comment buttons
     // />);
    // mainSections.push(<Details key={4}/>);
    // mainSections.push(<Comments key={5}/>);

    return (
      <div className='wrapper'>
        {mainSections}
      </div>
    );
  }
}

export default App;