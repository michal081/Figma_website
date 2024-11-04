import { Link } from 'react-router-dom';
import './SignUpPage.css'; // Import the CSS file

function SignUpPage() {
    return (
        <div className="signup-container">
            <h2 className="signup-title">Join Us</h2>
            <h5>Create your personal account</h5>
            <form className="signup-form" action="/home">
                <input type="text" name="first_name" required placeholder="Username" className="signup-input" />
                <input type="email" name="email" required placeholder="Email" className="signup-input" />
                <input type="password" name="password" required placeholder="Password" className="signup-input" />
                <div className="checkbox-group">
                    <input type="checkbox" name="checkbox" id="checkbox" required />
                    <label htmlFor="checkbox">I agree to all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a>.</label>
                </div>
                <button id="sub_btn" type="submit" className="signup-button">Register</button>
            </form>
            <footer>
                <p><Link to="/" className="footer-link">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
}

export default SignUpPage;
