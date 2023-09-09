import React from 'react';
import { Btn, Cell, Wrapper } from './styled';

const Statistics = ({showStatistics}) => {
    return (
        <Wrapper hidden={showStatistics}>
            <Cell hidden={showStatistics}>DAY<br/>TIME</Cell>
            <Cell hidden={showStatistics}>11-14</Cell>
            <Cell hidden={showStatistics}>14-16</Cell>
            <Cell hidden={showStatistics}>16-18</Cell>
            <Cell hidden={showStatistics}>18-20</Cell>
            <Cell hidden={showStatistics} back='#ba3200b2'>ПН<br/>19%</Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics} back='#ba4100b2'>ВТ<br/>20%</Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics} back='#bab400b2'>СР<br/>24%</Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics} back='#ba6900b2'>ЧТ<br/>22%</Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics} back='#bab400b2'>ПТ<br/>24%</Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics} back='#22ba00b2'>СБ<br/>30%</Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics} back='#82ba00b2'>ВС<br/>26%</Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
            <Cell hidden={showStatistics}></Cell>
        </Wrapper>
    );
};

export default Statistics;