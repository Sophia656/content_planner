import React, { useState } from 'react';
import { Cell, CellImg, Menu, MenuItem, Wrapper } from './styled';

const PreViewer = ({changeBack, cards, sortCards, dragStartHandler, dragLeaveHandler, dragOverHandler, dragEndHandler, dropHandler, showPrev}) => {
    const [menuItems, setMenuItems] = useState([
        {id: 1, name: 'CLOSE-UP', active: true, hover: false, largestId: 13, smallestId: 0},
        {id: 2, name: 'MIDDLE', active: false, hover: false, largestId: 25, smallestId: 12},
        {id: 3, name: 'WIDE', active: false, hover: false, largestId: 37, smallestId: 24},
        {id: 4, name: 'PORTRAIT', active: false, hover: false, largestId: 49, smallestId: 36},
        {id: 5, name: 'ABSTRACT', active: false, hover: false, largestId: 61, smallestId: 48}
    ])

    const [numOfLargestIdSelected, setNumOfLargestIdSelected] = useState(13)
    const [numOfSmallestIdSelected, setNumOfSmallestIdSelected] = useState(0)

    const handleChoose = (id) => {
        setMenuItems(menuItems.map(item => {
            if (item.id === id) {
                setNumOfLargestIdSelected(item.largestId)
                setNumOfSmallestIdSelected(item.smallestId)
                return {...item , active: true}
            } else {
                return {...item, active: false}
            }
        }))
        console.log(numOfLargestIdSelected, numOfSmallestIdSelected)
    }

    const handleHover = (id) => {
        setMenuItems(menuItems.map(item => {
            if (item.id === id) {
                return {...item , hover: true}
            } else {
                return {...item, hover: false}
            }
        }))
    }
    
    return (
        <>
            <Menu hidden={!showPrev}>
                {menuItems.map(i =>
                    <MenuItem 
                    closeWindow={!showPrev} 
                    openWindow={showPrev} 
                    hover={i.hover}
                    key={i.id} 
                    active={i.active} 
                    onClick={() => handleChoose(i.id)}
                    onMouseEnter={() => handleHover(i.id)}
                    >
                        {i.name}
                    </MenuItem> 
                )}
            </Menu>
            <Wrapper hidden={!showPrev} changeBack={changeBack}>
            
                {cards.sort(sortCards).map(card => {
                    if (card?.id < 61 && card?.id !== undefined) {
                        if (card?.id < numOfLargestIdSelected && card?.id > numOfSmallestIdSelected) {
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
                    }
                })}
            </Wrapper>
        </>
    );
};

export default PreViewer;