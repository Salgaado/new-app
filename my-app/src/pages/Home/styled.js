import styled from "styled-components";
import RoomImg from "../../images/Home-img.jpg";

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 50px;
  height: 100vh;
  width: 100%;
  background: url(${RoomImg});
  background-size: cover;
  border-radius: 100px 0 600px;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 0;
`;
