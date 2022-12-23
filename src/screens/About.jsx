import "./styles/About.css"
import pfp from "../images/pfp.jpg"

function About() {
  return ( 
  <div>
  <h1>About</h1>
          <img src={pfp} alt="Profile picture" className="photo" />
      <div className="bio"> 
        <div className="bio-content"><h3>Adam Kaufman</h3>I am a New York City-based Software Engineer driven by the desire to succeed and ensure whatever project I’m tasked with meets the highest standards. As a puzzle enthusiast and former risk analyst, I have the work ethic and resilience to examine, deconstruct, and pursue a task while remaining adaptable to and respectful of complementary team dynamics. I’m eager to use web development as a tool to solve complex problems affecting our society. </div>
      </div>
      </div>
  )
}

export default About