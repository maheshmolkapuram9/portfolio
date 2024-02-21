import ProjectsList from "./ProjectsList";

const Project = () => {
    return ( 
        <div className="projects">
            {ProjectsList.map((project,index)=>{
                return(
                    <div className="projectContainer" key={index}>
                        <h5>{project.title}</h5>
                        <p className="technologies">{project.technologies}</p>
                        <p>{project.description}</p>
                        <div className="WorkExHover"></div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Project;