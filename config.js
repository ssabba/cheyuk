'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/ssabba/cl1elq03l000p14nwnnmjgotk',
  accessToken:
    'pk.eyJ1Ijoic3NhYmJhIiwiYSI6ImNrZGxmYmVsbjB4eWYzM2p2M3pmbGc3Y3QifQ.9CoHhlnMsTf2OxrTv1GoEA',
  CSV: './Sample_Data.csv',
  center: [-232.091744,37.709007],
  zoom: 13,
  title: '목록에서 탐색',
  description: '',
  sideBarInfo: ['Location_Name','Photo', 'text'],
  popupInfo: ['Location_Name', 'Phone', 'Address','Homepage' ],
  filters: [
    {
      type: 'dropdown',
      title: '종목선택',
      columnHeader: 'Cate',
      listItems: [
          '수영',
          '헬스', 
          '암벽'                 
      ],
    },
    {
      type: 'checkbox',
      title: '종목2',
      columnHeader: 'Cate2', // Case sensitive - must match spreadsheet entry
      listItems: ['농구', '축구', '족구'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: '종목3',
      columnHeader: 'Cate3',
      listItems: [
        '배드민턴',
        '테니스'        
      ],
    },
  ],
};
