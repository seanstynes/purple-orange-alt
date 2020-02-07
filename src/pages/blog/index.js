import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import HeaderImage from '../../components/HeaderImage/HeaderImage';

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<HeaderImage></HeaderImage>
				<div>
					<h1>Latest Posts</h1>
				</div>
				<section className='section'>
					<div className='container'>
						<div className='content'>
							<BlogRoll />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
