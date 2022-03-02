import React, { FC, Suspense } from 'react';
import { useRoutes } from "react-router-dom";
import { Layout } from 'antd';
import './App.css';
import Head from './components/Head/Head';
import Foot from './components/Foot/Foot';
import routes from './router/index';

const { Header, Footer, Content } = Layout;

const App: FC = () => {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <Layout>
        <Header> <Head /></Header>
        <Content style={{
          padding: 24,
          margin: 0,
          minHeight: 500,
        }}>
          <Suspense fallback={<div>Loading...</div>}> {element}</Suspense>
        </Content>
        <Footer style={{ textAlign: 'center' }}><Foot /></Footer>
      </Layout>
    </div>
  );
}

export default App;
