import axios from "axios"
import { useEffect, useState } from "react"

const Api=()=>{
    let [content,setContent] = useState([]);


    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((response)=>{
            setContent(response.data.products)
        })
        .catch(()=>{
            'data is not fecthed'
        })

    },[])

    return(
    <div>
        {content.map((x)=>{
            return(
                <div>
                    <h1>{x.id}</h1>
                    <h1>{x.title}</h1>

                    // if we want all images
                    {x.images.map((y)=>{
                        return(
                            
                            <div> 
                             
                                
                                <img src={y} alt={x.title} width={100}  />

       

                            </div>
                        )
                    })}

                    // if we want only one image 

                    <img src={x.images[0]} alt={x.id} width={500}/>

                </div>
            )
        })}
    </div>
     

       
    )
}
export default Api