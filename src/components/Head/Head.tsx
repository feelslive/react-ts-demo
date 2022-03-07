import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
export default class Head extends Component {
  state = {
    current: 'home',
  };

  handleClick = (e: any) => {
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<MailOutlined />}>
          <Link to="/"> to home</Link>
        </Menu.Item>
        <Menu.Item key="goods" icon={<AppstoreOutlined />}>
          <Link to="/goods"> to Goods</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<SettingOutlined />}>
          <Link to="/about"> to about</Link>
        </Menu.Item>
      </Menu>
    );
  }
}