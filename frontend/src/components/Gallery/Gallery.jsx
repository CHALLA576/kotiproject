import React from "react";
import style  from "../Gallery/gallery.module.css"
import vadina from "../Gallery/scrooll/vadina.jpg"
import vinod from "../Gallery/scrooll/vinod.jpg"
import background from "../Gallery/scrooll/istockphoto-1381637603-1024x1024.jpg"
import gallery1 from "../Gallery/scrooll/gallery1.jpg"
import gallery2 from "../Gallery/scrooll/gallery2.jpg"
import gallery3 from "../Gallery/scrooll/gallery4.jpg"
import gallery5 from "../Gallery/scrooll/gallery5.jpg"
import gallery6 from "../Gallery/scrooll/gallery6.jpg"
import gallery7 from "../Gallery/scrooll/gallery7.jpg"
import gallery8 from "../Gallery/scrooll/gallery8.jpg"
import gallery9 from "../Gallery/scrooll/gallery9.jpg"
import gallery10 from "../Gallery/scrooll/gallery10.jpg"
import gallery11 from "../Gallery/scrooll/gallery11.jpg"
import gallery12 from "../Gallery/scrooll/SNL_5851.JPG"
import gallery13 from "../Gallery/scrooll/SNL_5987.JPG"

import App1 from "../Imagemongodb/App1";







const Gallery=()=>{


    return(
        <div id={style.main}>
            <h1>Gallery</h1>
                <div id={style.scrollimges}>
                    <img className={style.img} src={vadina}  alt="vadina" />
                    <img className={style.img} src={vinod} alt="vinod" />
                    <img className={style.img} src={background} alt="background" />
                    <img className={style.img} src={gallery1} alt="gallery1" />
                    <img className={style.img} src={gallery2} alt="gallery2" />
                    <img className={style.img} src={gallery3} alt="gallery3" />
                    <img className={style.img} src={gallery5} alt="gallery5" />
                    <img className={style.img} src={gallery6} alt="gallery6" />
                    <img className={style.img} src={gallery7} alt="gallery7" />
                    <img className={style.img} src={gallery8} alt="gallery8" />
                    <img className={style.img} src={gallery9} alt="gallery9" />
                    <img className={style.img} src={gallery10} alt="gallery10" />
                    <img className={style.img} src={gallery11} alt="gallery11" />
                    <img className={style.img} src={gallery12} alt="gallery11" />
                    <img className={style.img} src={gallery13} alt="gallery11" />
                   

                   




                </div>
                <div>
                    <App1/>
                </div>

        </div>
    )
}
export default Gallery;


