import { NavLink } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            <div className="homeProfile">
                <nav>
                    <div>
                        <NavLink className="about" to="about">
                            <span>Hello</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="work" to="work">
                            <span>I am</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="contact"  to="contact">
                            <span>Mahesh</span>
                        </NavLink>
                    </div>
                </nav>
            </div>
            <div className="homeProfileChild">
                    <img className="profilePic" 
                        src="./images/mahesh.jpg" 
                        title="Mahesh Pic" 
                        alt="Mahesh Profile pic" 
                    />
            </div>
            <div className="mahiimg"></div>
            <p className="jobTitle">Front-end Developer</p>
        </div>
     );
}
 
export default Home;