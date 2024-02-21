import FooterList from "./FooterList";

const Footer = () => {
    return ( 
        <div className="footer">
            <ul>
                {FooterList.map( item => {
                    return(
                        <li key={item.id}>
                            <a href={item.link} target="_blank">
                                <img className="svgs footerSvg" 
                                src={item.svg}
                                alt={item.title}
                                title={item.title}
                                />
                            </a>
                    </li>   
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Footer;