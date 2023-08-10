import * as React from "react"
import * as styles from "./project-consultation.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"

export const ProjectConsultationDmitry = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={styles.project_cons + " " + styles.project_cons_dmitry}>
      <div className={styles.project_cons_bcg}>
        <div className={styles.project_cons_text + " " + (inView? `${styles.active}` : "")}>
          <div className={styles.project_cons_text1}>
            <p className={styles.project_cons_text_p}>&mdash;&nbsp;{text}</p>
          </div>
          <button className={styles.project_cons_button}>Заказать консультацию</button>
        </div>
      </div>
      <div className={styles.project_cons_person}>
        <StaticImage
          src="../../../images/personal/project_cons_dmitry.jpg"
          alt="Дмитрий, руководитель проектов"
          className={styles.project_cons_img}
        />
        <StaticImage
          src="../../../images/personal/project_cons_mob_dmitry.jpg"
          alt="Дмитрий, руководитель проектов"
          className={styles.project_cons_img_mob}
        />
        <p className={styles.project_cons_person_status}>Дмитрий,<br />руководитель проектов</p>
      </div>
      <p ref={ref} className={styles.project_cons_ref}></p>
    </div>
  )
}