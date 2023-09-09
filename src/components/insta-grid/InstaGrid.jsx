import React, { useState } from 'react';
import { BtnsForShiftBack, BtnsForShiftForward, Cell, CellEngagement, CellImg, GridWrap, PlannerWrap, Plus } from './styled';
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
    handlePressNext,
    handlePressPrev }) => {
    const [showEngagement, setShowEngagement] = useState(false)
        

    return (
        <div>
            <BtnsForShiftBack onClick={() => handlePressPrev()}>{'<'}</BtnsForShiftBack>
            <PlannerWrap back={changeBack}>
                <GridWrap>
                {cards.sort(sortCards).map(card => {
                    if (card?.id > 99 && card?.id < 500  && card?.id !== undefined) {
                        return (
                            <Cell 
                            onMouseEnter={() => setShowEngagement(true)}
                            onMouseLeave={() => setShowEngagement(false)}
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
                                {showEngagement && <CellEngagement>{card?.engagement}</CellEngagement>}
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