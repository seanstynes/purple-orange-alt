import React from 'react';
import css from './HeaderImage.module.scss';
import Img from 'gatsby-image';

// import { Container } from 'components/Container/Container';

const HeaderImage = props => {
	const { children, heading, image, subheading } = props;
	return (
		<div className={css.headerImage}>
			<div className={css.imageWrap}>
				<Img fixed={image} style={{ objectFit: 'cover' }} />
			</div>
			<div className='container'>
				<h2>{heading}</h2>
				<p>{subheading}</p>
			</div>
		</div>
	);
};

export default HeaderImage;
