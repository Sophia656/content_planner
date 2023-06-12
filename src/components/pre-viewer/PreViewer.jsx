import React, { useEffect, useState } from 'react';
import { Cell, CellImg, DragAndDrop, Menu, MenuItem, Wrapper } from './styled';

const PreViewer = ({changeBack, cards, sortCards, dragStartHandler, dragLeaveHandler, dragOverHandler, dragEndHandler, dropHandler, showPrev}) => {
    const [menuItems, setMenuItems] = useState([
        {id: 1, name: 'CLOSE-UP', active: false, hover: false, largestId: 13, smallestId: 0},
        {id: 2, name: 'MIDDLE', active: true, hover: false, largestId: 25, smallestId: 12},
        {id: 3, name: 'WIDE', active: false, hover: false, largestId: 37, smallestId: 24},
        {id: 4, name: 'PORTRAIT', active: false, hover: false, largestId: 49, smallestId: 36},
        {id: 5, name: 'ABSTRACT', active: false, hover: false, largestId: 61, smallestId: 48}
    ])

    const [numOfLargestIdSelected, setNumOfLargestIdSelected] = useState(25)
    const [numOfSmallestIdSelected, setNumOfSmallestIdSelected] = useState(12)
    

    const [cellBorder, setCellBorder] = useState('')

    useEffect(() => {
        if (!changeBack) {
            setCellBorder('1px solid black')
        }
        if (changeBack) {
            setCellBorder('1px solid white')
        }
    }, [changeBack])
    
    const [drag, setDrag] = useState(false)

    const handleDragStart = (e) => {
        e.preventDefault()
        setDrag(true)
    }
    const handleDragLeave = (e) => {
        e.preventDefault()
        setDrag(false)
    }
    const onDropHandler = (e) => {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
    }

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

    const handleUnhover = () => {
        setMenuItems(menuItems.map(item => {
            return {...item, hover: false}
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
                    onMouseOut={() => handleUnhover()}
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
                                border={card?.src === '' && cellBorder}
                                dragging={showPrev ? true : false}>
                                    {card?.src === '' && 
                                        <DragAndDrop
                                        onDragStart={(e) => handleDragStart(e)}
                                        onDragLeave={(e) => handleDragLeave(e)}
                                        onDragOver={(e) => handleDragStart(e)}
                                        onDragEnd={(e) => handleDragLeave(e)}
                                        onDrop={(e) => onDropHandler(e)}
                                        changeBack={changeBack}
                                        >
                                            {drag ? '' : ''}
                                        </DragAndDrop>
                                    }
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


// {drag ? 'RELEASE THE FILE FOR DOWLOAD' : 'DRAG AND DROP FILE TO UPLOAD'}