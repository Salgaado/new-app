import React from "react";
import {
  EmpreendimentoContainer,
  EmpreendimentoWraperOne,
  EmpreendimentoWraperTwo,
  EmpWraperChildH1,
  EmpWraperChildP,
  EmpWraperChildSwiper,
} from "./styled-empreend";
import HeaderEmpreendimento from "./Components/Header.js";
import TextEmprendimento from "./Components/text.js";
import SwiperEmpreendimento from './Components/swiper';
import Restroom from '../../Images/restroom.png';

export default function Empreendimento() {
  return (
    <EmpreendimentoContainer id="empreendimento">
      <EmpreendimentoWraperOne>
        <EmpWraperChildH1>
          <HeaderEmpreendimento />
        </EmpWraperChildH1>
        <EmpWraperChildP>
          <TextEmprendimento />
        </EmpWraperChildP>
        <EmpWraperChildSwiper>
          <SwiperEmpreendimento />
        </EmpWraperChildSwiper>
      </EmpreendimentoWraperOne>
      <EmpreendimentoWraperTwo>
        <img src={Restroom} alt=''/>
      </EmpreendimentoWraperTwo>
    </EmpreendimentoContainer>
  );
}
