import * as React from "react"
import * as styles from "./project-consultation.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"
import { Modal } from "../../modal-step2"

export const ProjectConsultationSvetlana = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [isModal, setModal] = React.useState(false);
  return (
    <div className={styles.project_cons + " " + styles.project_cons_svetlana}>
      <div className={styles.project_cons_bcg}>
        <div className={styles.project_cons_text + " " + (inView? `${styles.active}` : "")}>
          <div className={styles.project_cons_text1}>
            <p className={styles.project_cons_text_p}>&mdash;&nbsp;{text}</p>
          </div>
          <button onClick={() => setModal(true)} className={styles.project_cons_button}>Заказать консультацию</button>
        </div>
      </div>
      <Modal
        isVisible={isModal}
        onClose={() => setModal(false)}
      />
      <div className={styles.project_cons_person}>
        <StaticImage
          src="../../../images/personal/project_cons_svetlana.jpg"
          alt="Светлана, архитектор"
          className={styles.project_cons_img}
        />
        <StaticImage
          src="../../../images/personal/project_cons_mob_svetlana.jpg"
          alt="Светлана, архитектор"
          className={styles.project_cons_img_mob}
        />
        <p className={styles.project_cons_person_status}>Светлана,<br />архитектор</p>
      </div>
      <p ref={ref} className={styles.project_cons_ref}></p>
    </div>
  )
}