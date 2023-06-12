import React from 'react';
import { Button } from './styled';


const BtnForChangingBack = ({changeBack, setChangeBack, r}) => {
    const handleChangeBack = () => {
        setChangeBack(!changeBack)
    }

    return (
        <Button r={r} btnback={changeBack} onClick={() => handleChangeBack()}>
            {changeBack ? '🌚️' : '🌝' }
        </Button>
    );
};

export default BtnForChangingBack;