import "./login.css";
// import {Link} from "react-router-dom";
export default function Login() {
  return (
    <>
        <div className="login">
            <form  className="loginForm">
               <div className="form-content">
               <label >Email</label>
                <input type="email" className="loginInput" placeholder="Enter your email..." />
                <label >Password</label>
                <input type="password" className="loginInput" placeholder="Enter your passsword..." />
               </div>
                <button className="loginButton">Login</button>

            </form>
            <button className="loginRegisterButton">
              {/* <Link  className="link" to="/register">Register </Link> */}
                <div className="">REGISTER</div>
            </button>
        </div>
    </>
  )
}
