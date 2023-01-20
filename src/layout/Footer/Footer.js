/* eslint-disable jsx-a11y/anchor-is-valid */
import ExpandLessIcon from '@mui/icons-material/ExpandLess';import "./Footer.css"

const Footer = () => {
    const Scto = () => {
        window.scrollTo(0,0);
    }
    return (
        <>
           <div className="Footer">
                <a onClick={Scto}>
                    <div className="FooterBottomToTop">
                        <ExpandLessIcon />
                    </div>
                </a>

                <div className='FooterVerRow'>

                    <div className='FooterVerCol'>
                        <div className='FooterVerColHead'>Get to Know Us
                        </div>
                        <ul>
                            <li>About</li>
                            <li>Services</li>
                            <li>Amazon Cares</li>
                            <li>Gift Products</li>
                        </ul>
                    </div>
                    
                    <div className='FooterVerCol'>
                        <div className='FooterVerColHead'>Connect to Us
                        </div>
                        <ul>
                            <li>Meta</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>GitHub</li>
                        </ul>
                    </div>

                    <div className='FooterVerCol'>
                        <div className='FooterVerColHead'>Make Money
                        </div>
                        <ul>
                            <li>Amazon Pay</li>
                            <li>Become An Affiliate</li>
                            <li>Sell On Amazon</li>
                            <li>Pritech</li>
                        </ul>
                    </div>

                </div>

                <hr />

                <div className='FooterLast'>
                    <span className='FooterMess'>
                        Amazon Clone &copy; priTech
                    </span>
                </div>
           </div>
        </>

    )
};

export default Footer;