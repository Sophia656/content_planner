import React from 'react';
import { Btn, Cell, Wrapper } from './styled';
import { RED, YELLOW, YELLOW_GREEN, GREEN, ORANGE, ORANGE_YELLOW} from '../colors/index'
const Statistics = ({showStatistics}) => {
    return (
        <Wrapper hidden={showStatistics}>
            <Cell hidden={showStatistics}>DAY<br/>TIME</Cell>
            <Cell hidden={showStatistics} back={RED}>11-13</Cell>
            <Cell hidden={showStatistics} back={ORANGE}>13-15</Cell>
            <Cell hidden={showStatistics} back={GREEN}>15-17</Cell>
            <Cell hidden={showStatistics} back={YELLOW}>17-19</Cell>
            <Cell hidden={showStatistics} back={YELLOW}>19+</Cell>
            <Cell hidden={showStatistics} back={RED}>ПН<br/>19%</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics}>19%</Cell>
            <Cell hidden={showStatistics}>19%</Cell>
            <Cell hidden={showStatistics} back={GREEN}>25%</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics} back={ORANGE}>ВТ<br/>20%</Cell>
            <Cell hidden={showStatistics}>15%</Cell>
            <Cell hidden={showStatistics}>18%</Cell>
            <Cell hidden={showStatistics}>22%</Cell>
            <Cell hidden={showStatistics}>21%</Cell>
            <Cell hidden={showStatistics} back={GREEN}>23%</Cell>
            <Cell hidden={showStatistics} back={YELLOW}>СР<br/>24%</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics}>22%</Cell>
            <Cell hidden={showStatistics}>25%</Cell>
            <Cell hidden={showStatistics} back={GREEN}>27%</Cell>
            <Cell hidden={showStatistics}>24%</Cell>
            <Cell hidden={showStatistics} back={ORANGE_YELLOW}>ЧТ<br/>22%</Cell>
            <Cell hidden={showStatistics}>16%</Cell>
            <Cell hidden={showStatistics}>22%</Cell>
            <Cell hidden={showStatistics} back={GREEN}>29%</Cell>
            <Cell hidden={showStatistics}>13%</Cell>
            <Cell hidden={showStatistics}>20%</Cell>
            <Cell hidden={showStatistics} back={YELLOW}>ПТ<br/>24%</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics} back={GREEN}>26%</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics}>19%</Cell>
            <Cell hidden={showStatistics} back={GREEN}>СБ<br/>30%</Cell>
            <Cell hidden={showStatistics} back={GREEN}>31%</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics}>29%</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics}>30%</Cell>
            <Cell hidden={showStatistics} back={YELLOW_GREEN}>ВС<br/>26%</Cell>
            <Cell hidden={showStatistics}>-</Cell>
            <Cell hidden={showStatistics}>26%</Cell>
            <Cell hidden={showStatistics}>25%</Cell>
            <Cell hidden={showStatistics} back={GREEN}>29%</Cell>
            <Cell hidden={showStatistics}>24%</Cell>
        </Wrapper>
    );
};

export default Statistics;