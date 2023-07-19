const NavBar = () => {

    return (
        <ul style={{
            width: "100%",
            height: "50px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",

        }}>
            <li style={{listStyle: "none", cursor: "pointer"}}>Inicio</li>
            <li style={{listStyle: "none", cursor: "pointer"}}>Nosotros</li>
            <li style={{listStyle: "none", cursor: "pointer"}}>Contacto</li>
        </ul>
        
    )



}
export default NavBar