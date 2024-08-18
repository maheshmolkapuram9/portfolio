import {Link} from "react-router-dom";
import Footer from "./Footer";


const BacktoHomeWithFooter = (WrappedComponent) => {
    return (props)=>( 
        <div>
            <Link className="backtohome" to="/">Home</Link>
            <WrappedComponent {...props}/>
            <Footer/>
        </div>
     );
}
 
export default BacktoHomeWithFooter;