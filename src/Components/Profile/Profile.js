import { Link } from "react-router-dom";
import "./Profile.css"
const Profile = () => {
    return (
        <>
            <div className="Profile">
                <Link to='/'>
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="ProfileLogo"  alt="ProfileLogo"/>
                </Link>

                {/* Profile  */}
                <div className="ProfileContainer" >
                    <h1>Your Profile</h1>
                    <form>
                        <h3>Email</h3>
                        <input type="email" placeholder="Your Email" required></input>

                        <h3>Password</h3>
                        <input type="password" placeholder="Your Password" required></input>

                        <h3>Mobile</h3>
                        <input type="number" placeholder="Enter Your Number" required></input>

                        <button className="ProfileButton">Update Profile</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile;