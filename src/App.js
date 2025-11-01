import React from 'react'
import NavBar from './Components/UI/navbar/NavBar';
import Info from './Components/UI/welcomeblock/Info';
import About from './Components/UI/aboutme/About';
import './Styles/App.css'
import MyFooter from './Components/UI/footer/MyFooter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Info/>
      <About/>
      
      
      
      <MyFooter/>
    </div>
  );
}

export default App;
