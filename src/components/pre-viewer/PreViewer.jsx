import React from 'react';
import { Cell, CellImg, Wrapper } from './styled';

const PreViewer = ({changeBack, cards, sortCards, dragStartHandler, dragLeaveHandler, dragOverHandler, dragEndHandler, dropHandler}) => {
    
    return (
        <Wrapper change={changeBack}>
            {cards.sort(sortCards).map(card => {
                if (card?.id < 9 && card?.id !== undefined) {
                    return (
                        <Cell 
                        onDragStart={(e) => dragStartHandler(e, card)} 
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, card)}
                        key={card?.id}
                        draggable={true}>
                            <CellImg w={card?.w} h={card?.h} src={card?.src} />
                        </Cell>
                    )
                }
            }
        )}
        </Wrapper>
    );
};

export default PreViewer;