import React, { useEffect, useState } from 'react';
import { Desc, DescItem, DescItemsWrap, MyCurcle, Wrapper } from './styled';
import PieChart from '../UI/pie-chart/PieChart';

const CurrentStatistics = ({showCurrStatistics, card}) => {
    const [cardObjNum, setCardObjNum] = useState(8)

    const handlePressPrev = () => {
        if (cardObjNum === 1) {
            setCardObjNum(8)
        } else if (card?.currStatistic?.[cardObjNum - 1]?.period === '-'){
            setCardObjNum(cardObjNum)
        } else {
            setCardObjNum(cardObjNum => --cardObjNum)
        }
    }

    const handlePressNext = () => {
        if (cardObjNum === 8) {
            setCardObjNum(8)
        } else {
            setCardObjNum(cardObjNum => ++cardObjNum)
        }
    }

    document.onkeydown = checkKey;

    function checkKey(e) {
  
        e = e || window.event;

        if (e.keyCode === 37) {
            handlePressPrev()
        } else if (e.keyCode === 39) {
            handlePressNext()
        }

    }

    const [cardData, setCardData] = useState({
        labels: ['subs', 'nonsubs'],
        datasets: [
            {
            ladel: ['subs', 'nonsubs'],
            data: [card?.currStatistic?.[cardObjNum]?.subs, card?.currStatistic?.[cardObjNum]?.nonsubs],
            backgroundColor: ['rgb(26, 109, 217)', 'rgb(5, 25, 51)'],
            borderColor: ['rgb(0, 0, 0, 0.1)']
            },
        ],
        options: {
            color: 'black',
        }
    })

    useEffect(() => {
        setCardData({
            labels: ['subs', 'nonsubs'],
            datasets: [
                {
                ladel: ['subs', 'nonsubs'],
                data: [card?.currStatistic?.[cardObjNum]?.subs, card?.currStatistic?.[cardObjNum]?.nonsubs],
                backgroundColor: ['rgb(26, 109, 217)', 'rgb(5, 25, 51)'],
                borderColor: ['rgb(0, 0, 0, 0.1)']
                },
            ],
            options: {
                color: 'black',
            }
        })
    }, [card, cardObjNum])

    return (
        <Wrapper hidden={showCurrStatistics}>
            <Desc hidden={showCurrStatistics}><span>CURRENT CARD ID - </span>{card?.id} <br/><span> DATE OF UPDATE - </span>{card?.currStatistic?.[cardObjNum]?.period}</Desc>
            <MyCurcle>
                <PieChart chartData={cardData} dataOptions={cardData.options} />
            </MyCurcle>
            <DescItemsWrap hidden={showCurrStatistics}>
                <DescItem hidden={showCurrStatistics}><span>FROM PROFILE - </span>{card?.currStatistic?.[cardObjNum]?.profile}</DescItem>
                <DescItem hidden={showCurrStatistics}><span>FROM THE MAIN PAGE - </span>{card?.currStatistic?.[cardObjNum]?.main}</DescItem>
                <DescItem hidden={showCurrStatistics}><span>FROM OTHER SOURCES - </span>{card?.currStatistic?.[cardObjNum]?.other}</DescItem>
            </DescItemsWrap>
            <DescItemsWrap hidden={showCurrStatistics}>
                <DescItem hidden={showCurrStatistics} style={{fontSize: '0.8rem', fontWeight: 200}}>COVERAGE, DAY n TIME OF PUBLICATION - {card?.engagement}</DescItem>
            </DescItemsWrap>
        </Wrapper>
    );
};

export default CurrentStatistics;