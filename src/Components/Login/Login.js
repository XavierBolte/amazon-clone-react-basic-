import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
    return (
        <>
            <div className="Login">
                <Link to='/'>
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="LoginLogo"  alt="LoginLogo"/>
                </Link>

                {/* Login form start  */}
                <div className="LoginContainer">
                    <h1>Sign In</h1>
                    <form>
                        <h3>Email</h3>
                        <input type="email" placeholder="Your Email" required></input>
                        <h3>Password</h3>
                        <input type="password" placeholder="Your Password" required></input>
                        <button className="LoginButton">Sign In</button>
                    </form>
                    <p>
                        By Continuing , you agree to Amazon's Condition of Use and Privacy
                        Notice.
                    </p>
                    <button className="LoginButton">Create Your Amazon Account</button>
                </div>
            </div>
        </>
    )
}

export default Login;