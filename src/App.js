import './App.css';
import Content from './content';
import Header from './header.js';
import Footer from './footer.js';
import {useState} from "react";

function App() {
  const [items, setItems] = useState([
    {
        id:1,
        checked:true,
        name:'henry'
    },
    {
        id:2,
        checked:true,
        name:'jack'
    }
  ]);

  const [hello, setHello] = useState('');

  const handleClick = (id) =>{
    const duplicate = items.map((item) => item.id === id ? {...item,checked:!item.checked}:item);
    setItems(duplicate)
    //localStorage.setItems('list', JSON.stringify(duplicate));
  }

  const deleteHandler = (id) => {
    const ss = items.filter((item) => item.id !== id);
    setItems(ss)
  }
  
  const showType = (e) =>{
    console.log(e)
    let input = e.target.value
    return setHello(input)
  }

  return (
    <div className="App">
      <Header/>
      <Content 
        items = {items}
        hello = {hello}
        showType = {showType}
        handleClick = {handleClick}
        deleteHandler = {deleteHandler}
      />
      <Footer length  = {items.length}/>
    </div>
  );
}

export default App;
