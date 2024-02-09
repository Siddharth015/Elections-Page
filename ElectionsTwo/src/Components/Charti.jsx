import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { ArcElement, CategoryScale, Title, Tooltip } from 'chart.js';

Chart.register(ArcElement, CategoryScale, Title, Tooltip);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'right',
    },
  },
};

const Charti = () => (
  <>
    
      <div style={{ width: 500, height: 170, left: 950, top:500, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.09) 0%, rgba(113.04, 113.04, 113.04, 0) 100%)' }} />
  
      <div style={{ width: 96, height: 19, left: 526, top: 171, position: 'absolute', textAlign: 'center', color: '#988DFF', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Contestant 2</div>
      <div style={{ width: 96, height: 19, left: 518, top: 125, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Contestant 3</div>
      <div style={{ width: 93, height: 27, left: 394, top: 144, position: 'absolute', textAlign: 'center', color: '#CCF6E0', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Contestant 1</div>
      <div style={{ width: 353, height: 139, left: 11, top: 24, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Krona One', fontWeight: '400', wordWrap: 'break-word' }}>Distribution <br />of Votes </div>
      <div style={{ width: 261, height: 260, left: 365, top: 28, position: 'absolute' }}>
        <div style={{ width: 261, height: 260, left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
         
          <div style={{width: '200px', height: '80px', position: 'fixed', bottom: 0, right: 0}}>
          <Pie data={data} options={options} />
        </div>
        </div>
      </div>
    
  </>
);
export default Charti;