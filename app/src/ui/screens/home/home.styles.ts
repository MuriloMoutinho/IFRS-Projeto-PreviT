import styled from "styled-components";
import backgroundImage from "../../../assets/background.jpeg";

export const FormStyle = styled.form`
  div {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`;

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;

  gap: 1em;
  padding: 2em;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const BackgroundStyle = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
