import ItemList from "./itemsList"

const Content = ({items, showType, hello, handleClick, deleteHandler}) => {
    return (
        <main>
            <ul>
                {items.map((item) =>
                <ItemList 
                key = {item.id}
                item = {item}
                handleClick={handleClick}
                deleteHandler={deleteHandler}
                />
            )}
            </ul>
            <input onChange ={showType}/>{hello}
        </main>
    )
}

export default Content
