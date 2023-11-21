import React from 'react';
import { BtnsForShiftBack, BtnsForShiftForward, BtnsWrap, Cell, CellEngagement, CellImg, GridWrap, PlannerWrap, Plus, ShowCurrentStatisticsBtn, ShowStatisticsBtn } from './styled';
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
    handleShowCurrentStatistics,
    showCurrStatistics,
    showEngagement,
    handleShowStatistics,
    handlePressPrev }) => {

    return (
        <div>
            <BtnsForShiftBack onClick={() => handlePressPrev()}>{'<'}</BtnsForShiftBack>
            <PlannerWrap back={changeBack}>
                <GridWrap>
                {cards.sort(sortCards).map(card => {
                    if (card?.id > 99 && card?.id < 500  && card?.id !== undefined) {
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
                                {!showCurrStatistics && <CellEngagement>{card?.id}</CellEngagement>}
                            </Cell>
                        )
                    }}
                )}
                </GridWrap>
            </PlannerWrap>
            <BtnsWrap>
                <ShowCurrentStatisticsBtn onClick={handleShowCurrentStatistics}>S</ShowCurrentStatisticsBtn>
                <BtnForChangingBack changeBack={changeBack} setChangeBack={setChangeBack} />
                <ShowStatisticsBtn onClick={() => handleShowStatistics()}>A</ShowStatisticsBtn>
            </BtnsWrap>
            <BtnsForShiftForward onClick={() => handlePressNext()}>{'>'}</BtnsForShiftForward>
        </div>
    );
};

export default InstaGrid;