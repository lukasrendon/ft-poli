 import logo from "../../assets/logo-politecnico-grancolombiano-white.svg";
 const Header = () =>{
    return(
        <div id="header">
            <a href="/">
                <img src={logo} alt="Politecnico Gran Colombiano" height={60} width="auto" />
            </a>
        </div>
    )
}
export default Header;