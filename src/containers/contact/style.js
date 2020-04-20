import styled, {keyframes} from 'styled-components';

export const Wrap = styled.section`
    padding: 25px 0px;
    height: 100vh;
    min-height:800px;
`;

export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;
export const LeftSection = styled.div`
    display: flex;
    width: 90%;
    height: 90%;
    justify-content: flex-end;
    align-items: center;
`;
export const RightSection = styled.div`
    display: flex;
    width: 90%;
    height: 90%;
    justify-content: flex-start;
    align-items: center;
`;

export const FormWrap = styled.form`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 60%;
    flex-direction: column;
`;
export const FormRow = styled.div`
    display: flex;
    margin: 10px 0;
    margin-left: 10px;
    width: 100%;
`;
export const FormInput = styled.input`
    min-width: 400px;
    display: flex;
    min-height: 40px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    &:focus {
        background: pink;
    }
`;
export const FormTxtArea = styled.textarea`
    border-radius: 10px;
    min-height: 100px;
    display: flex;
    min-width: 400px;
    width: 100%;
`;
export const SubmitBtn = styled.button`
    text-align: center;
    min-width: 400px;
    min-height: 40px;
    border-radius: 10px;
    border: none;
    width: 100%;
    color: white;
    background: #385F6E;
    text-shadow: 0 0 4px black;
    &:hover {
        background: #4FA3BC;
    }
`;

export const WordingWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    color: white;
    width: 90%;
    height: 60%;
    flex-direction: column;
`;
const showAlert = keyframes`
    0% {
        opacity: 0;
        transform: translateX(29vw);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;
export const HiddenAlert = styled.div`
    height: 50%;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
    min-width: 523px;
    width: 80%;
    background: rgba(255, 255, 255, 0.2);
    clip-path: polygon(100% 0, 88% 10%, 88% 50%, 20% 50%, 20% 0);
    &.visible {
        animation: 0.6s ${showAlert} linear forwards; 
    }
    &.hidden {
        transform: translateX(29vw);
        opacity: 0;
    }
`;
export const HiddenMessage = styled.p`
    width: 50%;
    font-size: 18px;
    margin-left: 50px;
    text-align: center;
    height: 20%;
    margin-top: 20px;
    color: pink;
    &.alert {
        margin-top: -20px;
    }
`;
export const H1 = styled.h1`
    font-size: 70px;
    margin-left: auto;
    margin-right: 10px;
`;
export const H3 = styled.h3`
    min-width: 523px;
    margin-left: auto;
    margin-right: 10px;
`;
export const Word = styled.p`
    margin-top: 10px;
    margin-left: auto;
    margin-right: 10px;
`;
