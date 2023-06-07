import React, { useState } from 'react';
import { Wrapper } from './styled';
import InstaGrid from '../components/insta-grid/InstaGrid';
import PreViewer from '../components/pre-viewer/PreViewer';
import Referencer from '../components/referencer/Referencer';

const Planner = () => {
    const [changeBack, setChangeBack] = useState(false)

    const [cards, setCards] = useState([
            {id: 1, src: require('../img/prev/1.jpg'), w: '', h: ''},
            {id: 2, src: require('../img/prev/3.jpg'), w: '', h: ''},
            {id: 3, src: require('../img/prev/10.jpg'), w: '', h: ''},
            {id: 4, src: require('../img/prev/4.jpg'), w: '', h: ''},
            {id: 5, src: require('../img/prev/5.jpg'), w: '', h: ''},
            {id: 6, src: require('../img/prev/7.jpg'), w: '', h: ''},
            {id: 7, src: require('../img/main/6.jpg'), w: '', h: ''},
            {id: 8, src: require('../img/prev/8.jpg'), w: '', h: ''},

            {id: 9, src: require('../img/main/4.jpg'), w: '', h: ''},
            {id: 10, src: require('../img/main/5.jpg'), w: '', h: ''},
            {id: 11, src: require('../img/main/3.jpg'), w: 'auto', h: 'inherit'},
            {id: 12, src: '', w: '', h: ''},
            {id: 13, src: require('../img/main/7.jpg'), w: 'auto', h: 'inherit'},
            {id: 14, src: require('../img/main/8.jpg'), w: '', h: ''},
            {id: 15, src: require('../img/main/9.jpg'), w: '', h: ''},
            {id: 16, src: require('../img/main/10.jpg'), w: 'auto', h: 'inherit'},
            {id: 17, src: require('../img/main/11.jpg'), w: '', h: ''},
            {id: 18, src: require('../img/main/12.jpg'), w: '', h: ''},
            {id: 19, src: require('../img/main/13.jpg'), w: 'auto', h: 'inherit'},
            {id: 20, src: require('../img/main/14.jpg'), w: 'auto', h: 'inherit'},
            {id: 21, src: require('../img/main/15.jpg'), w: '', h: ''},
            {id: 22, src: require('../img/main/16.jpg'), w: '', h: ''},
            {id: 23, src: require('../img/main/17.jpg'), w: '', h: ''},
            
            {id: 24, src: require('../img/backet.png'), w: '6vw', h: 'auto'}
    ])

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
                            return {...c, src: cards.find(p => p.id === i - 1).src, w: cards.find(p => p.id === i - 1).w, h: cards.find(p => p.id === i - 1).h}
                        } 
                        if (c.id === 12) {
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
                    return {...c, id: currentCard.id}
                }
                if (c.id === currentCard.id) {
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

    return (
        <Wrapper back={changeBack}>
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
            />
            <Referencer changeBack={changeBack} />
        </Wrapper>
    );
};

export default Planner;