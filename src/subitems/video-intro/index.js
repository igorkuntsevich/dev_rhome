import * as React from "react"

import { useEffect,   useState } from "react"



export const Video = ( {mobileSrc , desktopSrc})=>{

  let defaultVideo =  mobileSrc;

  const [ videoSrc, setVideoSrc ] = useState(defaultVideo);

  const resize = ()=>{
    if(typeof window !="undefined"){
      if(window.matchMedia("(min-width: 768px)").matches  ){
        setVideoSrc(desktopSrc);
      } else {
        setVideoSrc(mobileSrc);
      }
    }
  };
  useEffect(()=>{
    setTimeout(()=>{
      resize()
    }, 1)

    window.addEventListener('resize', resize)
    return ()=> window.removeEventListener('resize' ,resize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


    const videoClass = videoSrc===mobileSrc? "main_video_mobile" :"main_video ";
    const videoTemplate = `<video src=${videoSrc} class=${videoClass} loop="true"  muted  playsinline  autoplay  width="100%" height="100%"></video>`

  return <div dangerouslySetInnerHTML={{__html:videoTemplate}} />
}

