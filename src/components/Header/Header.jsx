import { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import {Context} from "../../utils/context";// first export context from context.js file
import logo from "../../assets/amazon-logo.png"
import "./Header.scss";
import loginLogo from "../../assets/login-logo.svg";
const Header = ({login,status}) => {
    const {cartCount,location,currentPath,setCurrentPath,setAuth}=useContext(Context);
    const navigate=useNavigate();
    const [scrolled,setScrolled]=useState(false);
    const [showCart,setShowCart]=useState(false);
    const [showSearch,setShowSearch]=useState(false);
    const handleScroll=()=>{
        const offset=window.scrollY;
        if(offset>200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    const loginfunc=()=>{
        setCurrentPath(location.pathname);
        navigate('/login');
    }
    const logoutfunc=()=>{
        // e.preventDefault();
        localStorage.setItem('User-Token','""');
        setAuth(false);
    }
    document.onclick=()=>{
        setShowCart(false);
    }
    useEffect(()=>{
    //    console.log("useEffect")
    window.addEventListener('scroll',handleScroll);
    },[])
    console.log(location)
    return <>
        <header className={`main-header ${scrolled ? 'sticky-header' : ""}`} style={location.pathname==='/login' || location.pathname==='/signup' || location.pathname==='/success'? {display:'none'} : {display:'block'}}>
            <div className="header-content">
                <div className="left" onClick={()=>navigate('/')}><img src={logo} alt="logo"/></div>
                <ul className="center">
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li>About</li>
                    <li onClick={()=>navigate('/myorder')}>My Orders</li>
                </ul>
                <div className="right">
                    <TbSearch onClick={()=>{
                        setShowSearch(true);
                    }}/>
                    <AiOutlineHeart/>
                    <span className="cart-icon" onClick={(e)=>{
                        e.stopPropagation();
                        setShowCart(true);
                    }}>
                        <CgShoppingCart/>
                        <span style={!cartCount?{display:"none",}:{display:"block"}}>{cartCount}</span>
                    </span>
                    <button className={!status?"login":"logout"} onClick={!status?loginfunc:logoutfunc}>
                        {!status?<><img src={loginLogo} alt="login-logo"/>
                        <span>Login</span>
                        </>
                        :<span>Logout</span>
                        }
                    </button>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/>}
        {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
};

export default Header;
