import React, { useEffect, useState } from 'react';
import { Desc, DescItem, DescItemsWrap, MyCurcle, Wrapper } from './styled';
import PieChart from '../UI/pie-chart/PieChart';

const CurrentStatistics = ({showCurrStatistics, card, cardObjNum, setCardObjNum}) => {
    
    const handlePressPrev = () => {
        if (cardObjNum === 1) {
            if (card?.currStatistic?.[2] === undefined) {
                setCardObjNum(1)
            } else {
                setCardObjNum(2)
            }
        }
    }

    const handlePressNext = () => {
        if (cardObjNum === 2) {
            setCardObjNum(1)
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
            data: [String(Math.round((parseInt(card?.currStatistic?.[cardObjNum]?.subs) * parseInt(card?.currStatistic?.[cardObjNum]?.totalViews)) / 100)), 
            String(Math.round((parseInt(card?.currStatistic?.[cardObjNum]?.nonsubs) * parseInt(card?.currStatistic?.[cardObjNum]?.totalViews)) / 100))],
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
                data: [String(Math.round((parseInt(card?.currStatistic?.[cardObjNum]?.subs) * parseInt(card?.currStatistic?.[cardObjNum]?.totalViews)) / 100)), 
                String(Math.round((parseInt(card?.currStatistic?.[cardObjNum]?.nonsubs) * parseInt(card?.currStatistic?.[cardObjNum]?.totalViews)) / 100))],
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
            <Desc hidden={showCurrStatistics}>{card?.id} <br/>{card?.currStatistic?.[cardObjNum]?.period} <br/>acc: {card?.currStatistic?.[cardObjNum]?.total} view: {card?.currStatistic?.[cardObjNum]?.totalViews}</Desc>
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