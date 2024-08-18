import CourseElement from "../components/CourseElement";
import Project from "../components/Project";
import WorkEx from "../components/WorkEx";
import BacktoHomeWithFooter from "../components/BacktoHome";

const Work = () => {
    return ( 
        <div className="aboutLayout workExperience">
            <h4>Work Experience</h4>
            <p className="underLine"></p>
            <WorkEx/>
            <h4>Course Work</h4>
            <p className="underLine"></p>
            <div className="courseContainer">
                <CourseElement/>
            </div>
            <h4>Projects</h4>
            <p className="underLine"></p>
            <Project/>
        </div>
     );
}
 
export default BacktoHomeWithFooter(Work);