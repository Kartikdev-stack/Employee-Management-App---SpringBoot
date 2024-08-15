import React, { Component } from 'react'

export default class HeaderComponent extends Component {

  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    return (
      <div>
          <nav className='navbar navbar-expand-md navbr-dark bg-dark'></nav>
          <div><a href='https://javaguides.net' className='navbr-brand'>Employee Management App</a></div>
      </div>
    )
  }
}
