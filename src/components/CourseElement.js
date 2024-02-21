import CoursesList from "./CoursesList";

const CourseElement = () => {
    return ( 
        <div className="courseWork">
            {CoursesList.map((course,index)=>{
                return (
                <div className="certificates" key={index}>
                    <h5>{course.title}</h5>
                    <p>- {course.author}</p>
                    <div className="WorkExHover"></div>
                </div>
                )
            })}
        </div>
     );
}
 
export default CourseElement;