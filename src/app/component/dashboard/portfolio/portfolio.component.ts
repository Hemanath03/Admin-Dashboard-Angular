import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
//import * as Chart from 'chart.js';



interface MyData {
  name: string;
  picturePath: string;
  oneHourChange: number;
  twentyFourHourChange: number;
  sevenDayChange: number;
  marketCap: number;
  volume: number;
  circulationSupply: number;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  // data list
  myDataList: MyData[] = [
    {
      name: "Bitcoin",
      picturePath: "assets/img/bitcoin.png",
      oneHourChange: 2.34,
      twentyFourHourChange: -1.15,
      sevenDayChange: 5.67,
      marketCap: 86000000000,
      volume: 2800000000,
      circulationSupply: 18700000
    },
    {
      name: "Ethereum",
      picturePath: "assets/img/ethereum.png",
      oneHourChange: -1.05,
      twentyFourHourChange: 3.76,
      sevenDayChange: 8.91,
      marketCap: 30000000000,
      volume: 1200000000,
      circulationSupply: 115000000
    },
    {
      name: "Binance Coin (BNB)",
      picturePath: "assets/img/bnb.png",
      oneHourChange: 1.23,
      twentyFourHourChange: -0.67,
      sevenDayChange: 4.56,
      marketCap: 20000000000,
      volume: 800000000,
      circulationSupply: 100000000
    },
    {
      name: "tether (USDT)",
      picturePath: "assets/img/tether.png",
      oneHourChange: 1.23,
      twentyFourHourChange: -0.67,
      sevenDayChange: 4.56,
      marketCap: 20000000000,
      volume: 800000000,
      circulationSupply: 100000000
    },
    {
      name: "Ripple (XRP)",
      picturePath: "assets/img/xrp.png",
      oneHourChange: -0.95,
      twentyFourHourChange: 2.34,
      sevenDayChange: 6.78,
      marketCap: 15000000000,
      volume: 600000000,
      circulationSupply: 900000000
    },
    {
      name: "Cardano (ADA)",
      picturePath: "assets/img/ada.png",
      oneHourChange: 0.56,
      twentyFourHourChange: 1.78,
      sevenDayChange: -2.43,
      marketCap: 10000000000,
      volume: 400000000,
      circulationSupply: 800000000
    },
    {
      name: "Dogecoin (DOGE)",
      picturePath: "assets/img/doge.png",
      oneHourChange: 3.45,
      twentyFourHourChange: -1.23,
      sevenDayChange: 0.89,
      marketCap: 8000000000,
      volume: 300000000,
      circulationSupply: 700000000
    },
    {
      name: "Polkadot (DOT)",
      picturePath: "assets/img/dot.png",
      oneHourChange: -0.34,
      twentyFourHourChange: 1.56,
      sevenDayChange: -3.21,
      marketCap: 6000000000,
      volume: 200000000,
      circulationSupply: 600000000
    },
    {
      name: "Litecoin (LTC)",
      picturePath: "assets/img/ltc.png",
      oneHourChange: 0.12,
      twentyFourHourChange: 1.45,
      sevenDayChange: -0.78,
      marketCap: 5000000000,
      volume: 150000000,
      circulationSupply: 500000000
    },
    {
      name: "Stellar (XLM)",
      picturePath: "assets/img/xlm.png",
      oneHourChange: 0.67,
      twentyFourHourChange: 1.34,
      sevenDayChange: 3.21,
      marketCap: 4000000000,
      volume: 100000000,
      circulationSupply: 400000000
    },
    {
      name: "Kava (kava)",
      picturePath: "assets/img/kava.png",
      oneHourChange: -0.45,
      twentyFourHourChange: 0.56,
      sevenDayChange: 1.23,
      marketCap: 3000000000,
      volume: 80000000,
      circulationSupply: 300000000
    },
    {
      name: "Filecoin (fil)",
      picturePath: "assets/img/filecoin.png",
      oneHourChange: -0.45,
      twentyFourHourChange: 0.56,
      sevenDayChange: 1.23,
      marketCap: 3000000000,
      volume: 80000000,
      circulationSupply: 300000000
    },
    {
      name: "Uniswap (UNI)",
      picturePath: "assets/img/uni.png",
      oneHourChange: 1.56,
      twentyFourHourChange: -0.34,
      sevenDayChange: 0.67,
      marketCap: 2000000000,
      volume: 50000000,
      circulationSupply: 200000000
    },
    {
      name: "Aave (AAVE)",
      picturePath: "assets/img/aave.png",
      oneHourChange: -0.89,
      twentyFourHourChange: 0.12,
      sevenDayChange: 1.45,
      marketCap: 1000000000,
      volume: 20000000,
      circulationSupply: 100000000
    },
    {
      name: "Cosmos (ATOM)",
      picturePath: "assets/img/atom.png",
      oneHourChange: 0.78,
      twentyFourHourChange: -0.56,
      sevenDayChange: -0.12,
      marketCap: 500000000,
      volume: 10000000,
      circulationSupply: 50000000
    },
    {
      name: "Monero (XMR)",
      picturePath: "assets/img/xmr.png",
      oneHourChange: -1.23,
      twentyFourHourChange: 0.45,
      sevenDayChange: 2.34,
      marketCap: 400000000,
      volume: 12000000,
      circulationSupply: 18000000
    },
    {
      name: "Algorand (Algo)",
      picturePath: "assets/img/algorand.png",
      oneHourChange: 0.89,
      twentyFourHourChange: -0.67,
      sevenDayChange: 3.56,
      marketCap: 350000000,
      volume: 11000000,
      circulationSupply: 60000000
    },
    {
      name: "IOTA (MIOTA)",
      picturePath: "assets/img/iota.png",
      oneHourChange: 1.12,
      twentyFourHourChange: -0.34,
      sevenDayChange: -1.45,
      marketCap: 320000000,
      volume: 10000000,
      circulationSupply: 270000000
    },
    {
      name: "Injective Protocol (INJ)",
      picturePath: "assets/img/inj.png",
      oneHourChange: -0.56,
      twentyFourHourChange: 1.56,
      sevenDayChange: 0.67,
      marketCap: 280000000,
      volume: 9000000,
      circulationSupply: 9000000
    },
    {
      name: "Elrond (EGLD)",
      picturePath: "assets/img/EGLD.png",
      oneHourChange: 1.45,
      twentyFourHourChange: 2.56,
      sevenDayChange: -0.78,
      marketCap: 250000000,
      volume: 8000000,
      circulationSupply: 800000000
    },
    {
      name: "Decentraland (MANA)",
      picturePath: "assets/img/MANA.png",
      oneHourChange: 0.34,
      twentyFourHourChange: -1.56,
      sevenDayChange: 2.67,
      marketCap: 230000000,
      volume: 7000000,
      circulationSupply: 4500000
    },
    {
      name: "FTX Token (FTT)",
      picturePath: "assets/img/FTT.png",
      oneHourChange: -0.78,
      twentyFourHourChange: 1.45,
      sevenDayChange: -0.34,
      marketCap: 210000000,
      volume: 6000000,
      circulationSupply: 10000000
    },
    {
      name: "Synthetix (SNX)",
      picturePath: "assets/img/snx.png",
      oneHourChange: 0.67,
      twentyFourHourChange: 1.34,
      sevenDayChange: 3.21,
      marketCap: 180000000,
      volume: 5000000,
      circulationSupply: 15000000
    },
    {
      name: "Tron (trx)",
      picturePath: "assets/img/tron.png",
      oneHourChange: 0.67,
      twentyFourHourChange: 1.34,
      sevenDayChange: 3.21,
      marketCap: 180000000,
      volume: 5000000,
      circulationSupply: 15000000
    },
    {
      name: "Solona (sol)",
      picturePath: "assets/img/solana.png",
      oneHourChange: 0.67,
      twentyFourHourChange: 1.34,
      sevenDayChange: 3.21,
      marketCap: 180000000,
      volume: 5000000,
      circulationSupply: 15000000
    },
    {
      name: "Polygon (matic)",
      picturePath: "assets/img/solana.png",
      oneHourChange: 0.67,
      twentyFourHourChange: 1.34,
      sevenDayChange: 3.21,
      marketCap: 180000000,
      volume: 5000000,
      circulationSupply: 15000000
    },
    {
      name: "Siacoin (SC)",
      picturePath: "assets/img/SC.png",
      oneHourChange: -1.23,
      twentyFourHourChange: 0.45,
      sevenDayChange: 2.34,
      marketCap: 160000000,
      volume: 4000000,
      circulationSupply: 1000000
    },
    {
      name: "Iotex (iotx)",
      picturePath: "assets/img/iotx.png",
      oneHourChange: 1.56,
      twentyFourHourChange: -0.67,
      sevenDayChange: 3.45,
      marketCap: 140000000,
      volume: 3000000,
      circulationSupply: 200000000
    }
    // Add more objects as needed

  ];

