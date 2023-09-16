import axios from "axios"
import { useState } from "react"
import style from "./feedback.module.css"

const Feedback = ()=>{
    let [name, setName ] = useState("")
    let [email, setEmail] = useState("")
    let [feedback,setFeedback] = useState("")
    let [phonNo,setPhonNO] = useState("")

    let namedata=(e)=>{
        setName(e.target.value)

    }

    let emaildata=(e)=>{
        setEmail(e.target.value)

    }

    let feedbackdata=(e)=>{
        setFeedback(e.target.value)

    }
    let phonnodata=(e)=>{
        setPhonNO(e.target.value)
    }
    const formhandling=()=>{
       let payload = {name,email,feedback,phonNo}
        axios.post('http://localhost:5000/feedback', payload)
        .then((Response)=>{
            if(Response){
                alert(Response.data.message)
            }
            else{
                console.log('data is not posted');
            }
        })
    }


    return(
        <div id={style.main}>
            <form id={style.sub}>
            <label htmlFor="">Name :</label> <br />
            <input type="text" value={name} onChange={namedata} /> <br />
            <label htmlFor="">Email :</label> <br />
            <input type='text' value={email} onChange={emaildata} /> <br />
            <label htmlFor="">fedback :</label> <br />
            <input type="text" value={feedback} onChange={feedbackdata} /> <br />
            <label htmlFor="">Phono :</label> <br />
            <input type="text" value={phonNo} onChange={phonnodata} /> <br />
            <button onClick={formhandling}>submit</button>
            </form>

        </div>
    )
}
export default Feedback