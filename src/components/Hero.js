import React from "react";

function Hero() {
  return (
    <section style={{ padding: "80px", textAlign: "center" }}>

      <img
        src="/profile.jpg.png"
        alt="profile"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />

      <h1> Ansuman Mishra</h1>

      <h3>Assistant Professor of English</h3>

      <p style={{ maxWidth: "700px", margin: "auto" }}>
        My research focuses on modernist literature, cultural studies,
        and the relationship between popular culture and literary
        modernism. My work particularly examines T. S. Eliot,
        James Joyce, and the cultural transformations of the
        early twentieth century.
      </p>

      <br/>

      <a
        href="/cv.pdf"
        target="_blank"
        rel="noreferrer"
        style={{
          padding: "10px 20px",
          background: "#222",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px"
        }}
      >
        Download CV
      </a>

    </section>
  );
}

export default Hero;