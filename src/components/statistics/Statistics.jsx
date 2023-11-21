import React, { useState } from 'react';
import { DataItemWrap, Desc, Wrapper } from './styled';
import LineChart from '../UI/line-chart/LineChart';
import { StatisticsData } from './data';

const Statistics = ({showStatistics}) => {
    const [mondayData, setMondayData] = useState({
        labels: StatisticsData[0].time.map(i => i.time),
        datasets: [
            {
            label: 'MONDAY',
            data: StatisticsData[0].time.map(i => i.coverage),
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: 5
            },
        ],
        options: {
            color: 'black',
        }
    })

    const [tuesdayData, setTuedayData] = useState({
        labels: StatisticsData[1].time.map((i) => i.time),
        datasets: [
            {
            label: 'TUESDAY',
            data: StatisticsData[1].time.map((i) => i.coverage),
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: 5
            },
        ],
        options: {
            color: 'black',
        }
    })

    const [wednesdayData, setWednesdayData] = useState({
        labels: StatisticsData[2].time.map((i) => i.time),
        datasets: [
            {
            label: 'WEDNESDAY',
            data: StatisticsData[2].time.map((i) => i.coverage),
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
            },
        ],
        options: {
            color: 'black',
        }
    })

    const [thursdayData, setThursdayData] = useState({
        labels: StatisticsData[3].time.map((i) => i.time),
        datasets: [
            {
            label: 'THURSDAY',
            data: StatisticsData[3].time.map((i) => i.coverage),
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
            },
        ],
        options: {
            color: 'black',
        }
    })

    const [fridayData, setFridayData] = useState({
        labels: StatisticsData[4].time.map((i) => i.time),
        datasets: [
            {
            label: 'FRIDAY',
            data: StatisticsData[4].time.map((i) => i.coverage),
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
            },
        ],
        options: {
            color: 'black',
        }
    })
    const [saturdayData, setSaturdayData] = useState({
        labels: StatisticsData[5].time.map((i) => i.time),
        datasets: [
            {
            label: 'SATURDAY',
            data: StatisticsData[5].time.map((i) => i.coverage),
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
            },
        ]
    })
    const [sundayData, setSundayData] = useState({
        labels: StatisticsData[6].time.map((i) => i.time),
        datasets: [
            {
            label: 'SUNDAY',
            data: StatisticsData[6].time.map((i) => i.coverage),
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: 5
            },
        ],
        options: {
            color: 'black',
        }
    })

    return (
        <Wrapper hidden={showStatistics}>
            <Desc hidden={showStatistics}><span>LAST UPDATE - </span>11.09.23</Desc>
            <DataItemWrap>
                <LineChart chartData={mondayData} dataOptions={mondayData.options} />
            </DataItemWrap>
            <DataItemWrap>
                <LineChart chartData={tuesdayData} dataOptions={mondayData.options} />
            </DataItemWrap>
            <DataItemWrap>
                <LineChart chartData={wednesdayData} dataOptions={mondayData.options} />
            </DataItemWrap>
            <DataItemWrap>
                <LineChart chartData={thursdayData} dataOptions={mondayData.options} />
            </DataItemWrap>
            <DataItemWrap>
                <LineChart chartData={fridayData} dataOptions={mondayData.options} />
            </DataItemWrap>
            <DataItemWrap>
                <LineChart chartData={saturdayData} dataOptions={mondayData.options} />
            </DataItemWrap>
            <DataItemWrap>
                <LineChart chartData={sundayData} dataOptions={mondayData.options} />
            </DataItemWrap>
        </Wrapper>
    );
};

export default Statistics;