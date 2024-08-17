import ContactContent from "../components/ContactContent";
import BacktoHomeWithFooter from "../components/BacktoHome";

const Contact = () => {
    return ( 
        <div className="aboutLayout">
            <h4>Join the Quest for Brilliance</h4>
            <div className="underLine"></div>
            <ContactContent/>
            <div className="connect">
                <a href="mailto:maheshmolkapuram@gmail.com">
                    Email
                </a><br/>
                <a href="https://www.linkedin.com/in/maheshmolkapuram/" target="new">
                    LinkedIn
                </a>
            </div>
        </div>
     );
}
 
export default BacktoHomeWithFooter(Contact);