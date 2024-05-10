import { Link } from "react-router-dom";
import './LoginPage.css'



function LoginPage(){
    return(
        <>
        <div>
<label>User Name/Email: </label><br></br><br></br>
<input type="text" placeholder="User Name Here"></input><br></br><br></br>
<label>Password : </label><br></br><br></br>
<input type="text" placeholder="Password Here"></input><br></br><br></br>
<button>LogIn</button><br></br><br></br>

{/* <p>If you don't have account <button><Link to="/SignUp" className="signUp"> SignUp</Link> Here</button></p> */}
        </div>
        </>
    )
}
export default LoginPage;