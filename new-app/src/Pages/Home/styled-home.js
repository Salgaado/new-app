import styled from 'styled-components';
import Room from '../../Images/Home-img.jpg';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 5rem;
  height: 100vh;
  width: 100%;
  background: url(${Room});
  background-size: cover;
  border-radius: 100px 0 600px;
`;


export const Image = styled.img`
  width: 30rem;
  position: absolute;
  z-index: 2;
  top: 8rem;
  right: 0;
`;


export const Button = styled.button`
  height: 4rem;
  width: 30rem;
  border-radius: 10px;
  border: none;
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 36px;
  color: var(--grey);
  cursor: pointer;
`;


export const HomeH1 = styled.h1`
  font-family: "Quicksand";
  font-weight: 300;
  font-size: 72px;
  text-transform: uppercase;
  color: var(--white);
`;