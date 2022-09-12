import React from "react";
import { HomeContent, Image } from "./styled.js";
import HomeHeader from "./components/Header";
import HomeButton from "./components/Button"

import Frameline from "../../images/Frameline.png";

export default function Home() {
  return (
    <HomeContent id="home">
      <HomeHeader />
      <HomeButton />
      <Image src={Frameline} />
    </HomeContent>
  );
}
