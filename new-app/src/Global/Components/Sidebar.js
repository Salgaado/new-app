import React from "react";
import Logo from '../../Images/Logo.png';
import { SideBarNav, ListItems, Privacidade, ListItem, Image, Link } from "./Styled-SideBar";

export default function SideBar() {
  return (
    <SideBarNav>
      <Image src={Logo} alt="Logo"/>
      <ListItems>
        <ListItem>
          <Link href="#home">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#empreendimento">O Empreendimento</Link>
        </ListItem>
        <ListItem>
          <Link href="#plantas">Plantas</Link>
        </ListItem>
        <ListItem>
          <Link href="#local">Localização</Link>
        </ListItem>
        <ListItem>
          <Link href="#contato">Contatos</Link>
        </ListItem>
      </ListItems>
      <Privacidade>Políticas de<br/>privacidade</Privacidade>
    </SideBarNav>
  );
}