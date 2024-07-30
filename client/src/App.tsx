import type { Component } from 'solid-js';
//step 1 work on carousel of projects
//adding googlesheets to project so that i can better represent my projects in a controlled environment
//1.1 setting up googlesheets for data retrieval
const App: Component = () => {
  return (
    <div class="App">
      <div class="Intro">
        <h1>Welcome</h1>
        <p>Hi, My name is Andre Williams</p>
        <p>Dedicated and results-driven technical services engineer with over eight years of experience, transitioning into backend engineering. Proven track record in delivering high-quality customer service and technical solutions, coupled with hands-on experience in developing REST APIs using Node.js and Express. Passionate about leveraging strong problem-solving skills and technical expertise to drive innovative backend solutions.</p>
      </div>

      <div class="Project">
        <h2>Projects</h2>
        <p>Here are some of my projects</p>
        doing a carousel here for my projects
      </div>

      <div class="Closing">
        <h2>Contact me</h2>
        <p>Heres how to contact me</p>
        add contact info here
        <p>Also a copy of my resume for your records</p>
        add link to my resume for people to download
      </div>

      <div class="Footer">
        <p>Built using typescript and solidjs</p>
        add links for github, linkedin 
      </div>
    </div>
  );
};

export default App;
