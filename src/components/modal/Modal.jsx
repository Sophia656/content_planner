import React, { useEffect, useState } from 'react';
import { Closed, Description, ImgWrap, ModalImg, ModalTable, Tags, Text, WindowForImg, Wrapper } from './styled';
import BtnForChangingBack from '../UI/button/BtnForChangingBack';

const Modal = ({text, setText, tags, setTags, openCard, setOpenCard, setOpenModal, cards, setCards}) => {
    const [changeModalBack, setChangeModalBack] = useState(false)

    const handleKeyPress = (e) => {
        if (e.keyCode === 32) {
            e.preventDefault();
            setTags(tags + ' #')
        }
        console.log(tags)
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress)
        }
    })

    return (
        <Wrapper>
            <Closed onClick={() => setOpenModal(false)}>+</Closed>
            <ModalTable>
                <ImgWrap back={changeModalBack}>
                    <WindowForImg h={openCard.w === 'auto' && 'auto'}>
                        <ModalImg src={openCard?.src} />
                    </WindowForImg>
                    <BtnForChangingBack r='47%' changeBack={changeModalBack} setChangeBack={setChangeModalBack} />
                </ImgWrap>
                <Description>
                    <Text 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    placeholder='Enter text...' />
                    <Tags 
                    value={tags} 
                    handleKeyPress={((e) => handleKeyPress(e))}
                    onChange={e => setTags(e.target.value)}
                    placeholder='Enter tags...' />
                </Description>
            </ModalTable>
        </Wrapper>
    );
};

export default Modal;