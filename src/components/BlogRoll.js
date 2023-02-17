import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import "../scss/components/BlogRoll.scss"

const BlogRollTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <article className={`blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''} blog-holder`}>
              <header className="blog-header">
                {post?.frontmatter?.image && (
                  <div className="featured-thumbnail blog-thumb">
                    <img src={`/img/artists/`+post.frontmatter.image+`.png`} alt={post.frontmatter.title} />
                  </div>
                ) }
                <p className="post-meta">
                  <Link className="title is-size-4 blog-title"to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </p>
              </header>
              <p>
                <p>{post.frontmatter.description}</p>
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Learn More →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
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
                  description
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  image
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
