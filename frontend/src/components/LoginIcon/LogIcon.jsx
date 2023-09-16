import image1 from "../LoginIcon/images/hand.JPG"
import style from "../LoginIcon/Login.module.css"

const LoginIcon=()=>{
    return(
        <div id={style.main}>
            <div is={style.sub}>
                <img src={image1} alt="hand.pic" />
            </div>

        </div>
    )
}
export default LoginIcon