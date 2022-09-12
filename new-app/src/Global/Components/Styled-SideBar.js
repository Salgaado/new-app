import styled from "styled-components";

export const SideBarNav = styled.div`
  height: 100vh;
  width: 242px;
  position: fixed;
  background-color: var(--White);
`;

export const ListItems = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 24px 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--black);
  transition: all 0.2s ease-in;
  
`;

export const Privacidade = styled.p`
  padding: 24px 0;
  margin: 0 24px;
  
`;

export const Image = styled.img`
  padding: 24px 0;
  margin: 0 24px;
  cursor:pointer;
`;
export const Link = styled.a`
  padding: 24px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--black);
  transition: all 0.2s ease-in;
  margin: 0 20px;
  

  :hover {
    color: var(--yellow);
  }
`;
