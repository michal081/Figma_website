import { Link } from "react-router-dom";
import './Login.css'; // Make sure to create this CSS file


function Login() {
    return (
        <div className="login-container">
            <h2 className="login-title">Sign in to us</h2>
            <form action="/home">
                <div className="input-group">
                    <input 
                        type="text" 
                        name="first_name" 
                        required  
                        placeholder="Username or Email"
                        className="login-input" 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="password" 
                        name="password" 
                        required 
                        placeholder="Password" 
                        className="login-input" 
                    />
                </div>
                <button id="sub_btn" type="submit" className="login-button">Login</button>
            </form>
            <footer className="login-footer">
                <label>Password</label>
                <Link to="/forget-password" className="footer-link">Forget password?</Link>
                <p>First time? <Link to="/register" className="footer-link">Create an account</Link>.</p>
                <p className="back-link"><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
}

export default Login;
