import React, { useEffect } from 'react';
import { Btn, BtnsForShiftBack, BtnsForShiftForward, BtnsForShifting, Cell, CellImg, GridWrap, PlannerWrap, Plus } from './styled';

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
    
    const handleChangeBack = () => {
        setChangeBack(!changeBack)
    }

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
                            // onClick={() => handleOpen(card)}
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
            <Btn btnback={changeBack} onClick={() => handleChangeBack()}>{changeBack ? '🌚️' : '🌝' }</Btn>
            {/* {cards.map(card => {
                if (card?.id === 500 && card?.id !== undefined) {
                    return (
                        <Cell 
                        style={{width: '6vw', 
                        position: 'absolute', 
                        bottom: '-2.5%',  
                        right: 0,
                        marginRight: '23vw', 
                        background: 'transparent'}}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, card)}
                        key={card?.id}
                        draggable={false}>
                            <CellImg w={card?.w} h={card?.h} src={card?.src} />
                        </Cell>
                    )
                }
            })} */}
            <BtnsForShiftForward onClick={() => handlePressNext()}>{'>'}</BtnsForShiftForward>
        </div>
    );
};

export default InstaGrid;