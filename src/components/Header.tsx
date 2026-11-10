import { Link, NavLink } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'
import './Header.css'

function Header() {
  const linkClass = ({ isActive }: NavLinkRenderProps) =>
    'header__link' + (isActive ? ' header__link--active' : '')

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">TabOnline</Link>
      </div>

      <nav className="header__nav">
        <NavLink to="/create" className={linkClass}>
          Создать
        </NavLink>
        <NavLink to="/account" className={linkClass}>
          Мой аккаунт
        </NavLink>
      </nav>

      <div className="header__right">
        <Link to="/create" className="header__button">Создать</Link>
      </div>
    </header>
  )
}

export default Header