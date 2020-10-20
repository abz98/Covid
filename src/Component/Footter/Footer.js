import React from 'react';
import styles from './Footer.module.css';
function Footer(props) {
    return(
    <div className="footer">
       
            <div className="row justify-content-center">             
                
               
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>&nbsp; 
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>&nbsp; 
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">          
                <div className="col-auto">
                <br/>   <p style={{color:"white"}}>© Copyright 2020 Abhit Patil</p>
                </div>
            </div>
       
    </div>
    )
}

export default Footer;