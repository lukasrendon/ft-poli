import logo from "../../assets/logo-politecnico-grancolombiano-white.svg";

const Footer = () => {
    return(
        <div id="footer">
            <a href="/">
                <img src={logo} alt="Politecnico Gran Colombiano" height={60} width="auto" />
            </a>
            <div className="slogan">Somos diferentes, <strong>somos Poli.</strong></div>
        </div>
    )
}
export default Footer;