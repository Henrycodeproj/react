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
    const handleClick = (id) =>{
        console.log({...items})
        const duplicate = items.map((item) => item.id === id ? {...item,checked:!item.checked}:item);
        setItems(duplicate)
    }

    return (
        <main>
            <ul>
                {items.map((item) =>
                <li key = {item.id}>
                    <input type = "checkbox" checked = {item.checked} onChange = {() => handleClick(item.id)}/>
                    <span>{item.name}</span>
                </li>
            )}
            </ul>
        </main>
    )
}

export default Content
