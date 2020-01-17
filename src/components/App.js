import React from 'react';

//assets
import '../assets/css/App.css';

//components
import Header from "./global/Header";
import Content from "./global/Content";
import Footer from "./global/Footer";



const App = ({children}) => {
  return (
    <div id="App">
      <Header/>
      <Content body={children}/>
     <Footer/> 
    </div>
  );
}

export default App;
