import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import styled from "styled-components";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import bg from "../../static/img/bg.png";
import bg2 from "../../static/img/bg2.png";
import me from "../../static/img/me.png";

export default class IndexPage extends React.Component {
  state = {
    tag: "all",
    close: false
  };

  updateTag = e => {
    this.setState({
      tag: e.target.id
    });
  };

  printTags = tags => {
    return tags.map((t, i) => (
      <span
        key={i}
        id={t[0]}
        className="button tag is-medium is-primary caps tab-style title"
        onClick={this.updateTag}
      >
        {`${t[0]} ${t[1] === 0 ? "" : t[1]}`}
      </span>
    ));
  };

  TagsSection = tags => (
    <section className="section border-light has-background-white">
      <h1 className="title">Topics</h1>
      <div className="tags">{this.printTags(tags)}</div>
    </section>
  );

  printArticleCards = blogs => {
    return blogs.map((b, i) => (
      <div className="card mb3" key={i}>
        <div className="card-content">
          <div className="content">
            <Link to={b.slug}>
              <figure className="image is-2by1 mb2">
                <img src={`${b.image}`} />
              </figure>
            </Link>
            <Link className="link-effect" to={b.slug}>
              <h1 className="title is-size-5-mobile line-height-title has-text-weight-light">
                {b.title}
              </h1>
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
    ));
  };

  ArticleCards = blogs => (
    <section className="section nopadding">
      {this.printArticleCards(blogs)}
    </section>
  );

  closeAbout = () => {
    this.setState({
      close: true
    });
  };

  render() {
    const tag = this.state.tag;
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const tags = [].concat.apply(
      [],
      posts.map(({ node: post }) => [...post.frontmatter.tags])
    );
    let counts = {};
    for (var i = 0; i < tags.length; i++) {
      counts[tags[i]] = 1 + (counts[tags[i]] || 0);
    }

    counts = Object.entries(counts).sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    });
    counts.unshift(["all", 0]);

    const blogs = posts
      .filter(({ node: post }) => {
        if (tag === "all") return true;
        let check = false;
        post.frontmatter.tags.forEach(t => {
          if (t.toLowerCase() === tag.toLowerCase()) check = true;
        });
        return check;
      })
      .map(({ node: post }) => ({
        title: post.frontmatter.title,
        image: post.frontmatter.image,
        tags: post.frontmatter.tags,
        description: post.frontmatter.description,
        slug: post.fields.slug
      }));

    return (
      <div>
        {/* Little intro section about me above blog */}
        {!this.state.close && (
          <AboutMe>
            <span
              className="is-size-3 has-text-white close-button"
              onClick={this.closeAbout}
            >
              x
            </span>
            <div className="columns content-container">
              <div className="column is-2" />
              <div className="column is-2 is-centered picture-column">
                <figure className="image is-128x128">
                  <img className="is-rounded" src={me} />
                </figure>
              </div>
              <div className="column is-6">
                <div className="about-background">
                  <p className="subtitle has-text-white">
                    Developer of{" "}
                    <em>
                      <b>software and business</b>
                    </em>
                    . Coming up with business ideas and leads for{" "}
                    <a
                      className="has-text-warning"
                      href="https://crowdforge.io"
                      target="_blank"
                    >
                      CrowdForge.io
                    </a>{" "}
                    and{" "}
                    <a
                      className="has-text-warning"
                      href="https://ncnetwork.ca"
                      target="_blank"
                    >
                      NCNetwork.ca
                    </a>
                    . Self employed web developer creating web apps with React
                    and Node. Check out my work
                    <Link to="/work" className="has-text-warning">
                      <span>{` here`}</span>
                    </Link>
                    , contact{" "}
                    <Link to="/contact" className="has-text-warning">
                      <span>{` here `}</span>
                    </Link>
                    or continue below to read about what I have to say!
                    {/* Self employed full stack web developer. I specialize in
                    <span className="has-text-grey">React</span> front-ends.
                    Node.js servers and APIS. Graphql to do handle data.
                    Gatsby.js and Next.js to build front-ends. - CrowdForge.io
                    partner that does business development. - Check out my
                    portfolio to look at my work. - Look below to see my
                    articles. */}
                  </p>
                </div>
              </div>
              <div className="column is-2" />
            </div>
          </AboutMe>
        )}
        <Layout>
          <section className="section">
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
      </div>
    );
  }
}

const AboutMe = styled.div`
  width: 100%;
  height: 25vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${bg2});
  background-repeat: no-repeat;
  background-size: cover;
  .picture-column {
    display: flex;
    justify-content: flex-end;
  }
  .close-button {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 0;
  }
  .content-container {
    width: 100%;
  }
  .about-background {
    height: 100%;
  }

  @media (max-width: 800px) {
    height: 85vh;
    .picture-column {
      display: flex;
      justify-content: center;
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

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
`;
