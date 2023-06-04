import React from 'react';
import { Outlet } from 'react-router-dom';
import 'antd/dist/reset.css';
import MenuTop from '../components/MenuTop/MenuTop.tsx';
import { styled } from '@stitches/react';

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  border: '1px solid black',
  padding: '0.5rem',
});

const PageLayout: React.FC = () => {
  return (
    <>
      <MenuTop />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default PageLayout;
