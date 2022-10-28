import React from 'react';
import ReactDOM from 'react-dom/client';
import UseStatePractice from './UseStatePractice';
import UseEffectPractice from './UseEffectPractice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseStatePractice /> */}
    <UseEffectPractice />
  </React.StrictMode>
);

