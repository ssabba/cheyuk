'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/ssabba/cl1elq03l000p14nwnnmjgotk',
  accessToken:
    'pk.eyJ1Ijoic3NhYmJhIiwiYSI6ImNrZGxmYmVsbjB4eWYzM2p2M3pmbGc3Y3QifQ.9CoHhlnMsTf2OxrTv1GoEA',
  CSV: './Sample_Data.csv',
  center: [-232.091744,37.709007],
  zoom: 2,
  title: '목록에서 탐색',
  description: '',
  sideBarInfo: ['Location_Name','County'],
  popupInfo: ['Location_Name', 'Address', 'Phone'],
  filters: [
    {
      type: 'dropdown',
      title: 'Languages supported: ',
      columnHeader: 'Languages',
      listItems: [
        'Amharic',
        'ASL',
        'Cambodian',
        'Chinese',
        'Danish',
        'English',
        'French',
        'German',
        'Greek',
        'Hindi',
        'Italian',
        'Japanese',
        'Korean',
        'Language Line Services',
        'Norwegian',
        'Oriya',
        'Portuguese',
        'Punjabi',
        'Russian',
        'Somali',
        'Spanish',
        'Swedish',
        'Tagalog',
        'Thai',
        'Tigrinya',
        'Tongan',
        'Vietnamese',
        'Ukranian',
      ],
    },
    {
      type: 'checkbox',
      title: 'Devices available: ',
      columnHeader: 'Devices_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
        'Disabled',
        'Homeless',
        'Immigrants/Refugees',
        'Low Income',
        'Seniors',
        'Youth: Pre-teen',
        'Youth: Teen',
      ],
    },
  ],
};
