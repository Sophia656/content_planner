import React from 'react';
import { CloseBtn, ImageItem, Wrapper } from './styled';

const PreModal = ({cardForPrevModal, setOpenPrevModal}) => {
    return (
        <Wrapper>
            <CloseBtn onClick={() => setOpenPrevModal(false)}>✖️</CloseBtn>
            <ImageItem src={cardForPrevModal} />
        </Wrapper>
    );
};

export default PreModal;