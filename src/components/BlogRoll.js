import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<section className='container'>
				{posts &&
					posts.map(({ node: post }) => (
						<div key={post.id}>
							<article>
								{post.frontmatter.featuredimage ? (
									<div>
										<PreviewCompatibleImage
											imageInfo={{
												image: post.frontmatter.featuredimage,
												alt: `featured image thumbnail for post ${post.frontmatter.title}`
											}}
										/>
									</div>
								) : null}
								<p>{post.excerpt}</p>

								<Link className='button' to={post.fields.slug}>
									Read More
								</Link>
							</article>
						</div>
					))}
			</section>
		);
	}
}

BlogRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query BlogRollQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								featuredpost
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <BlogRoll data={data} count={count} />}
	/>
);
