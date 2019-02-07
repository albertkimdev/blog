import React from "react";
import Layout from "../components/Layout";

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="title">
                  Wow what an honour to get an email from you!
                </h2>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <p className="subtitle">Email: yongelee@yongelee.com</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Contact;
