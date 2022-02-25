import { NavLink } from 'react-router-dom'
import logo from 'assets/img/logo.png'
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <NavLink to="/" exact>
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="nav-bar">
          <NavLink to="/faq" exact activeStyle={{ color: '#FB9F30' }}>
            FAQ
          </NavLink>

          <NavLink to="/attribute" exact activeStyle={{ color: '#FB9F30' }}>
            Attributes
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
