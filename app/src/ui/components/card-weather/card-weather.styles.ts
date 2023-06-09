import styled from "styled-components";

export const CardWeatherStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const LocalInfosStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;

  img {
    width: 2em;
  }
`;

export const TemperatureStyle = styled.div`
  padding: 0.3em;
  border-radius: 15px;
  width: 10em;
  display: grid;
  place-items: center;

  img {
    width: 7em;
  }
`;

export const DetailsWeatherStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: center;

  div {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    padding: 1em;
    border-radius: 15px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 0.5em;
    height: 5.5em;
  }
`;

export const MainInformations = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;
