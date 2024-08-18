const SkillElement = (props) => {
    return ( 
        <div className="skillPillContainer" key={props.index}>
            <img className="svgs" src={props.svg}></img>
            {props.title}
        </div>
     );
}
 
export default SkillElement;