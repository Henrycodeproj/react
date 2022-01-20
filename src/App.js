import './App.css';
import Content from './content';
import Header from './header.js';
import Footer from './footer.js';
import {useState} from "react";

function App() {
  const [userColor, setuserColor] = useState('')

  const changeColor = (e) =>{
    setuserColor(e.target.value)
  }

  return (
    <div className="App">
      <Header/>
      <Content 
        userColor={userColor}
        setuserColor = {setuserColor}
        changeColor = {changeColor}
      />
    </div>
  );
}

export default App;
