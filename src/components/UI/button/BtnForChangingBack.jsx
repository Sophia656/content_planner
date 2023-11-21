import React from 'react';
import { Button } from './styled';


const BtnForChangingBack = ({changeBack, setChangeBack}) => {
    const handleChangeBack = () => {
        setChangeBack(!changeBack)
    }

    return (
        <Button btnback={changeBack} onClick={() => handleChangeBack()} />
    );
};

export default BtnForChangingBack;