import React from 'react'
export default class Home extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    return (
      <div className='home'>
        home
      </div>
    );
  }
}