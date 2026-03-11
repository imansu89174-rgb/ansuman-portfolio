import React from "react";

function Teaching() {
  return (
    <section id="teaching" style={{ padding: "60px", background: "#f5f5f5" }}>

      <h2 style={{ textAlign: "center" }}>Teaching</h2>

      <div style={{ maxWidth: "800px", margin: "auto" }}>

        <h3>Courses Taught</h3>

        <ul>
          <li>Modern British Literature</li>
          <li>Communication Skills</li>
          <li>Indian Writing in English</li>
          <li>Literary Theory and Criticism</li>
          <li>Non-British Novels in English</li>
        </ul>

        <br/>

        <h3>Teaching Philosophy</h3>

        <p>
          My teaching focuses on encouraging critical thinking,
          analytical reading, and active classroom discussion.
          I aim to help students understand literature not only
          as artistic expression but also as a reflection of
          historical, cultural, and social realities.
        </p>

      </div>

    </section>
  );
}

export default Teaching;