import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const [credential, setCredential] = useState({
        username: undefined,
        password: undefined
    });

    const handleChange = (e) => {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", credential);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            navigate("/")
        } catch (error) {
            dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
        }
    }
 
  return (
      <div className='login'>
          <div className="loginContainer">
              <input type="text" className="username" id='username' placeholder='Username' onChange={handleChange}/>
              <input type="password" className="password" id='password' placeholder='Password' onChange={handleChange}/>
              <button className="loginBtn" onClick={handleSubmit}>Login</button>
              {error && <span>Something went wrong!</span>}
          </div>
    </div>
  )
}

export default Login