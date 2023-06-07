import React, { useEffect, useRef, useState } from 'react';
import { Closed, Description, ModalTable, Wrapper } from './styled';

const Modal = ({openCard,  setOpenModal, cards, setCards}) => {
    const [text, setText] = useState('')
    
    useEffect(() => {
        setCards(cards.map(card => {
            if (card.id === openCard.id) {
                localStorage.setItem(String(card.id), JSON.stringify({...card, text: text}))
                return {...card, text: text}
            }
            return card
        }))
    }, [text])


    return (
        <Wrapper>
            <Closed onClick={() => setOpenModal(false)}>✖️</Closed>
            <ModalTable>
                <Description type='text' value={text} onChange={e => setText(e.target.value)} />
            </ModalTable>
        </Wrapper>
    );
};

export default Modal;