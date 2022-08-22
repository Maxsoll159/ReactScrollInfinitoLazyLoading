import { useEffect } from "react"
import useObserver from "../hooks/useObserver"


export default function(){

    const url = "../placeholder.jpg"


    const [observer, setElement, entries] = useObserver({
        threshold: 0.25,
        root: null
    })

    useEffect(()=>{
        const imagen = document.querySelectorAll("img");
        setElement(imagen);
    }, [setElement])

    useEffect(()=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                observer.unobserve(lazyImage)
            }
        })
    }, [entries, observer])

    return(
        <>
        <img loading="lazy"  data-src="https://img2.rtve.es/i/?w=1600&i=1657019155649.jpg" alt="" src={url}/>
        <img loading="lazy"  data-src="https://p325k7wa.twic.pics/high/dragon-ball/dragonball-xenoverse-2/00-page-setup/dbxv2_game-thumbnail.jpg?twic=v1/cover=760x428/step=10/quality=80" alt="" src={url}/>
        <img loading="lazy"  data-src="https://cdn.forbes.com.mx/2019/10/Captura-de-pantalla-2019-10-24-a-las-12.45.32-640x360.png" alt="" src={url}/>
        <img loading="lazy"  data-src="https://sm.ign.com/t/ign_latam/screenshot/default/goku-final-x_tbme.1280.jpg" alt="" src={url}/>
        <img loading="lazy"  data-src="https://assets.adnradio.cl/2020/07/goku-dbz-style-by-mangasalivehd-dcy4chb-pre.jpg" alt="" src={url}/>  
        <img loading="lazy"  data-src="https://i.blogs.es/815532/disney-prepara-un-universo-cinematografico-de-dragon-ball-al-estilo-del-mcu/840_560.jpeg" alt="" src={url}/>
    </>
    )
}