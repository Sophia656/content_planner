import React, { useEffect, useState } from 'react';
import { LeftCloser, RightCloser, Wrapper } from './styled';
import InstaGrid from '../components/insta-grid/InstaGrid';
import PreViewer from '../components/pre-viewer/PreViewer';
import Referencer from '../components/referencer/Referencer';
import Modal from '../components/modal/Modal';
import { myCards } from '../localstorage/localStorage';

const Planner = () => {
    const [changeBack, setChangeBack] = useState(true)
    const [openCard, setOpenCard] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [showPrev, setShowPrev] = useState(false)
    const [showRef, setShowRef] = useState(false)
    const [counterMaxGridCards, setCounterMaxGridCards] = useState(0)
    const defaultCard = {id: 103, src: '', w: '', h: '', text: '', tags: ''}
    const [text, setText] = useState('')
    const [tags, setTags] = useState('#')
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

        if (currentCard.id === counterMaxGridCards && card.id === counterMaxGridCards + 1) {
            setCards(cards.reverse().map(c => {
                if (c.id > 102 && c.id < counterMaxGridCards + 1) {
                    for (let i = counterMaxGridCards; i > 102; i--) {
                        if (c.id === i && c.id !== 103) {
                            localStorage.setItem(String(c.id), JSON.stringify({...c, src: cards.find(p => p.id === i - 1).src, w: cards.find(p => p.id === i - 1).w, h: cards.find(p => p.id === i - 1).h}))
                            return {...c, src: cards.find(p => p.id === i - 1).src, w: cards.find(p => p.id === i - 1).w, h: cards.find(p => p.id === i - 1).h}
                        } 
                        if (c.id === 103) {
                            localStorage.setItem(String(c.id), JSON.stringify({...c, src: ''}))
                            return {...c, src: ''}
                        }
                    }
                }
                return c
            }))

        }
        else {
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

    const handlePressNext = () => {
        setCounterMaxGridCards(counterMaxGridCards => counterMaxGridCards + 1)
        const newArr = []
        newArr.push(...cards.filter(card => card.id < 100)) // 1 - 100 (prev)
        newArr.push(...cards.filter(card => card.id < 103 && card.id > 99)) // 100 - 102 (grid, закреп)
        newArr.push(defaultCard) // пустая
        const newLastCards = 
            cards.map(card => {
                if (card.id > 102) {
                    return {...card, id: ++card.id}
                }
                else {
                    return card
                }
            }).filter(card => card.id > 103)
        newArr.push(...newLastCards) // остаток сдвигаем
        newArr.forEach(item => {
            if (item.id > 102 && item.id < 500) {
                localStorage.setItem(String(item?.id), JSON.stringify(item))
            }
        })
        setCards(newArr)
    }

    const handlePressPrev = () => {
        const newArr = []
        newArr.push(...cards.filter(card => card.id < 103))
        const newLastCards = cards.filter(card => card.id !== 103)
            
        newArr.push(...newLastCards.map(card => {
            if (card.id > 103) {
                return {...card, id: --card.id}
            }
            else {
                return card
            }
        }).filter(card => card.id > 102))
        newArr.forEach(item => {
            if (item.id > 102 && item.id < 500) {
                localStorage.setItem(String(item?.id), JSON.stringify(item))
            }
        })
        setCards(newArr)
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
        setOpenCard(card)
        setOpenModal(true)
    }

    function allStorage() {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( JSON.parse(localStorage.getItem(keys[i]) ));
        }
    
        return values;
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('1') !== null)) {
            setCounterMaxGridCards(allStorage().length)
            setCards(allStorage())
        } else {
            myCards.map(card => {
                localStorage.setItem(String(card?.id), JSON.stringify(card))
            })
            setCounterMaxGridCards(myCards.length)
            setCards(allStorage())
        }
    }, [])

    useEffect(() => {
        if (openModal) {
            setText(JSON.parse(localStorage.getItem(String(openCard?.id)))?.text)
            setTags(JSON.parse(localStorage.getItem(String(openCard?.id)))?.tags)
            localStorage.setItem(String(openCard?.id), JSON.stringify({...openCard, text: text, tags: tags}))
        }
        if (!openModal) {
            setText('')
            setTags('#')
        }
    }, [openModal])

    localStorage.clear()
    return (
        <Wrapper back={changeBack}>
            {openModal
            ?
            <Modal 
            text={text}
            setText={setText}
            tags={tags}
            setTags={setTags}
            openCard={openCard} 
            setOpenCard={setOpenCard}
            setOpenModal={setOpenModal} 
            cards={cards} 
            setCards={setCards} 
            />
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
                showPrev={showPrev}
                changeBack={changeBack}
                />
                <LeftCloser close={!showPrev} open={showPrev} onClick={() => setShowPrev(!showPrev)}>{showPrev ? `<` : `>`}</LeftCloser>
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
                handlePressNext={handlePressNext}
                handlePressPrev={handlePressPrev}
                counterMaxGridCards={counterMaxGridCards}
                />
                <RightCloser click={!showRef} onClick={() => setShowRef(!showRef)}>{showRef ? `>` : `<`}</RightCloser>
                <Referencer show={showRef} />
        </>
        }
        </Wrapper>
    );
};

export default Planner;