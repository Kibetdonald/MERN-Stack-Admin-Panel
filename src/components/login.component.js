import { React, Component } from "react";
import { Link } from "react-router-dom";

export default class Mylogin extends Component {
    //constructor(){
    // super()

    // }
    render() {
        return (
            <div className="main-wrapper login-body">
                <div className="login-wrapper">
                    <div className="container">
                        <div className="loginbox">
                            <div className="login-left">
                                <h3 className="smartLogo">Admin Login</h3>
                            </div>
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Sign Up</h1>


                                    <form>

                                        <div className="form-group">
                                            <input className="form-control" type="email" name="user_email" placeholder="Email" required />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="password" type="password" name="user_password" placeholder="Password"
                                                required />

                                        </div>
                                        <label>
                                            <input type="checkbox" />   Show password

                         </label>


                                        <center>
                                            <div className="form-group mb-0">
                                                <Link to="/" className="btn btn-lg btn-common animated fadeInUp" name="submit" type="submit">Login</Link>
                                            </div>
                                        </center>
                                    </form>


                                    <div className="login-or">
                                        <span className="or-line"></span>
                                        <span className="span-or">or</span>
                                    </div>


                                    <div className="social-login">
                                        <span>Login with</span>
                                        <Link to="/" className="facebook"><i className="fab fa-facebook-f"></i></Link><Link to="/" className="google"><i className="fab fa-google-plus-g"></i></Link>
                                    </div>


                                    <div className="text-center dont-have">Don't have an account? <Link to="/">
                                        Create Account</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );

    }
}