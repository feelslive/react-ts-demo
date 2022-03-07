import React, { Component } from 'react'
import LinkBtn from '../../components/LinkBtn/LinkBtn';
type StateType = {
  title: string;
};
type propType = {
  title: string;
};
export default class Goods extends Component<propType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'home'
    }
  }
  render() {
    const { title } = this.state;
    return (
      <div className='Goods'>
        <LinkBtn name={title} path="/"></LinkBtn>
      </div>
    );
  }
}