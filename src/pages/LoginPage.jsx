import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserNameError('');
        setPasswordError('');

        let valid = true;

        if (username.trim() === '') {
            setUserNameError('Username is required');
            valid = false;
        }
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters');
            valid = false;
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter');
            valid = false;
        } else if (!/[\d\W]/.test(password)) {
            setPasswordError('Password must contain at least one number or special character');
            valid = false;
        }
        if (valid) {
            console.log('Login Successful');
            navigate('/home', { state: { username } });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-container" noValidate>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username"
                    value={username} 
                    onChange={(e) => setUserName(e.target.value)}
                />
                {usernameError && <p className="error-message">{usernameError}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
            </div>

            <button type="submit" className="submit-button">Login</button>
        </form>
    );
};

export default LoginPage;