
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import carrito from "/carrito.svg"
import logo from "/Logo.svg"


const Navbar = () => {
  return (
    <header className="header_container">
      <img className="header__img" src={logo} alt="logo" />
      <nav>
        <ul className="nav_container">
          <li className="nav__list"><a href="#">Productos</a></li>
          <li className="nav__list"><a href="#">Nosotros</a></li>
          <li className="nav__list"><a href="#">Contacto</a></li>
          <li className="nav__list"><a href="carrito"><CartWidget imagen={carrito} alt="carrito"/></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar