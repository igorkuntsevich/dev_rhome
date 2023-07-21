import * as React from "react"
import * as styles from "./project-task.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"

export const ProjectTaskSvetlana = ({ taskText , wishText }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={styles.project_task + " " + styles.project_task_svetlana}>
      <div className={styles.project_task_bcg}>
        <div className={styles.project_task_text + " " + styles.project_task_text_svetlana}>
          <div className={styles.project_task_text1 + " " + (inView? `${styles.active}` : "")}>
            <p className={styles.project_task_text_title}>Задача:</p>
            <p className={styles.project_task_text_p}>{taskText}</p>
          </div>
          <div className={styles.project_task_text2 + " " + (inView2? `${styles.active}` : "")}>
            <p className={styles.project_task_text_title}>Пожелания клиента</p>
            <p className={styles.project_task_text_p}>&mdash;&nbsp;{wishText}</p>
          </div>
        </div>
      </div>
      <div className={styles.project_task_person}>
        <StaticImage
          src="../../../images/personal/project_svetlana.jpg"
          alt="Светлана, архитектор"
        />
        <p className={styles.project_task_person_status}>Светлана, архитектор</p>
      </div>
      <p ref={ref} className={styles.project_task_ref1}></p>
      <p ref={ref2} className={styles.project_task_ref2}></p>
    </div>
  )
}