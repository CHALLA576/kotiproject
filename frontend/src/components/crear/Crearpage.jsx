import { Link } from "react-router-dom"
import styles from "./crearpage.module.css"
import vinod from "./images/vinod.jpg"
import vadina from "./images/vadina.jpg"

const Crearpage = ()=>{
    return(
        <div id={styles.con} >
    

            <h1>About</h1> <br />
            
            <div id={styles.main} >
                <div id={styles.content} >
             
                <pre id={styles.text}>
                    {
                `veerababu challa 
                s/o 
            suryanaraya challa`
                    }
                </pre>

                </div>


                <div id={styles.imagses} >
                <img id={styles.vinod} src={vinod} alt="image"  />
                </div>


            </div>
            <br />
            <div id={styles.main2} >
                <div id={styles.content2} >
                    <h1>content2</h1>
                    <pre>
                       { `vadina Content`}
                    </pre>
                </div>
                <div id={styles.imges2} >
                    <img id={styles.vadina}  src={vadina} alt="vadina" />
                </div>
                
            </div>
   

        </div>
    )
}
export default Crearpage 