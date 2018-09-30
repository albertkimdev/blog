import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  printTags = tags => {
    return tags.map((t, i) => (
      <span key={i} className="tag is-medium is-primary caps">
        {t}
      </span>
    ))
  }

  TagsSection = tags => (
    <section className="section border-light">
      <h1 className="subtitle">Topics</h1>
      <div className="tags">{this.printTags(tags)}</div>
    </section>
  )

  printArticleCards = articles => {
    return articles.map((a, i) => (
      <div className="card mb3" key={i}>
        <div className="card-content">
          <div className="content">
            <figure className="image">
              <img src="https://bulma.io/images/placeholders/480x320.png" />
            </figure>
            <h1 className="title">{a.title}</h1>
            <p>{a.description}</p>
            {a.tags.map((tag, index) => (
              <span key={index}>{tag} </span>
            ))}
          </div>
        </div>
      </div>
    ))
  }

  ArticleCards = () => (
    <section className="section notoppadding">
      {this.printArticleCards([
        {
          title: 'hello whence is the last supper',
          description: 'this is a description',
          tags: ['web dev', 'server side', 'rendering']
        },
        {
          title: 'How to make a website',
          description: 'lorem10 lorem 10 aklsdjflsaf',
          tags: ['web dev', 'server side', 'rendering']
        },
        {
          title: 'When will the earth end',
          description: 'this is a descriptsdfdsfsddsfsdfion',
          tags: ['web dev', 'server side', 'rendering']
        },
        {
          title: 'hello how are u',
          description: 'this is a sdfsd fsdf sd sdf sdf description',
          tags: ['web dev', 'server side', 'rendering']
        },
        {
          title: 'What is up mine guy?',
          description: 'this is a description okkkkkkk',
          tags: ['web dev', 'server side', 'rendering']
        },
        {
          title: 'Okurr okurr okru jaja',
          description: 'this is a good description',
          tags: ['web dev', 'server side', 'rendering']
        }
      ])}
    </section>
  )

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const tags = [].concat.apply(
      [],
      posts.map(({ node: post }) => [...post.frontmatter.tags])
    )

    console.log(posts)

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter">
                {this.TagsSection(tags)}
              </div>
              <div className="column">{this.ArticleCards()}</div>
            </div>

            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
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
            description
            image
            full_image
            templateKey
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
