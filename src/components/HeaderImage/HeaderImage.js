import React from 'react';
import css from './HeaderImage.module.scss';
import Img from 'gatsby-image';

// import { Container } from 'components/Container/Container';

const HeaderImage = props => {
	const { children, heading, image } = props;
	return (
		// <div className={css.headerImage}>
		// 	{/* <Container> */}
		// 	<h2>{heading}</h2>
		// 	{children}
		// 	{/* </Container> */}

		<Img fixed={image} />
		// </div>
	);
};

export default HeaderImage;
