import styled, {keyframes} from 'styled-components';
// const carouselAnim = keyframes`
    
//     27.5%, 45% {
//         transform: translateZ(-35vw) rotateY(-120deg);
//     }
//     55%, 72.5% {
//         transform: translateZ(-35vw) rotateY(-240deg);
//     }
//     82.5%, 100% {
//         transform: translateZ(-35vw) rotateY(-360deg);
//     }
// `;
const OneRight = keyframes`
    0% {
        transform: translateZ(-30vw) rotateY(0deg);
    }
    100% {
        transform: translateZ(-35vw) rotateY(-120deg);
    }
`;
const OneLeft = keyframes`
    0% {
        transform: translateZ(-30vw) rotateY(0deg);
    }
    100% {
        transform: translateZ(-35vw) rotateY(120deg);
    }
`;
const TwoLeft = keyframes`
    0% {
        transform: translateZ(-34vw) rotateY(-120deg);
    }
    100% {
        transform: translateZ(-35vw) rotateY(0deg);
    }
`;
const TwoRight = keyframes`
    0% {
        transform: translateZ(-34vw) rotateY(-120deg);
    }
    100% {
        transform: translateZ(-35vw) rotateY(-240deg);
    }
`;
const ThreeLeft = keyframes`
    0% {
        transform: translateZ(-34vw) rotateY(-240deg);
    }
    100% {
        transform: translateZ(-35vw) rotateY(-120deg);
    }
`;
const ThreeRight = keyframes`
    0% {
        transform: translateZ(-34vw) rotateY(-240deg);
    }
    100% {
        transform: translateZ(-35vw) rotateY(-360deg);
    }
`;
export const Box = styled.div`
    position: absolute;
    width: 90%;
    height: 90%;
    transform-style: preserve-3d;
    &.one {
        transform: translateZ(-30vw) rotateY(0deg);
    }
    &.two {
        transform: translateZ(-30vw) rotateY(-120deg);
    }
    &.three {
        transform: translateZ(-30vw) rotateY(120deg);
    }
    &.oneLeft {
        animation: ${OneLeft} 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }
    &.oneRight {
        animation: ${OneRight} 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }
    &.twoLeft {
        animation: ${TwoLeft} 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }
    &.twoRight {
        animation: ${TwoRight} 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }
    &.threeLeft {
        animation: ${ThreeLeft} 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }
    &.threeRight {
        animation: ${ThreeRight} 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }
`;
export const Left = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    left: 5%;
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    color: white;
    background: rgba(255, 255, 255, 0.2);
        &:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #16738D;
        cursor: pointer;
    }
    
`;
export const Right = styled.div`
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    right: 5%;
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    &:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #16738D;
        cursor: pointer;
    }
`;
export const Wrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50%;
`;

export const CardFigure = styled.figure`
    position: relative;
    width: 60vw;
    height: 40vw;
    max-width: 380px;
    max-height: 250px;
    margin: 0;
    color: white;
    perspective: 1000px;
    transform-origin: center;
    transform: scale(1.5);
`;
export const Insider = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    align-items: center;
    justify-content: space-around;
`;
export const TetrisImg = styled.img`
    height: 100%;
    position: absolute;
    opacity: 40%;
`;
export const MapImg = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 70%;
`;
export const ReactTetrisTxt = styled.h2`
    z-index: 2;
    text-shadow: 4px 4px 4px black;
`;
export const MultiplayerTxt = styled.h6`
    z-index: 2;
    text-shadow: 2px 2px 4px black;
`;

export const Item = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 60vw;
    height: 40vw;
    max-width: 380px;
    max-height: 250px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border: 1px solid silver;
    transform-origin: center;
    background: rgba(0, 0, 0, 0.7);
    &:nth-of-type(1) {
        transform: rotateY(0) translateZ(35vw);
    }
    &:nth-of-type(2) {
        transform: rotateY(120deg) translateZ(35vw);
    }
    &:nth-of-type(3) {
        transform: rotateY(240deg) translateZ(35vw);
    }
`;
