import * as React from "react"
import * as styles from "./decision.module.scss"
import { useInView } from "react-intersection-observer"

import { MODAL_STEPS } from "../../pages/cost";
import { Modal } from "../steps";

const ConsultationBlock = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [modalStep, setModalStep] = React.useState(MODAL_STEPS.close);
  const clickCall = () => {
    typeof window !== "undefined" && window.ym(62048629,'reachGoal','callback_services')
  };
  return (
    <div className={styles.services_decision_cons}>
      <p className={styles.services_decision_cons_status}>Дмитрий, руководитель проектов RHome</p>
      <div className={styles.services_decision_cons_block + " " + (inView? `${styles.active}` : "")}>
        <div className={styles.services_decision_cons_text + " " + (inView? `${styles.active}` : "")}>
          <p className={styles.services_decision_cons_p}>&mdash;&nbsp;Оставьте заявку на консультацию, чтобы обсудить вашу задачу. Я&nbsp;перезвоню в&nbsp;рабочее время.</p>
        </div>
        <button
          onClick={() => {
            setModalStep(MODAL_STEPS.contact)
            clickCall();
          }}
          className={styles.services_decision_cons_button}
        >Заказать звонок</button>
      </div>
      <p ref={ref} className={styles.services_decision_cons_ref}></p>
      {modalStep!==MODAL_STEPS.close&&<Modal
        modalStep={modalStep}
        setModalStep={setModalStep}
      />}
    </div>
  )
}

export default ConsultationBlock
