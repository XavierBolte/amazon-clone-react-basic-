import "./Header.css"
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="headerTop">
          <div className="headerLeftNav">
            <MenuIcon />
          </div>
          {/* logo */}
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" className="logo"></img>
          </Link>
      
          {/* Search Box */}
          <div className="headerSearch">
            <input type="text" className="headerSearchInput" />
            <SearchIcon className="headerSearchIcon"/>
          </div>

          {/* Links  */}
          <div className="headerNavbar">
            {/* Signout/Signin  */}
            <Link to="/Login" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_One">Hello</span>
                <span className="headerOption_Two">user</span>
              </div>
            </Link>

            {/* Return Order  */}
           <Link to="/Orders" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_One">Return</span>
                <span className="headerOption_Two">Order</span>
              </div>
            </Link>

            {/* Prime */}
            <Link to="/Login" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_One">Try</span>
                <span className="headerOption_Two">Prime</span>
              </div>
            </Link>
        
            {/* Profile */}
            <Link to="/Profile" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_One">Your</span>
                <span className="headerOption_Two">Profile</span>
              </div>
            </Link>

            {/* Basket */}
            <Link to="/Cart" className="headerLink">
              <div className="headerOptions_Basket">
                <ShoppingBasketIcon />
                <span className="headerOption_Two basketCount">4</span>
              </div>
            </Link>
          </div>  

          {/* Links  */}
        </div>

        {/* Navbar Botton */}
        <div className="headerBottom">
          {/* Address  */}
          <div className="headerAddress">
              <div className="headerAddress_Icon">
                <LocationOnIcon />
              </div>              
          </div>
          <div className="headerOptions">
              <span className="headerOption_One">Deliver to</span>
              <span className="headerOption_Two"> priTech</span>
          </div>
          {/* Header Bottom Nav  */}
           <div className="headerbottom_Navbar">
             <span>
              <Link to="/ListProducts" className="HeaderLink">
                All Products 
                </Link>
             </span>
             <span> Book </span>
             <span> New Release </span>
             <span> Gift Ideas </span>
             <span> Amazon Pay </span>
          </div>
        </div>
        {/* Navbar Botton */}

      </nav>
    </>
  );
};

export default Header;

// import Menu from "@mui/icons-material/Menu";
// import { Button, Slider } from "@mui/material";
// import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

//   <Menu />
//   <Button />
//   <AccessTimeFilledIcon />
//   <Slider
//     size="small"
//     defaultValue={70}
//     aria-label="Small"
//     valueLabelDisplay="auto"
//   />
//   <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
