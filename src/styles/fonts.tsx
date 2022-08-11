import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    /* poppins-300 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;    
      src: local(''),
           url('/fonts/poppins-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
           url('/fonts/poppins-v20-latin-300.woff') format('woff'), /* Modern Browsers */
           url('/fonts/poppins-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
           url('/fonts/poppins-v20-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
    }
    /* poppins-regular - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;    
      src: local(''),          
           url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
           url('/fonts/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
           url('/fonts/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
           url('/fonts/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
    }
    /* poppins-600 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;   
      src: local(''),     
           url('/fonts/poppins-v20-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
           url('/fonts/poppins-v20-latin-600.woff') format('woff'), /* Modern Browsers */
           url('/fonts/poppins-v20-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
           url('/fonts/poppins-v20-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
    }
      `}
  />
);

export default Fonts;
