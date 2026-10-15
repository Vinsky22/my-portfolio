import './style.css'

function App() {

  return (
    <section>
      <section id="Home">
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Project'>Project</a>
        <a href='#Connect'>Connect</a>
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
          <button>Learn More</button>
        </article>
      </section>

      <section id="Project">
        <section id="projectList">
          <article class="project">
            <h1>Music Playlist</h1>
          </article>
          <article class="project">
            <h1>Nameplate</h1>
          </article>
          <article class="project">
            <h1>Responsive design</h1>
          </article>
          
        </section>

      </section>

      <section id="Connect">

      </section>
    </section>
  )
}

export default App
