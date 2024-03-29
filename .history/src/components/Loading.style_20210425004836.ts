import styled, { keyframes } from 'styled-components';

export const flip = keyframes`
0% { transform: rotate(0deg) }
50% { transform: rotate(180deg) }
100% { transform: rotate(360deg) }

`

export const Root = styled.div`
width: 200px;
height: 200px;
display: inline-block;
overflow: hidden;
background: #ffffff;
`

export const Content = styled.div`
width: 100%;
height: 100%;
position: relative;
transform: translateZ(0) scale(1);
backface-visibility: hidden;
transform-origin: 0 0;
`;
export const Spiner = styled.div`
position: absolute;
animation: ${flip} 1s linear infinite;
width: 160px;
height: 160px;
top: 20px;
left: 20px;
border-radius: 50%;
box-shadow: 0 4px 0 0 #ff9800;
transform-origin: 80px 82px;
`;