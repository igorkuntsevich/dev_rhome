import * as React from "react"
import * as styles from "./project-consultation.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"
import { ModalStepSecond } from "../../steps/step-second"

export const ProjectConsultationSergey = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [isModal, setModal] = React.useState(false);
  return (
    <div className={styles.project_cons + " " + styles.project_cons_sergey}>
      <div className={styles.project_cons_bcg}>
        <div className={styles.project_cons_text + " " + (inView? `${styles.active}` : "")}>
          <div className={styles.project_cons_text1}>
            <p className={styles.project_cons_text_p}>&mdash;&nbsp;{text}</p>
          </div>
          <button onClick={() => setModal(true)} className={styles.project_cons_button}>Заказать консультацию</button>
        </div>
      </div>
      <ModalStepSecond
        isVisible={isModal}
        onClose={() => setModal(false)}
      />
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