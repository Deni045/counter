import Logo from "./Logo";
import Menu from "./Menu";

function Header(){
    return(
        <div className="menu">
            <Logo/>
            <Menu/>
        </div>
    )
}

export default Header;