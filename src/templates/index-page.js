import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import HeaderImage from '../components/HeaderImage';

export const IndexPageTemplate = ({ image, title, heading, subheading }) => (
	<div>
		{/* <HeaderImage image={image}></HeaderImage> */}
		{heading}
		<Img fluid={image} src={image}></Img>
		{subheading}
		{/* <BlogRoll></BlogRoll> */}
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	})
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 120, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
			}
		}
	}
`;
