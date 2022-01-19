const ItemList = ({item, deleteHandler, handleClick}) =>{

    return (
        <li>
        <input type = "checkbox" checked = {item.checked} onChange = {() => handleClick(item.id)}/>
        <span>{item.name}</span>
        <button onClick ={()=> deleteHandler(item.id)}>Delete</button>
        </li>
    )

}

export default ItemList