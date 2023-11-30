
import logo from '../../assets/logo.svg'
import CartCounter from '../CartCounter/cartcounter'
import NavLink from './NavLink'

const items = [1,2,3]

const Navbar = () => {
    return (
        <header className="header">
            <div className="header_container">
                <img src={logo} alt="Logo"/>

                <nav className="navbar">
                    <NavLink href={"#"} text={"Enlace 1"}/>
                    <NavLink href={"#"} text={"Enlace 2"}/>
                    <NavLink href={"#"} text={"Enlace 3"}/>
                </nav>

                <CartCounter items={items}/> 
            </div>
        
        </header>
    )
}

export default Navbar