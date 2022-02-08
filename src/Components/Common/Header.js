import React, { useState } from 'react';
import '../../App.css';
import { Menu } from 'antd';
import { Anchor, Drawer, Button } from 'antd';


const { Link } = Anchor;
function ApPHeader() {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="http://google.com">Tech</a>
                </div>
                {/* <Menu mode="horizontal" defaultSelectedKeys={['home']} >
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="feature">feature</Menu.Item>
                    <Menu.Item key="works">works</Menu.Item>
                    <Menu.Item key="faq">faq</Menu.Item>
                    <Menu.Item key="pricing">pricing</Menu.Item>
                    <Menu.Item key="contact">contact</Menu.Item>
                </Menu> */}
                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Feature" />
                        <Link href="#work" title="Works" />
                        <Link href="#faq" title="Faq" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                        <Anchor targetOffset="65">
                            <Link href="#hero" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#feature" title="Feature" />
                            <Link href="#work" title="Works" />
                            <Link href="#faq" title="Faq" />
                            <Link href="#pricing" title="Pricing" />
                            <Link href="#contact" title="Contact" />
                        </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default ApPHeader;
