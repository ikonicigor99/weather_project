import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const s3 = keyframes`
100%{transform: rotate(1turn);}
`;
export const Component = styled.div`
    display: flex;
     width: 100%;
     flex-direction: column;
     align-items: center;
     background: linear-gradient(313deg, #ffffff, #716a6a, #0082ff, #ffc100);
  background-size: 180% 180%;
  animation: ${gradientAnimation} 15s ease-out infinite;
     .holderError{
        width:360px;
    
    border-radius:25px; 
    display: flex;
    justify-content: center;
    margin:10px;
     }
     .error{
        font-size:16px;background-color:#ff3333;color:#fff;width:300px;
        padding:20px;
        margin:10px;
        text-align:center;
      }
}`;

export const MainHolder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(313deg, #ffffff, #716a6a, #0082ff, #ffc100);
  background-size: 180% 180%;
  animation: ${gradientAnimation} 15s ease-out infinite;
  color: #fff;

  .holderSearch {
    width: 360px;
    display: flex;
    justify-content: space-between;
    border-radius: 26px;
    backdrop-filter: blur(14px);
    background-color: rgba(255, 255, 255, 0.2);
    height: 46px;
    align-items: center;
    margin-bottom: 20px;
  }
  input {
    outline: none;
    border: none;
    width: 250px;
    background-color: transparent;
    margin-left: 10px;
    color: #fff;
  }
  ::placeholder {
    color: #fff;
  }
  .clear {
    color: #ffde33;
  }
  .rain,
  .drizzle,
  .snow {
    color: #31cafb;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    margin-right: 8px;
    outline: none;
    border: none;
    background-color: #1ab8ed;
    border-radius: 26px;
    height: 35px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
      color: #fff;
    }
  }
  .holderCard {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 65%;
    border-radius: 25px;
    backdrop-filter: blur(14px);
    background-color: rgba(255, 255, 255, 0.2);
  }
  .weatherCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
    height: 100%;
  }
  .iconPlace {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .holderCityDate {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }
  .icon {
    font-size: 65px;
  }
  .coutry {
    font-size: 20px;
  }
  .date {
    font-size: 12px;
  }
  .bodyCard {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .temp {
    display: flex;
    align-items: center;
    font-size: 80px;
    justify-content: center;
  }
  .bottomCard {
    display: flex;
    justify-content: center;
  }
  .infoWeather {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .infoCard {
    display: flex;
    align-items: center;
    width: 140px;
    justify-content: space-evenly;
  }

  .custom-loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #766df4 94%, #0000) top/8px 8px
        no-repeat,
      conic-gradient(#0000 30%, #fff);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: ${s3} 1s infinite linear;
  }
`;
