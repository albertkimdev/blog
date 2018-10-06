import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  state = {
    tag: 'all'
  }

  updateTag = e => {
    this.setState({
      tag: e.target.id
    })
  }

  printTags = tags => {
    return tags.map((t, i) => (
      <span
        key={i}
        id={t[0]}
        className="button tag is-medium is-primary caps"
        onClick={this.updateTag}
      >
        {`${t[0]} ${t[1] === 0 ? '' : t[1]}`}
      </span>
    ))
  }

  TagsSection = tags => (
    <section className="section border-light has-background-white">
      <h1 className="subtitle">Topics</h1>
      <div className="tags">{this.printTags(tags)}</div>
    </section>
  )

  printArticleCards = blogs => {
    return blogs.map((b, i) => (
      <div className="card mb3" key={i}>
        <div className="card-content">
          <div className="content">
            <Link to={b.slug}>
              <figure className="image is-2by1 mb2">
                <img src={`${window.location.href.slice(0, -1)}${b.image}`} />
              </figure>
            </Link>
            <Link className="link-effect" to={b.slug}>
              <h1 className="title">{b.title}</h1>
            </Link>
            <p>{b.description}</p>
            <div className="tags">
              {b.tags.map((tag, index) => (
                <span className="tag is-primary caps" key={index}>
                  <Link
                    className="has-text-white"
                    to={`/tags/${kebabCase(tag)}`}
                  >
                    {tag}
                  </Link>
                </span>
              ))}
            </div>
            <Link className="button is-small" to={b.slug}>
              Keep Reading →
            </Link>
          </div>
        </div>
      </div>
    ))
  }

  ArticleCards = blogs => (
    <section className="section notoppadding">
      {this.printArticleCards(blogs)}
    </section>
  )

  render() {
    const tag = this.state.tag
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const tags = [].concat.apply(
      [],
      posts.map(({ node: post }) => [...post.frontmatter.tags])
    )
    let counts = {}
    counts.all = 0
    for (var i = 0; i < tags.length; i++) {
      counts[tags[i]] = 1 + (counts[tags[i]] || 0)
    }

    counts = Object.entries(counts)

    const blogs = posts
      .filter(({ node: post }) => {
        if (tag === 'all') return true
        let check = false
        post.frontmatter.tags.forEach(t => {
          if (t.toLowerCase() === tag) check = true
        })
        return check
      })
      .map(({ node: post }) => ({
        title: post.frontmatter.title,
        image: post.frontmatter.image,
        tags: post.frontmatter.tags,
        description: post.frontmatter.description,
        slug: post.fields.slug
      }))

    return (
      <Layout>
        <section className="section has-background-light">
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter">
                {this.TagsSection(counts)}
              </div>
              <div className="column">{this.ArticleCards(blogs)}</div>
            </div>
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
