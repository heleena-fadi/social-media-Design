import './register.css'

function Register() {
  return (
    <div className='signup'>
        <div className="signupWrapper">
            <div className="signupLeft">
                <h3 className="signupLogo">Facebook</h3>
                <span className="signupDesc">Connect with friends and the world around you on Facebook</span>
            </div>
            <div className="signupRight">
                <div className="signupBox">
                <input type="text" placeholder=' username' className="signupInput" />

                    <input type="Email" placeholder=' Email' className="signupInput" />
                    <input type="Password" placeholder='Password' className="signupInput" />
                    <input type="Password" placeholder=' Confirm Password' className="signupInput" />

                    <button className="signupButton">Sign UP</button>
                    <span className="signupForgot"> Forgot Password?</span>
                    <button className="loginRegisterButton">Log into Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Register