import React from 'react';
import { BtnsForShiftBack, BtnsForShiftForward, Cell, CellImg, GridWrap, PlannerWrap, Plus } from './styled';
import BtnForChangingBack from '../UI/button/BtnForChangingBack';

const InstaGrid = ({changeBack, 
    setChangeBack, 
    cards, 
    sortCards, 
    dragStartHandler, 
    dragLeaveHandler, 
    dragOverHandler, 
    dragEndHandler, 
    dropHandler, 
    handleOpen, 
    counterMaxGridCards,
    handlePressNext}) => {

        console.log('IN GRID', cards, counterMaxGridCards)

    return (
        <div>
            <BtnsForShiftBack>{'<'}</BtnsForShiftBack>
            <PlannerWrap back={changeBack}>
                <GridWrap>
                {cards.sort(sortCards).map(card => {
                    if (card?.id > 60 && card?.id < counterMaxGridCards + 1  && card?.id !== undefined) {
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
                                {card?.src === '' && <Plus>+</Plus>}
                                <CellImg w={card?.w} h={card?.h} src={card?.src} />
                            </Cell>
                        )
                    }}
                )}
                </GridWrap>
            </PlannerWrap>
            <BtnForChangingBack changeBack={changeBack} setChangeBack={setChangeBack} />
            <BtnsForShiftForward onClick={() => handlePressNext()}>{'>'}</BtnsForShiftForward>
        </div>
    );
};

export default InstaGrid;