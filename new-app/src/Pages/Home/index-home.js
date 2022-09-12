import React from "react";
import {HomeContainer, Image} from './styled-home.js';
import Frame from '../../Images/Frame.png';
import HomeButton from './components/Button.js';
import HomeH1 from './components/Header.js';






export default function Home() {
  return(
    <HomeContainer id='home'>
      <HomeH1 />
      <HomeButton />
      <Image src={Frame}/>
    </HomeContainer>
  );
}