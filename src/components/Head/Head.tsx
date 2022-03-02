import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Head extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    console.log(e.key);
    // const navigate = useNavigate();
    // console.log(navigate);
    // navigate('/goods');
    this.setState({ current: e.key });

  };
  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="/" icon={<MailOutlined />}>
          Navigation One
          <Link to="/"> to Goods</Link>
        </Menu.Item>
        <Menu.Item key="/goods" icon={<AppstoreOutlined />}>
          Navigation One
          <Link to="/goods"> to Goods</Link>
        </Menu.Item>
        <Menu.Item key="phone" icon={<AppstoreOutlined />}>
          Navigation Three
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}