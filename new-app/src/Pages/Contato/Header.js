
import React from "react";
import {
  HeaderContentContato,
  HeaderFormContato,
  HeaderTitleContato,
  HeaderSubTitleContato,
  HeaderInputContato,
  HeaderBttnContato,
  HeaderSpanContato,
} from './styled-contato.js'



export default function HeaderContato() {
  return (
    <HeaderContentContato>
      <HeaderFormContato>
        <HeaderTitleContato>
          FICOU
          <br />
          INTERESSADO?
        </HeaderTitleContato>
        <HeaderSubTitleContato>
          Preencha o formulário abaixo e um de
          <br /> nossos consultores entrará em contato.
        </HeaderSubTitleContato>
        <HeaderInputContato
          placeholder="Como devemos te chamar?"
          type="text"
        />
        <HeaderInputContato placeholder="Teste" type="text" />
        <HeaderInputContato defaultValue="Seu Melhor E-mail" type="text" />
        <HeaderSpanContato>
          <input type="checkbox" />
          Li e aceito os termos de uso dos dados conforme
          <br /> indicado na Política de Privacidade.
          <HeaderBttnContato>Enviar</HeaderBttnContato>
        </HeaderSpanContato>
      </HeaderFormContato>
    </HeaderContentContato>
  );
}