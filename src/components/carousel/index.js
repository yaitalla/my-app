import React from 'react';
import { Wrap, Box, Item, CardFigure, Left, Right, Insider, TetrisImg,
     ReactTetrisTxt, MultiplayerTxt, MapImg
 } from './style';
import tetris from '../../images/tetrisAnimation.gif';
import driver from '../../images/driver.gif';
import cv from '../../images/cv.png';

const newer = (index, anim) => {
    switch ( index ){
        case 'one':
            return (anim === 'Left' ? 'three' : 'two')
        case 'two':
            return (anim === 'Left' ? 'one' : 'three')
        case 'three':
            return (anim === 'Left' ? 'two' : 'one')
        default:
            break;
    }
}
const properAdd = (item, index, anim, side ) => {
    item.remove('one')
    item.remove('two')
    item.remove('three')
    item.remove('oneLeft')
    item.remove('twoLeft')
    item.remove('threeLeft')
    item.remove('oneRight')
    item.remove('twoRight')
    item.remove('threeRight')
    item.add(anim)
    item.add(newer(index, side))
}

const turn = (side) => {
    const panel = document.getElementById('carouselbox').classList;
    const index = selectPanel(panel);
    const animClass = index + side;
    properAdd(panel, index, animClass, side)
}
const selectPanel = (item) => {
    if (item.contains('three')) {
        return 'three';
    } else if (item.contains('two')) {
        return 'two';
    } else {
        return 'one';
    }
}
const Carousel = () => {
    return (
        <Wrap>
            <Left onClick={() => turn('Left')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 8 16">
                    <path d="M.206 8.428l6.473 7.109c.275.301.721.301.996 0 .275-.303.275-.792 0-1.094l-5.975-6.561 5.975-6.562c.275-.302.275-.792 0-1.094-.275-.303-.721-.303-.996 0l-6.473 7.109c-.274.301-.274.792 0 1.093z"/>
                </svg>
            </Left>
            <CardFigure>
                <Box id={'carouselbox'} className={'one'}>
                    <Item>
                        <Insider>
                            <ReactTetrisTxt>React Tetris</ReactTetrisTxt>
                            <MultiplayerTxt>realtime multiplayer</MultiplayerTxt>
                            <TetrisImg src={tetris} />
                        </Insider>
                        
                    </Item>
                    <Item>
                        <Insider>
                            <ReactTetrisTxt>Driver GPS</ReactTetrisTxt>
                            <MultiplayerTxt>realtime tracking</MultiplayerTxt>
                            <MapImg src={driver} />
                        </Insider>
                    </Item>
                    <Item>
                        <Insider>
                            <ReactTetrisTxt>CV Template</ReactTetrisTxt>
                            <MultiplayerTxt>bootstrap</MultiplayerTxt>
                            <MapImg src={cv} />
                        </Insider>
                    </Item>
                </Box>
            </CardFigure>
            <Right  onClick={() => turn('Right')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 8 16">
                    <path d="M7.675 7.334l-6.473-7.108c-.275-.302-.721-.302-.996 0s-.275.792 0 1.094l5.976 6.561-5.976 6.562c-.275.302-.275.791 0 1.094s.721.303.996 0l6.473-7.108c.274-.303.274-.793 0-1.095z"/>
                </svg>
            </Right>
        </Wrap>
    )
}

export default Carousel;