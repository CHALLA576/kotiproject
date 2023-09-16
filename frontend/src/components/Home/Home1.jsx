import styles from "./Home1.module.css"
import  "../Navbar/Home"
import { Link } from "react-router-dom"
import homeimage from "./images/white-floral-wedding-celebration-beautiful-nature-spring-background-flower-space-blossom-generative-ai_163305-232923.jpg"
import audio from "../Audio/Na-Roja-Nuvve.mp3"
import { useRef } from "react"
const Home1=()=>{

    const AudioRef = useRef(null)
    const Aduioex=()=>{
        if(AudioRef.current){
            AudioRef.current.play()
        }

    }

    const Mouseleve = ()=>{
        if(AudioRef.current){
            AudioRef.current.pause()
            AudioRef.current.currentTime = 0
        }
    }
    return(
       
       <div>
             <div id={styles.con} onMouseEnter={Aduioex} onMouseLeave={Mouseleve} >
                <audio src={audio} ref={AudioRef} ></audio>
                <img id={styles.img} src={homeimage} alt="" /> <br />

                <Link id={styles.link} to="/Home">click to back menu1</Link>
            
            </div>
         
       </div>

    )
}
export default Home1