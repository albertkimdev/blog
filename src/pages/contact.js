import React from "react";
import Layout from "../components/Layout";

class Contact extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

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
                <form onSubmit={this.handleSubmit}>
                  <p className="subtitle">You want to contact me about:</p>
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="answer" />
                      Job opportunity
                    </label>
                    <label class="radio">
                      <input type="radio" name="answer" />I like the cut of your
                      jib.
                    </label>
                    <label class="radio">
                      <input type="radio" name="answer" />
                      To say hi. (???)
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Contact;
