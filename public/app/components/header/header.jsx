import React from 'react';


var styles = {
  container: {
    display: 'flex'
  }
}

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render(){
    return (
      <div style={ styles.container }>
       My header 
      </div>
    )
  }

}

export default Header;
