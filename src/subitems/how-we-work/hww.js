import * as React from "react"
import * as styles from "./hww.module.scss"
import { Link } from "gatsby"
import shortVideo from "../../video/hww_video.mp4"

export const HowWeWork = () => {
  return (
    <Link to="/about/process" className={styles.hww}>
      <div className={styles.hww_text}>
        <h2 className={styles.hww_title}>Как мы&nbsp;работаем с&nbsp;клиентами в&nbsp;RHome</h2>
        <p className={styles.hww_p}>Создание дизайн-проекта включает в&nbsp;себя 7&nbsp;этапов. Мы&nbsp;хотим подробно рассказать о&nbsp;каждом из&nbsp;них, чтобы вы&nbsp;могли заранее узнать, что стоит за&nbsp;созданием интерьера.</p>
      </div>
      <div className={styles.hww_video}>
        <video width="100%" height="100%" muted={true} playsInline={true} autoPlay={true} loop={true} type="video/mp4">
          <source src={shortVideo} type="video/mp4"/>
        </video>
      </div>
    </Link>
  )
}