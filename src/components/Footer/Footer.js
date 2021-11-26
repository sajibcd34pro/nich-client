import { Nav } from 'react-bootstrap';
import footerBg from '../../images/footer-background.jpg';

import './Footer.css';

const Footer = () => {
    
    return (
        <div>
            <div style={{
                background: ` url(${footerBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                width: "100%",
                // height: "60vh"
            }} >
                <div className="container footer-area">
                    <div className="grid-footer">
                        <div className="footer-section">
                            <div className="text">
                                <h5>Subscribe for deals, offers</h5>
                                <h5>and upcoming events.</h5>
                            </div>
                            <div>
                                <input className="email" type="email" placeholder="type email" />
                                <button className="submit"><i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="footer-section">
                            <div className="text">
                                <h5>BikeMania designed to let you start selling your products right </h5>
                                <h5>out of the box! You get great product lists and singles</h5>
                            </div>

                            <div className="">

                                <p> <i className="fas fa-phone-alt"></i>+94 91 454 96500</p>
                                <p> <i className="fas fa-envelope"> </i>  Example@mail.com</p>

                            </div>

                        </div>
                        <div className="footer-section">
                            <div className="text">
                                <button className="btn-danger booking">Book A Table <i className="fas fa-arrow-right"></i></button>
                            </div>
                            <div className="footer-icons">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                    </div>

                
                    <div className="flex-footer">
                        <Nav.Link href="#hero">HOME</Nav.Link>
                        <a href="#homeExp">EXPLORE</a>
                        <a href="#ratings">CATTING</a>
                        <a href="#home">ABOUT</a>
                        <a href="#feat">Featured</a>
                        <a href="#new">New Product</a>
                    </div>
                    <footer className="text-center">© BikeMania, 2021. All rights reserved.</footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;