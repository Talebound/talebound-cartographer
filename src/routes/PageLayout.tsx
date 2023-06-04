import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import MenuLeft from '../components/MenuLeft/MenuLeft.tsx';

const PageLayout: React.FC = () => {
  return (
    <Layout>
      <MenuLeft />
      <div>
        <Outlet />
      </div>
    </Layout>
  );
};

export default PageLayout;
