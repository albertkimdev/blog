import React from "react";
import Layout from "../components/Layout";

class About extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="title">About</h2>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default About;
