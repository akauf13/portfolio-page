import "./styles/Projects.css"
import wordGuess from "../images/word-guess-proj.png"
import Shills from "../images/Shills.png"
import Mern from "../images/mern-proj.png"
import food from "../images/food-at-home.png"

function Projects() {
  return ( 
  <>
  <h1 className="proj-head">Projects</h1>
      <div className="project-container"> 
        <div className="proj-content">
          <div className="proj1">
            <h2>Food @ Home</h2>
            <img src={food} alt="Hackathon Project" className="project" />
            <a className="repo" href="https://github.com/laurenpowers20/we-got-food-at-home" target="_blank">
          <h4>Github Repo</h4>
            </a>
            <a className="deploy" href="https://we-got-food-at-home.netlify.app/" target="_blank">
          <h4>Deployed Link</h4>
            </a>
          </div>
          <div className="proj2">
            <h2>Word Guess</h2>
            <img src={wordGuess} alt="Game Project" className="project" />
            <a className="repo" href="https://github.com/akauf13/word-guess" target="_blank">
          <h4>Github Repo</h4>
            </a>
            <a className="deploy" href="https://jovial-crumble-1db7ec.netlify.app/" target="_blank">
          <h4>Deployed Link</h4>
            </a>
          </div>
          <div className="proj3">
          <h2>$hills</h2>
            <img src={Shills} alt="Twitter Clone Project" className="project" />
            <a className="repo" href="https://github.com/SEI-Buffleheads/twitter-clone-frontend" target="_blank">
          <h4>Github Repo</h4>
            </a>
            <a className="deploy" href="https://shill-social.netlify.app/" target="_blank">
          <h4>Deployed Link</h4>
            </a>
          </div>
          <div className="proj4">
            <h2>Gen 1 Pokemon</h2>
            <img src={Mern} alt="MERN Stack Project" className="project" />
            <a className="repo" href="https://github.com/akauf13/mern-project" target="_blank">
          <h4>Github Repo</h4>
            </a>
            <a className="deploy" href="https://frabjous-cranachan-ff5b2c.netlify.app/" target="_blank">
          <h4>Deployed Link</h4>
            </a>
          </div>
        </div>
      </div>
      </>
  )
}

export default Projects