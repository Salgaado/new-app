import React from "react";
import SideBar from "./components/Sidebar/index.js";
import { Content } from "./styled.js";
import Pages from './pages/index.js';

export default function App() {
  return (
    <Content>
      <SideBar />
      <Pages/>
    </Content>
  );
}
