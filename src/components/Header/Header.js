import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../img/orange.svg';

import classes from 'classnames';
import css from './Header.module.scss';

const Header = class extends React.Component {
	render() {
		return (
			<header className={classes(css.header, 'container')}>
				<div className={css.inner}>
					<Link to='/' className='inheritLink'>
						<div className={css.logo}>
							<Logo></Logo>
						</div>
						<h1>Purple Orange Studios</h1>
					</Link>
					<nav>
						{/* <Link to='/listen'>Listen</Link> */}
						<Link to='/blog'>Posts</Link>
						<Link to='/reviews'>Reviews</Link>
						<Link to='/contact'>Contact</Link>
						{/* <Link to='/guides'>Guides</Link> */}
					</nav>
				</div>
			</header>
		);
	}
};

export default Header;
