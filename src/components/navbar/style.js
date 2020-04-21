import styled from 'styled-components';

export const NavWrap = styled.nav`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    z-index:99;
    margin-bottom:0px;
    top: 0;
    width: 100%;
    height: 8vh;
    position: fixed;
    background: rgba(255,255,255, 0.6);
`;
export const Logo = styled.a`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;
export const UlNav = styled.ul`
    display: flex;
    color: white;
    width: 100%;
    height: 8vh;
    list-style: none;
    flex-flow: row-wrap;
    justify-content: flex-end;
    margin:0px;
    position: relative;
`;

export const Li = styled.li`
    text-decoration: none;
    min-width: 60px;
    font-size: 20px;
    list-style: none;
    &:hover {
        color: white;
    }
    color: white;
    text-shadow: 1px 0 4px black;

`;

export const A = styled.a`
    display: flex;
    position: relative;
    height: 8vh;
    justify-content: center;
    text-align: center;
    align-items: center;
    text-decoration: none;
    &.hovcontact {
        background: linear-gradient(0deg, rgba(78,161,186,1) 0%, rgba(88,193,222,1) 100%);
        color: white;
    }
    &.hovtest {
        background: rgb(2,46,62);
        color: white;
    }
    &.hovportfolio {
        background: linear-gradient(0deg, rgba(59,103,119,1) 0%, rgba(74,150,173,1) 100%);
        color: white;
    }
    &.hovabout{
        background: linear-gradient(0deg, rgba(41,49,58,1) 0%, rgba(56,95,110,1) 100%);
        color: white;
    }
    &:hover {
        text-decoration: none;
        cursor: pointer;
        &.about {
            background: linear-gradient(0deg, rgba(41,49,58,1) 0%, rgba(56,95,110,1) 100%);
        }
        &.portfolio {
            background: linear-gradient(0deg, rgba(59,103,119,1) 0%, rgba(74,150,173,1) 100%);
        }
        &.contact {
            background: linear-gradient(0deg, rgba(78,161,186,1) 0%, rgba(88,193,222,1) 100%);
        }
        &.test {
            background: rgb(2,46,62);
            background: linear-gradient(0deg, rgba(2,46,62,0) 0%, rgba(2,46,62,1) 25%, rgba(2,46,62,1) 100%);
        }
      }
`;
export const LeftHead = styled.div`
    display: flex;
`;
export const MidHead = styled.div`
    height: 100%;
    flex-grow: 2;
    display: flex;
`;
export const RightHead = styled.div`
    display: flex;
    overfolw: hidden;
    min-width: 300px;
`;
export const Img = styled.img`
    transform-style: preserve-3d;
    height: 10vh;
`;