
function Header (props) {
    return (
        <div className="Header">
        <h1> {props.title}</h1>
        <div> {props.subtitle}</div>
        <p> {props.totalPosts}</p>
        </div>
    

        
    )

}

export default Header