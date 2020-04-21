import styled, {keyframes} from 'styled-components';

const rotateScaleUp = keyframes`
    0% {
                transform: scale(1) rotateZ(0);
    }
    50% {
                transform: scale(1.4) rotateZ(180deg);
    }
    100% {
                transform: scale(0.9) rotateZ(360deg);
    }
`;
const heartbeat = keyframes`
    from {
        transform: scale(1);
        transform-origin: center center;
        animation-timing-function: ease-out;
    }
    10% {
        transform: scale(0.87);
        animation-timing-function: ease-in;
    }
    17% {
        transform: scale(0.91);
        animation-timing-function: ease-out;
    }
    33% {
        transform: scale(0.98);
        animation-timing-function: ease-in;
    }
    45% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
`;
export const Wrap = styled.section`
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 25px 0px;
    min-height:200px;
    background: linear-gradient(0deg, rgba(4,89,113,1) 0%, rgba(92,205,236,1) 100%);
`;
export const Icon = styled.div`
    width: 50px;
    height: 50px;
    color: white;
    &:hover {
        animation:  1.2s ${heartbeat} ease-in-out infinite ;
        // animation: ${rotateScaleUp} 0.5s linear both;
    }
`;
export const Link = styled.a`
    height: 6vh;
    margin: 10px;
`;