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
    const [showPrev, setShowPrev] = useState(true)
    const [showRef, setShowRef] = useState(true)
    const [counterMaxGridCards, setCounterMaxGridCards] = useState(0)
    const defaultCard = {id: 64, src: '', w: '', h: '', text: '', tags: ''}
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
                if (c.id > 63 && c.id < counterMaxGridCards + 1) {
                    for (let i = counterMaxGridCards; i > 63; i--) {
                        if (c.id === i && c.id !== 64) {
                            localStorage.setItem(String(c.id), JSON.stringify({...c, src: cards.find(p => p.id === i - 1).src, w: cards.find(p => p.id === i - 1).w, h: cards.find(p => p.id === i - 1).h}))
                            return {...c, src: cards.find(p => p.id === i - 1).src, w: cards.find(p => p.id === i - 1).w, h: cards.find(p => p.id === i - 1).h}
                        } 
                        if (c.id === 64) {
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
        newArr.push(...cards.filter(card => card.id < 61)) // 1 - 60
        newArr.push(...cards.filter(card => card.id < 64 && card.id > 60)) // 61 - 63
        newArr.push(defaultCard) // 64
        const newLastCards = 
            cards.map(card => {
                if (card.id > 63) {
                    return {...card, id: ++card.id}
                }
                else {
                    return card
                }
            }).filter(card => card.id > 64)
        newArr.push(...newLastCards) // 64 -
        newArr.forEach(item => {
            if (item.id > 63 && item.id < 500) {
                localStorage.setItem(String(item?.id), JSON.stringify(item))
            }
        })
        setCards(newArr)
    }
    console.log(counterMaxGridCards)

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
            console.log('LOCARL STRAGE IS NOT EMPTY', allStorage())
            setCounterMaxGridCards(allStorage().length)
            setCards(allStorage())
        } else {
            console.log('LOCARL STRAGE IS EMPTY', allStorage())
            myCards.map(card => {
                localStorage.setItem(String(card?.id), JSON.stringify(card))
            })
            setCounterMaxGridCards(myCards.length)
            setCards(allStorage())
        }
    }, [])

    useEffect(() => {
        if (openModal) {
            console.log('open')
            setText(JSON.parse(localStorage.getItem(String(openCard?.id)))?.text)
            setTags(JSON.parse(localStorage.getItem(String(openCard?.id)))?.tags)
            // if (text) {
                localStorage.setItem(String(openCard?.id), JSON.stringify({...openCard, text: text, tags: tags}))
            // }
            // if (tags) {
                // localStorage.setItem(String(openCard?.id), JSON.stringify({...openCard, tags: tags}))
            // }
        }
        if (!openModal) {
            console.log('close')
            setText('')
            setTags('#')
        }
    }, [openModal])

    // useEffect(() => {
    //     if (text) {
    //             localStorage.setItem(String(openCard?.id), JSON.stringify({...openCard, text: text}))
    //         }
    //         if (tags) {
    //             localStorage.setItem(String(openCard?.id), JSON.stringify({...openCard, tags: tags}))
    //         }
    // }, [text, tags])

    // const handlePressPrev = () => {
        
    // }

    // localStorage.clear()
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