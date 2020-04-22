import styled, {keyframes} from 'styled-components';
const textRight = keyframes`
    0%{
        transform: translate(-80%, 0%);
        opacity: 0;
    }
    50% {
        transform: translate(-40%, 0%);
        opacity: 0;
    }
    100% {
        transform: translate(0%, 0%);
        opacity: 1;
    }
`;
const animationLeft = keyframes`
    0% {
        transform: translate(160%, 0%);
    }
    100% {
        transform: translate(0%, 0%);
    }
`;
export const Wrap = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0px;
    min-height:800px;
    height: 100vh;
`;
export const LeftSide = styled.div`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    margin-top: 10px;
`;
export const RightSide = styled.div`
    width: 100%;
    height: 90%;
    margin-top: 10px;
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const YassinePic = styled.img`
    position: relative;
    border-radius: 50%;
    border: 5px solid white;
    height: 300px;
    transform: translate(160%, 0%);
    overflow: hidden;
    animation: 0.6s ${animationLeft} linear forwards;
    animation-iteration-count: 1;
    padding: 0;
`;
export const Text = styled.h3`
    width: 80%;
    min-width: 300px;
    opacity: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    animation: 1s ${textRight} linear 0.3s forwards;
    overflow: hidden;
    margin: 5px 0px 5px 0;
`;
export const IconRow = styled.div`
    width: 80%;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    opacity: 0;
    transform: translate(-80%, 0%);    
    justify-content: space-around;
    min-width: 10%;
    height: 80px;
    animation: 1s ${textRight} linear 0.3s forwards;
`;
export const IconWrap = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
`;