import React from 'react'
export default class About extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    return (
      <div className='About'>
        About
      </div>
    );
  }
}