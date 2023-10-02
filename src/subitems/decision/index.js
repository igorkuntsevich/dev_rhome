import * as React from "react"
import * as styles from "./decision.module.scss"
import { useInView } from "react-intersection-observer"
import { Modal } from "../modal-step2"

const ConsultationBlock = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [isModal, setModal] = React.useState(false);
  return (
    <div className={styles.services_decision_cons}>
      <p className={styles.services_decision_cons_status}>Дмитрий, руководитель проектов RHome</p>
      <div className={styles.services_decision_cons_block + " " + (inView? `${styles.active}` : "")}>
        <div className={styles.services_decision_cons_text + " " + (inView? `${styles.active}` : "")}>
          <p className={styles.services_decision_cons_p}>&mdash;&nbsp;Оставьте заявку на консультацию, чтобы обсудить вашу задачу. Я&nbsp;перезвоню в&nbsp;рабочее время.</p>
        </div>
        <button onClick={() => setModal(true)} className={styles.services_decision_cons_button}>Заказать звонок</button>
      </div>
      <p ref={ref} className={styles.services_decision_cons_ref}></p>
      <Modal
        isVisible={isModal}
        onClose={() => setModal(false)}
      />
    </div>
  )
}

export default ConsultationBlock