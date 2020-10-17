import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currentDate = new Date();
 currentDate = currentDate.getHours();

let cssStyle = {};

let greeting = '';

// it will return random images
const randomImage1 = 'https://picsum.photos/600/500';
// const randomImage2 = 'https://picsum.photos/600/500';


if(currentDate>=1 && currentDate<12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if(currentDate>=12 && currentDate<19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'Red';

}else{
  greeting = 'Good Evening';
  cssStyle.color = 'gray';

}

ReactDOM.render(
  
  <>
   <h1 className='heading'>Hello sir, <span style={cssStyle}> {greeting} </span></h1>
  <div className='images'>
   <img src={randomImage1} alt='random1' />
   {/* <img src={randomImage2} alt='random2' /> */}
  </div>
  </>,

  document.getElementById('root')
);

