import styled from "styled-components";
import Pool from '../../Images/Pool.png';




export const ContatoContent = styled.div`
  display; flex;
  flex-direction: column;
  postion: relative;
  height: 100vh;
  width: 100%;
  background: url(${Pool});
  background-repeat: round;
  background-size: cover;
  border-radius: 100px 0 600px;
`;





export const HeaderContentContato = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 100px;
  margin-right: 100px;
`;

export const HeaderFormContato = styled.div`
  postion: relative;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  justify-content: flex-end;

`;

export const HeaderTitleContato = styled.h1`
  font-family: "Quicksand";
  font-weight: 400px;
  text-transform: uppercase;
  color: var(--white);
`;

export const HeaderSubTitleContato = styled.h3`
  color: var(--white);
  margin-top: 10px;
  margin-bottom: 10px;

`;

export const HeaderInputContato = styled.input`
  height: 68px;
  width: 536px;
  left: 1237px;
  top: 4931px;
  border-radius: 10px;
  border: none;
  font-family: Quicksand;
  color:var(--grey);
  text-transform: uppercase;
  font-size: 18px;
  
  margin-top: 7px;
  margin-bottom: 7px;
`;

export const HeaderBttnContato = styled.button`
height: 36px;
width: 150px;
border-radius: 0px;
border: none;
background-color: var(--yellow);
font-family: Quicksand;
font-size: 24px;
font-weight: 500;
text-align: center;
cursor: pointer;


`;

export const HeaderSpanContato = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  align-items: center;
  gap: 2px;
  font-family: Quicksand;
  font-size: 15px;
  color: var(--white);
`;