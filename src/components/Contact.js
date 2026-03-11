import React from "react";

function Contact() {
  return (
    <section id="contact" style={{ padding: "60px" }}>

      <h2 style={{ textAlign: "center" }}>Contact</h2>

      <div style={{ maxWidth: "700px", margin: "auto", textAlign: "center" }}>

        <p>
          <strong>Email:</strong> imansu89174@gmail.com
        </p>

        <p>
          <strong>Affiliation:</strong> Department of English
        </p>

        <p>
          <strong>Institution:</strong> Vikash Institute of Technology, Bargarh
        </p>

        <p>
          <strong>Location:</strong> Odisha, India
        </p>

        <br/>

        <p>
          <a href="https://scholar.google.com" target="_blank" rel="noreferrer">
            Google Scholar
          </a>
          {" | "}
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {" | "}
          <a href="https://www.researchgate.net" target="_blank" rel="noreferrer">
            ResearchGate
          </a>
        </p>

      </div>

    </section>
  );
}

export default Contact;