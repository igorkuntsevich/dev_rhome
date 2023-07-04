import * as React from "react"
import * as styles from "./decision.module.scss"


const ConsultationBlock = () => {
  return (
    <div className={styles.services_decision_cons}>
      <p className={styles.services_decision_cons_status}>Дмитрий, руководитель проектов RHome</p>
      <div className={styles.services_decision_cons_block}>
        <p className={styles.services_decision_cons_text}>&mdash;&nbsp;Оставьте заявку на консультацию, чтобы обсудить вашу задачу. Я&nbsp;перезвоню в&nbsp;рабочее время.</p>
        <button className={styles.services_decision_cons_button}>Заказать звонок</button>
      </div>
    </div>
  )
}

export default ConsultationBlock