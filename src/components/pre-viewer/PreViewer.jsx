import React, { useState } from 'react';
import { Cell, CellImg, Closer, PreWrap, Wrapper } from './styled';

const PreViewer = ({changeBack, cards, sortCards, dragStartHandler, dragLeaveHandler, dragOverHandler, dragEndHandler, dropHandler, showPrev}) => {
    
    
    return (
        <Wrapper hidden={!showPrev} change={changeBack}>
            {cards.sort(sortCards).map(card => {
                if (card?.id < 16 && card?.id !== undefined) {
                    return (
                        <Cell
                        closeWindow={!showPrev} 
                        openWindow={showPrev}
                        onDragStart={(e) => dragStartHandler(e, card)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, card)}
                        key={card?.id}
                        dragging={showPrev ? true : false}>
                            <CellImg closeWindow={!showPrev} openWindow={showPrev} w={card?.w} h={card?.h} src={card?.src} />
                        </Cell>
                    )
                }
            })}
        </Wrapper>
    );
};

export default PreViewer;