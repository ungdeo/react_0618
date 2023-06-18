function First(){
    const name = "React";

    const ulStyle = {
        color : "orange",
        border : "1px solid blue"
    }

    return (
        <div className="container" 
            style={{ color : "red" ,background : "skyblue" }}
        >
        <div>First {name}</div>
        <ul style={ulStyle}>
            <li>apple</li>
            <li>fineApple</li>
            <li>banana</li>
        </ul>
        </div>
    )
}

export default First;