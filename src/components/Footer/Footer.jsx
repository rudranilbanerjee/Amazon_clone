import {React,useContext} from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import {Context} from "../../utils/context";
const Footer = () => {
    const {location}=useContext(Context);
    return <footer className="footer" style={location.pathname==='/login' || location.pathname==='/signup' || location.pathname==='/success'? {display:'none'} : {display:'block'}}>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Voluptatem accusantium doloremque laudentium,totam rem
                    aperiam ,eaque ipsa quae ab illo inventore varitatis et
                    quasi architecto beatae vitae dicta sunt explicabo eaque
                    ipsa quae ab illo.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,Kerala,688006
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone: 0417 278 0987
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email: store@steroid.redix.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    STEROID 2023 CREATED BY RUDRANIL BANERJEE E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>;
};

export default Footer;
