import * as React from "react"
import * as styles from "./services-cost.module.scss"
import { useInView } from "react-intersection-observer"

export const ServicesInterests = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={styles.services_interests}>
      <div className={styles.services_interests_text}>
        <h3 className={styles.services_interests_title}>Представим ваши интересы</h3>
        <div className={styles.services_interests_text_wrap}>
          <p className={styles.services_interests_text_p}>Наши специалисты сами занимаются вопросами поставки строительных и&nbsp;отделочных материалов. Кроме того, они проверят качество поставляемых материалов и&nbsp;качество выполнения работ другими подрядчиками (установка окон и&nbsp;дверей, охранной сигнализации и&nbsp;т.д.)</p>
          <p className={styles.services_interests_text_p} ref={ref}>При необходимости они могут наладить коммуникацию с&nbsp;товариществом собственников или ЖЭСом.</p>
        </div>
      </div>
      <div className={styles.services_interests_image}>
        <p className={styles.services_interests_image_status}>Дмитрий, руководитель проектов RHome</p>
        <p className={styles.services_interests_image_text + " " + (inView? `${styles.active}` : "")}>&mdash;&nbsp;Мы&nbsp;контролируем процесс реализации вашего дома, и&nbsp;всегда с&nbsp;вами на&nbsp;связи.</p>
      </div>
    </div>
  )
}