import React from 'react';
window.React = React;

/*
 * Components
 */

import Header from './components/header/header';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stuff: 'more stuff'
    }
  }
  render(){
    return (
      <div>
        <Header />
      </div>
    )
  }
}


// color scheme: https://color.adobe.com/pen-to-paper-cafe-color-theme-6197712/edit/?base=2&rule=Custom&selected=4&name=pen%20to%20paper%20cafe&mode=rgb&rgbvalues=0.00392156862745098,0.1372549019607843,0.2509803921568627,0.1490196078431373,0.3333333333333333,0.4509803921568628,0.7137254901960784,0.8588235294117647,0.9490196078431372,0.9490196078431372,0.9294117647058824,0.8627450980392157,0.9490196078431372,0.5686274509803921,0.5333333333333333&swatchOrder=0,1,2,3,4

React.render(<Main />, document.getElementById('app'));

