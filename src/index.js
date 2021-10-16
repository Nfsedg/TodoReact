import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App/index';

// const e = React.createElement
// function App() {
//   return (
//     <h1 id="title">
//       Oli React
//     </h1>
//     // React.createElement('h1', {id:'title'}, 'Oil React') Es lo mismo que lo de arriba, igual HTML
//   );
// }

// ReactDOM.render(e(LikedButton), root);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);