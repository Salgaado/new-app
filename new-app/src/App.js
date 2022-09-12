import React from 'react';
import SideBar from './Global/Components/Sidebar.js';
import {Content} from './styled-App';
import Pages from './Pages/index-pages';

export default function App() {
  return (
    <Content>
      <SideBar />
      <Pages/>
    </Content>
  );
}