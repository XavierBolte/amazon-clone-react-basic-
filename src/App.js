import "./App.css"
import Header from "./layout/Header/Header";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./layout/Footer/Footer";
import Login from "./Components/Login/Login";
import ListProduct from "./Components/ListProduct/ListProduct"
import Orders from "./Components/Orders/Order";
import Profile from "./Components/Profile/Profile";
import Cart from "./Components/Cart/Cart";

const App =  () => {
    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={[<Header/>, <Home/>, <Footer/>]}></Route>

                        <Route path="/Login" element={[<Login/>]}></Route>

                        <Route path="/ListProducts" element={[<Header/> , <ListProduct/>, <Footer/>]}></Route>

                        <Route path="/Orders" element={[<Header/> , <Orders/>, <Footer/>]}></Route>

                        <Route path="/Profile" element={[ <Profile/>]}></Route>

                        <Route path="/Cart" element={[<Header/> , <Cart/>, <Footer/>]}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;