import * as React from "react"
import * as styles from "./remote-work.module.scss"
import video from "../../video/remove_work.mp4"
import { useEffect , useRef } from "react"
import { useInView } from "react-intersection-observer"

export const RemoteWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const videoRef = useRef();
  useEffect(()=>{
    if(inView){
      videoRef.current.play();
    }
  },[inView]);
  return (
    <div className={styles.remote}>
      <div className={styles.remote_video}>
        <video width="100%" height="100%" ref={videoRef} muted={true} playsInline={true} type="video/mp4">
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <div className={styles.remote_right}>
        <h3 className={styles.remote_right_title}>Работаем с&nbsp;объектами по&nbsp;всему миру</h3>
        <div className={styles.remote_right_text}>
          <p className={styles.remote_right_text_p}>Наш офис расположен в&nbsp;Минске, но&nbsp;мы разрабатываем дизайн-проекты для квартир, домов, офисов и&nbsp;отелей в&nbsp;разных уголках мира.</p>
          <p className={styles.remote_right_text_p}>Для этого совершенно не&nbsp;обязательно встречаться лично. Все переговоры перенесем в&nbsp;Skype, Viber, Telegram, WhatsApp или любое другое удобное для вас приложение.</p>
        </div>
        <div className={styles.remove_right_speak}>
          <p className={styles.remove_right_speak_p} ref={ref}>Свободно разговариваем на</p>
          <div className={styles.remove_right_speak_flags}>
            <div className={styles.remove_right_speak_flag1}></div>
            <div className={styles.remove_right_speak_flag2}></div>
          </div>
        </div>
      </div>
    </div>
  )
}