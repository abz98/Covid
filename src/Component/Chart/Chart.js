import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
             
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false, },
          title: { display: true, text: `Current state in ${country}` }, scales: {
            xAxes: [{
                display: true,gridLines: {
                  display: true ,
                  color: "white"
                },
                scaleLabel: {   // To format the scale Lebel
                    display: true,
                    labelString: 'X axe name',
                    fontColor:'white',
                    fontSize:10
                },
                ticks: {
                   fontColor: "white", // To format the ticks, coming on the axis/lables which we are passing.
                   fontSize: 14
                  }
            }],
            yAxes: [{
                display: true,gridLines: {
                  display: true ,
                  color: "white"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Y axe name',
                    fontColor: 'white',
                    fontSize:10
                },
                ticks: {
                      fontColor: "white",
                      fontSize: 5
                }
            }]
     }
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }} 
        options={{
          legend: { display: true, },
          scales: {
            xAxes: [{
                gridLines: {
                  display: true ,
                  color: "red"
                },
                scaleLabel: {   // To format the scale Lebel
                    display: true,
                    labelString: 'X axe name',
                    fontColor:'green',
                    fontSize:10
                },
                ticks: {
                   display:true,
                   fontColor: "yellow", // To format the ticks, coming on the axis/lables which we are passing.
                   fontSize: 5
                  }
            }],
            yAxes: [{
                gridLines: {
                  display: true ,
                  color: "red"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Y axe name',
                    fontColor: 'green',
                    fontSize:10
                },
                ticks: {
                  display:true,
                      fontColor: "green",
                      fontSize: 5
                }
            }]
     }
        }}
      />
    ) : null
  );

  return (
    <div  className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;




/* options: { 
  legend: {
      labels: {
          fontColor: "blue",
          fontSize: 18
      }
  } */