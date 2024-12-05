import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export { default as Button} from './components/Button/Button';  // Import Button from its folder
export { default as Label} from './components/Label/Label';  //  Import Label for easy import
export { default as Text} from './components/Text/Text';
export { default as Table} from './components/Table/Table';
export { default as Card} from './components/Card/Card';
export { default as Dropdown} from './components/Dropdown/Dropdown';
export { default as HeroImage} from './components/HeroImg/HeroImage';
export { default as Img} from './components/Img/Img';
export { default as RadioButton} from './components/RadioButton/RadioButton';