import React, { useEffect } from 'react';
import { NavWrap, UlNav, A, Logo, Li, RightHead, LeftHead, MidHead, Img} from './style';
import whisLogo from '../../images/Logo2Bleu.svg';

const gotTo = (section) => {
    const talon = window.innerHeight >= 800 ? window.innerHeight : 800;
    const topInput = { about: 0, portfolio: talon, contact: talon * 2, test: talon * 3 };
    switch(section) {
        case 'about':
            window.scrollTo({ top: topInput.about, behavior: 'smooth' });
            break;
        case 'contact':
            window.scrollTo({ top: topInput.contact, behavior: 'smooth' });
            break;
        case 'portfolio':
            window.scrollTo({ top: topInput.portfolio, behavior: 'smooth' });
            break;
        case 'test':
            window.scrollTo({ top: topInput.test, behavior: 'smooth' });
            break;
        default:
            break;
    }
}


const hoverLink = () => {
    window.addEventListener('scroll', () => {
        const talon = window.innerHeight >= 800 ? window.innerHeight : 800;
        if (window.scrollY < (talon-100)) {
            document.getElementById('contact').classList.remove('hovcontact')
            document.getElementById('portfolio').classList.remove('hovportfolio')
            document.getElementById('about').classList.add('hovabout')
        } else if (window.scrollY > (talon-100) && window.scrollY < (talon*2 - 100)) {
            document.getElementById('about').classList.remove('hovabout')
            document.getElementById('contact').classList.remove('hovcontact')
            document.getElementById('portfolio').classList.add('hovportfolio')
        } else if (window.scrollY > (talon*2 - 100) ) {
            document.getElementById('contact').classList.add('hovcontact')
            document.getElementById('about').classList.remove('hovabout')
            document.getElementById('portfolio').classList.remove('hovportfolio')
        }
    })
}


const Navbar = () => {
    useEffect(() => {
        hoverLink();
    });
    return (
        <NavWrap className={""} data-spy={"affix"}>
            <LeftHead >
                <Logo className={"navbar-brand"}
                    href={"https://www.linkedin.com/company/whis-digital-consulting/about/"}
                    target={"_blank"}>
                        <Img className={""} src={whisLogo}/>
                </Logo>
            </LeftHead>
            <MidHead>
            </MidHead>
            <RightHead >
                <UlNav className={"nav navbar-nav navbar-right"}>
                    <Li><A onClick={() => gotTo('about')} className={"about"} id={"about"} >About</A></Li>
                    <Li><A id={"portfolio"} onClick={() => gotTo('portfolio')} className={"portfolio"}>Portfolio</A></Li>
                    <Li><A id={"contact"} onClick={() => gotTo('contact')} className={"contact"}>Contact</A></Li>
                </UlNav>
            </RightHead>
      </NavWrap>
    )
}

export default Navbar;