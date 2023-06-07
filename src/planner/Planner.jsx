import React, { useEffect, useState } from 'react';
import { Wrapper } from './styled';
import InstaGrid from '../components/insta-grid/InstaGrid';
import PreViewer from '../components/pre-viewer/PreViewer';
import Referencer from '../components/referencer/Referencer';
import Modal from '../components/modal/Modal';
import { myCards } from '../localstorage/localStorage';

const Planner = () => {
    const [changeBack, setChangeBack] = useState(false)
    const [openCard, setOpenCard] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    const [cards, setCards] = useState([])

    const [currentCard, setCurrentcard] = useState(null)

    const dragStartHandler = (e, card) => {
        e.stopPropagation()
        setCurrentcard(card)
    }
    const dragLeaveHandler = () => {}
    const dragEndHandler = () => {}

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    const dropHandler = (e, card) => {
        e.stopPropagation()
        e.preventDefault()

        if (currentCard.id === 23 && card.id === 24) {
            setCards(cards.reverse().map(c => {
                if (c.id > 11 && c.id < 24) {
                    for (let i = 23; i > 12; i--) {

                        if (c.id === i && c.id !== 12) {
                            localStorage.setItem(String(c.id), JSON.stringify({...c, src: cards.find(p => p.id === i - 1).src, w: cards.find(p => p.id === i - 1).w, h: cards.find(p => p.id === i - 1).h}))
                            return {...c, src: cards.find(p => p.id === i - 1).src, w: cards.find(p => p.id === i - 1).w, h: cards.find(p => p.id === i - 1).h}
                        } 
                        if (c.id === 12) {
                            localStorage.setItem(String(c.id), JSON.stringify({...c, src: ''}))
                            return {...c, src: ''}
                        }
                    }
                }
                return c
            }))

        } else if (currentCard.id !== 23 && card.id === 24) {
            setCards(cards.map(c => { return c }))
        } else {
            setCards(cards.map(c => {
                if (c.id === card.id) {
                    localStorage.setItem(String(c.id), JSON.stringify({...c, id: currentCard.id}))
                    return {...c, id: currentCard.id}
                }
                if (c.id === currentCard.id) {
                    localStorage.setItem(String(c.id), JSON.stringify({...c, id: card.id}))
                    return {...c, id: card.id}
                }
                return c
            }))
        }
    }

    const sortCards = (a, b) => {
        if (a.id > b.id) {
            return 1
        } else {
            return -1
        }
    }

    const handleOpen = (card) => {
        setOpenCard(JSON.parse(localStorage.getItem(String(card.id))))
        setOpenModal(true)
    }


    useEffect(() => {
        if (JSON.parse(localStorage.getItem('1') !== null)) {
            console.log(JSON.parse(localStorage.getItem('1')))
            const reternArr = []
            for (let i = 1; i < 25; i++) {
                reternArr.push(JSON.parse(localStorage.getItem(i)))
            }
            setCards(reternArr)
        } else {
            myCards.map(card => {
                localStorage.setItem(String(card?.id), JSON.stringify(card))
            })
    
            const newArr = []
    
            for (let i = 1; i < 25; i++) {
                newArr.push(JSON.parse(localStorage.getItem(i)))
            }
            setCards(newArr)
        }
        myCards.map(card => {
            localStorage.setItem(String(card?.id), JSON.stringify(card))
        })

        const newArr = []

        for (let i = 1; i < 25; i++) {
            newArr.push(JSON.parse(localStorage.getItem(i)))
        }
        setCards(newArr)
    }, [])

    localStorage.clear()
    return (
        <Wrapper back={changeBack}>
            {openModal
            ?
            <Modal openCard={openCard} setOpenModal={setOpenModal} cards={cards} setCards={setCards} />
        :
        <>
            <PreViewer
                cards={cards}
                sortCards={sortCards}
                dragStartHandler={dragStartHandler}
                dragLeaveHandler={dragLeaveHandler}
                dragOverHandler={dragOverHandler}
                dragEndHandler={dragEndHandler}
                dropHandler={dropHandler}
                changeBack={changeBack}
                />
                <InstaGrid
                cards={cards}
                sortCards={sortCards}
                dragStartHandler={dragStartHandler}
                dragLeaveHandler={dragLeaveHandler}
                dragOverHandler={dragOverHandler}
                dragEndHandler={dragEndHandler}
                dropHandler={dropHandler}
                changeBack={changeBack}
                setChangeBack={setChangeBack}
                handleOpen={handleOpen}
                />
                <Referencer changeBack={changeBack} />
        </>
        }
        </Wrapper>
    );
};

export default Planner;