const Content = ({userColor, setuserColor, changeColor}) => {
    let style = {
        background:userColor,
        width:'300px',
        height:'300px',
        borderStyle: 'solid'
    }
    return (
        <main>
            <div style = {style}>
                <h1>{userColor}</h1>
            </div>
            <form>
                <input
                autofocus
                placeholder = 'Choose a Color'
                onChange={(e)=>changeColor(e)}
                />
            </form>
        </main>
    )
}

export default Content
