import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Clock = styled.div`
  height: 400px;
  width: 400px;
  border: 2px solid salmon;
  border-radius: 50%;
  position: relative;
  background-color: gray;
`;
export const HourHand = styled.div<{ rotation: number }>`
  position: absolute;
  height: 5px;
  width: 5px;
  top: calc(50% - 2.5px); /* Adjusted top positioning to center the hand */
  left: calc(50% - 2.5px);
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 115px;
    width: 5px;
    background-color: gold;
    position: absolute;
    bottom: 0;
  }
`;
export const MinuteHand = styled.div<{ rotation: number }>`
  position: absolute;
  height: 5px;
  width: 5px;
  top: calc(50% - 2.5px); /* Adjusted top positioning to center the hand */
  left: calc(50% - 2.5px);
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 145px;
    width: 5px;
    background-color: rgb(28, 212, 67);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const SecondHand = styled.div<{ rotation: number }>`
  position: absolute;
  height: 5px;
  width: 5px;
  top: calc(50% - 2.5px); /* Adjusted top positioning to center the hand */
  left: calc(50% - 2.5px);
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 130px;
    width: 2px;
    background-color: rgb(252, 247, 235);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
