import './style.css'

function App() {

  return (
    <section>
      <section id="Home">
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Project'>Project</a>
        <a href='#Connect'>Contact</a>
      </section>

      <section id="About"> 
        <article id="photo">
          <img src="./ishaVin.jpg" alt="" />
        </article>
        <article id="info">
          <h2>Hi there!</h2>
          <h1>I am Marvin A. Consigo</h1>
          <p>A fullstack tambay</p>
          <p>A person who loves technology</p>
          <p>A Gamer</p>
          <a href="#Connect" id="buttonLink">Learn More</a>
        </article>
      </section>

      <section id="Project">
        <section id="title">
          <h1>My Recent Projects</h1>
        </section>
        <section id="projectList">
          <article class="projects">
            <h1 class="projectName">Dynamic Interface</h1>
            <div class="project">
              <img src="./dynamic.png" alt="" />
            </div>
            <p>A dynamic student list</p>
          </article>
          <article class="projects">
            <h1 class="projectName">Nameplate</h1>
            <div class="project">
              <img src="./nameplate.png" alt="" />
            </div>
            <p>A simple student nameplate</p>
          </article>
          <article class="projects">
            <h1 class="projectName">Music Playlist</h1>
            <div class="project">
              <img src="./music.png" alt="" />
            </div>
            <p>A simple music playlist</p>
          </article>
        </section>

      </section>

      <section id="Connect">
        <h1>Contacts</h1>
        <section id="socials">
          <article class="contact">
              <small>Facebook</small>
              <h1>Marvin Consigo</h1>
          </article>
          <article class="contact">
              <small>Email</small>
              <h1>consigomarvin803@gmail.com</h1>
          </article>
        </section>

      </section>
    </section>
  )
}

export default App
