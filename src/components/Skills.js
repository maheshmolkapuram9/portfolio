import skillList from "./SkillList";
import SkillElement from "./SkillElement";

const Skills = () => {
    return ( 
        <>
            {skillList.map((skill,index)=>{
                return (
                    <div className="projectPill">
                        <SkillElement 
                        index={index}
                        svg={skill.svg} 
                        title={skill.title}
                        />
                    </div>
                )
            })}
        </>
     );
}
 
export default Skills;