import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singInWidthGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={singInWidthGoogle}>Google Sign In</button>
            </div>
            <form >  
            <input type="email" placeholder='Your email' />
            <br />
            <input type="password" name="" id="" placeholder='password' />
            <br />
                <input type="submit" value="Login" />
            </form>
            
        </div>
    );
};

export default Login;