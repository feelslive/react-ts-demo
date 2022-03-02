import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
export default class Goods extends React.Component {

  handleClick = (e: any) => {
    const navigate = useNavigate();
    console.log(navigate);
    navigate('/');
  };
  render() {
    return (
      <div className='Goods' onClick={this.handleClick}>
        <Button type="primary">Goods</Button>
      </div>
    );
  }
}