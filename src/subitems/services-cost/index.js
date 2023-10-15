import * as React from "react"
import * as styles from "./services-cost.module.scss"
import { useInView } from "react-intersection-observer"

import { Link } from "gatsby"
import { MODAL_STEPS } from "../../pages/cost";
import { Modal } from "../steps";

export const ServicesCost = ( { title } ) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [modalStep, setModalStep] = React.useState(MODAL_STEPS.close);
  return (
    <div className={styles.services_cost}>
      <h2 className={styles.services_cost_title}>{title}</h2>
      <div className={styles.services_cost_image}>
        <p className={styles.services_cost_image_status}>Сергей, руководитель студии RHome</p>
        <p className={styles.services_cost_image_text + " " + (inView? `${styles.active}` : "")}>&mdash;&nbsp;Мы&nbsp;работаем официально, по&nbsp;договору, с&nbsp;прозрачным ценообразованием.</p>
      </div>
      <div className={styles.services_cost_text}>
        <p className={styles.services_cost_text_p}>Воспользуйтесь простым калькулятором, чтобы узнать стоимость своего дизайн-проекта.</p>
        <button  onClick={()=>{setModalStep(MODAL_STEPS.contact)}} className={styles.services_cost_link}>Рассчитать стоимость</button>
      </div>
      <p ref={ref} className={styles.services_cost_ref}></p>
      {modalStep!==MODAL_STEPS.close&&<Modal
        modalStep={modalStep}
        setModalStep={setModalStep}
      />}
    </div>
  )
}
