import * as React from "react"
import * as styles from "./project-consultation.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"

import { MODAL_STEPS } from "../../../pages/cost";
import { Modal } from "../../steps";

export const ProjectConsultationSergey = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [modalStep, setModalStep] = React.useState(MODAL_STEPS.close);
  const clickCall = () => {
    typeof window !== "undefined" && window.ym(62048629,'reachGoal','callback_consultation')
  };

  return (
    <div className={styles.project_cons + " " + styles.project_cons_sergey}>
      <div className={styles.project_cons_bcg}>
        <div className={styles.project_cons_text + " " + (inView? `${styles.active}` : "")}>
          <div className={styles.project_cons_text1}>
            <p className={styles.project_cons_text_p}>&mdash;&nbsp;{text}</p>
          </div>
          <button
            onClick={() => {
              setModalStep(MODAL_STEPS.contact)
              clickCall();
            }}
            className={styles.project_cons_button}
          >Заказать консультацию</button>
        </div>
      </div>
      {modalStep!==MODAL_STEPS.close&&<Modal
      modalStep={modalStep}
      setModalStep={setModalStep}
    />}

      <div className={styles.project_cons_person}>
        <StaticImage
          src="../../../images/personal/project_cons_sergey.jpg"
          alt="Сергей, руководитель студии"
          className={styles.project_cons_img}
        />
        <StaticImage
          src="../../../images/personal/project_cons_mob_sergey.jpg"
          alt="Сергей, руководитель студии"
          className={styles.project_cons_img_mob}
        />
        <p className={styles.project_cons_person_status}>Сергей,<br />руководитель студии</p>
      </div>
      <p ref={ref} className={styles.project_cons_ref}></p>
    </div>
  )
}
