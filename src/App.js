import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import ApPHeader from './Components/Common/Header';
import { Layout } from 'antd';
import AppHome from './views/Home';
import NumericInputDemo from './Components/Home/NumericInputDemo';
import RegistrationForm from './dele';
import AppFooter from './Components/Common/Footer';
import { Footer } from 'antd/lib/layout/layout';
const { Header, Content } = Layout;

const App = () => {
  return (
    <div>
      <Layout className="mainLayout">
        <Header>
          <ApPHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer ><AppFooter /></Footer>
      </Layout>
      {/* <RegistrationForm /> */}
    </div>
  )

};

export default App;
