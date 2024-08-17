import { NavLink } from "react-router-dom";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import BacktoHomeWithFooter from "../components/BacktoHome";


const About = () => {
    return ( 
        <div className="aboutLayout">
            <h4>About</h4>
            <p className="underLine"></p>
            <p className="profileSummary">Hello! I'm Mahesh Molkapuram, a passionate React JS developer with
             2+ years of hands-on experience in creating dynamic and user-friendly
             web applications. My journey in the world of web development began
             with a curiosity-driven desire to build interactive and responsive
             websites that provide meaningful user experiences.</p>
            <h4>Skills</h4>
            <p className="underLine"></p>
            <div className="skillPresenterContainer">
                    <Skills />
            </div>
            <h4>Not just a Frontend Developer</h4>
            <p className="underLine"></p>
            <Achievements/>
        </div>
     );
}
 
export default BacktoHomeWithFooter(About);