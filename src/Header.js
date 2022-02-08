import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Affix, Button, Space, Upload, Popconfirm , DatePicker, version, message, Alert } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, UploadOutlined } from '@ant-design/icons';
import './Header.css'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Header_main = () => {

    const [date, setDate] = useState(null);
    const [newdate, setNewdate] = useState("");

    const handleChange = value => {
        message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
        setDate(value);
    };  
    return (
        <React.Fragment>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280}}>
                            <div style={{ width: 400, margin: '100px auto' }} >
                                <h1>antd version: {version}</h1>
                                <DatePicker onChange={handleChange} />

                                <div style={{ marginTop: 16 }}>
                                    Selected Date: {newdate}
                                </div>
                                <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : ' '} />
                            </div>
                        </Content>
                    </Layout>
                </Content>
                <Affix>
                    <Footer style={{ position: 'fixed', bottom: 0, textAlign: 'center', width: '100%' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Affix>
            </Layout>
        </React.Fragment>
    )
};

export default Header_main;
