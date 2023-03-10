import "./styles.css";
import backGroundLogin from "../../assets/background-login.svg";
import eyesClosed from "../../assets/eyesClosed.svg";
import eyesOpen from "../../assets/eyesOpen.svg";
import { Link } from "react-router-dom";
import SignUp from "../Sign-up";




export default function SignIn( ) {

function handleTypeInput() {
    const passWordInput = document.querySelector(".inputPassword");
    const imgInput = document.querySelector(".img-input");

    if (passWordInput.type == "password") {
        passWordInput.type = "text";
        imgInput.setAttribute("src", eyesOpen)
    } else {
        passWordInput.type = "password";
        imgInput.setAttribute("src", eyesClosed)
    }
}
    return (
        <>
            <div className="border-top"></div>
            <div className="container-sign">
                <div className="sign">
                <img className="img-background" src={backGroundLogin}></img>
            <div>
                <form className="form">
                    <label className="label-form" htmlFor="email">Email</label>
                    <input className="input-form" type="email" name="email"  />
                    <label className="label-form" htmlFor="senha">Senha</label>
                    <input className="input-form inputPassword" type="password" name="senha" ></input>
                    <img onClick={()=>handleTypeInput()} className="img-input" src={eyesClosed} alt="eyes" />
                    <Link  className="link-form" to={'/sign-up'}>Cadastre-se</Link>
                    <button className="button-form">Login</button>
                </form>
            </div>
                </div>
            </div>
        </>
    )
}


