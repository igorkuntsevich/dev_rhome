import * as React from "react"
import * as styles from "./decision.module.scss"
import { useInView } from "react-intersection-observer"

const ConsultationBlock = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={styles.services_decision_cons}>
      <p className={styles.services_decision_cons_status}>Дмитрий, руководитель проектов RHome</p>
      <div className={styles.services_decision_cons_block + " " + (inView? `${styles.active}` : "")}>
        <div className={styles.services_decision_cons_text + " " + (inView? `${styles.active}` : "")}>
          <p className={styles.services_decision_cons_p}>&mdash;&nbsp;Оставьте заявку на консультацию, чтобы обсудить вашу задачу. Я&nbsp;перезвоню в&nbsp;рабочее время.</p>
        </div>
        <button className={styles.services_decision_cons_button}>Заказать звонок</button>
      </div>
      <p ref={ref} className={styles.services_decision_cons_ref}></p>
    </div>
  )
}

export default ConsultationBlock