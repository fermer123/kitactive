import css from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.item}>
        <NavLink to='/account' activeClassName={css.activeLink}>
          Account
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='/authorization' activeClassName={css.activeLink}>
          Authorization
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='/registration' activeClassName={css.activeLink}>
          Registration
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
