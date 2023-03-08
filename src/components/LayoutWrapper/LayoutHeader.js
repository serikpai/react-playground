import {NavLink} from 'react-router-dom';

import css from './LayoutWrapper.module.css';

export function LayoutHeader() {
  return (
    <header className={css.pageHeader}>
      <div>
        <div className={css.logo}>JQ</div>
        <nav className={css.mainNav}>
          <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/tasks">Tasks</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}