  // line chart
  lineChart = new Chart({
    chart: {
      type: 'line',
      backgroundColor: 'black',

    },
    title: {
      text: 'Cumulative pnl',
      style: {
        color: 'white'
      }
    },
    xAxis: {

      title: {
        text: 'Time',
        style: {
          color: 'white'
        }
      },
      labels: {
        style: {
          color: 'white'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Percentage',
        style: {
          color: 'white'
        }
      },
      labels: {
        style: {
          color: 'white'
        }
      }
    },
    credits: {
      enabled: true
    },
    series: [
      {
        name: 'Month',
        data: [0, 10, 2, 3, 6, 9, 17, 35, 20, 10, 15, 20],
        lineTension: 0.3,
        color: '#04a527'
      } as any,
      {
        name: 'days',
        data: [0, 20, 30, 5, 20, 16, 10, 2, 3, 6, 15, 5],
        lineTension: 0.3,
        color: 'yellow'
      } as any,
      {
        name: 'days',
        data: [0, 16, 15, 10, 35, 10, 6, 30, 17, 25, 3, 30,],
        lineTension: 0.5,
        color: 'blue'
      } as any
    ]
  })

  // pie chart spot
  Assets = new Chart({
    chart: {
      type: 'pie',
      backgroundColor: 'black',
    },
    title: {
      text: 'Total Assets',
      style: {
        color: 'white'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f}%',
          distance: -50,
          y: -30,
          style: {
            color: 'white',
          }
        }
      }
    },
    series: [
      {
        name: 'Holdings %',
        data: [
          ['Spot', 50],
          ['Derivatives', 15],
          ['Funding', 10],
          ['Grid', 5],
          ['Copy Trading', 15],
          ['NFTs', 5]
        ]
      } as any
    ]
  });

  // holdings
  Holdings = new Chart({
    chart: {
      type: 'pie',
      backgroundColor: 'black',
    },
    title: {
      text: 'Portfolio',
      style: {
        color: 'white'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f}%',
          distance: -50,
          y: -20,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        center: ['50%', '50%']



      }
    },
    series: [
      {
        name: 'Holdings %',
        data: [
          ['BTC', 20],
          ['ETH', 25],
          ['BNB', 15],
          ['USDT', 10],
          ['HT', 5],
          ['Dot', 3],
          ['Tokens', 5],
          ['Others', 17]
        ]
      } as any
    ]
  });

}

