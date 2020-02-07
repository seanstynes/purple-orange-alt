import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
	render() {
		return (
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/blog'>Blog</Link>
			</nav>
		);
	}
};

export default Navbar;
