import React, {Component} from 'react'

class Delivery extends React.Component {

  renderUI() {
    return (
      <div className='idea'>
          <div>{this.props.children}</div>
      </div>
    );
  }


  render() {
      return (
        this.renderUI()
      )
  }
}
export default Delivery