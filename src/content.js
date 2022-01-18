import { useState } from "react"

const Content = () => {
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

    const [input, setInput] = useState('');

    const handleClick = (id) =>{
        const duplicate = items.map((item) => item.id === id ? {...item,checked:!item.checked}:item);
        setItems(duplicate)
        localStorage.setItem('list', JSON.stringify(duplicate));
    }

    const inputHandler = (event) => {
        console.log(event.target.value)
        setInput(event.target.value)
    }

    const deleteHandler = (id) => {
        const ss = items.filter((item) => item.id !== id);
        setItems(ss)
    }

    return (
        <main>
            <ul>
                {items.map((item) =>
                <li key = {item.id}>
                    <input type = "checkbox" checked = {item.checked} onChange = {() => handleClick(item.id)}/>
                    <span>{item.name}</span>
                    <button onClick ={()=> deleteHandler(item.id)}>Delete</button>
                </li>
            )}
            <input onChange = {(e)=> inputHandler(e)}/>
            <div>{input}</div>
            </ul>
        </main>
    )
}

export default Content
