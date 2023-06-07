import React from 'react';
import { Btn, Cell, CellImg, PlannerWrap } from './styled';

const InstaGrid = ({changeBack, setChangeBack, cards, sortCards, dragStartHandler, dragLeaveHandler, dragOverHandler, dragEndHandler, dropHandler, handleOpen}) => {
    
    const handleChangeBack = () => {
        setChangeBack(!changeBack)
    }

    return (
        <div>
            <PlannerWrap>
                {cards.sort(sortCards).map(card => {
                    if (card?.id > 8 && card?.id < 24  && card?.id !== undefined) {
                        return (
                            <Cell 
                            onDragStart={(e) => dragStartHandler(e, card)} 
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, card)}
                            onClick={() => handleOpen(card)}
                            key={card?.id}
                            draggable={true}>
                                <CellImg w={card?.w} h={card?.h} src={card?.src} />
                            </Cell>
                        )
                    }}
                )}
            </PlannerWrap>
            <Btn btnback={changeBack} onClick={() => handleChangeBack()}>{changeBack ? '🌚️' : '🌝' }</Btn>
            {cards.map(card => {
                if (card?.id === 24 && card?.id !== undefined) {
                    return (
                        <Cell 
                        style={{width: '6vw', position: 'absolute', bottom: 0, marginBottom: '6vh', right: 0, marginRight: '25vw', background: 'transparent'}}
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
            })}
        </div>
    );
};

export default InstaGrid;