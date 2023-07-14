import * as React from "react"
import * as styles from "./project.module.scss"

export const ProjectIntro = ( { title, breadcrumbs , leader , architector , manager , data , metr , building , budget }) => {
  return (
    <div className={styles.project_intro_left}>
      <div className={styles.project_intro_left_top}>
        {breadcrumbs}
        <h1 className={styles.project_intro_title}>{title}</h1>
      </div>
      <div>
        <div className={styles.project_intro_item}>
          <p className={styles.project_intro_item_p}>Руководитель: <span>{leader}</span></p>
          <p className={styles.project_intro_item_p}>Архитектор: <span>{architector}</span></p>
          <p className={styles.project_intro_item_p}>Менеджер: <span>{manager}</span></p>
        </div>
        <div className={styles.project_intro_item}>
          <p className={styles.project_intro_item_p}>Дата: <span>{data}</span></p>
          <p className={styles.project_intro_item_p}>Площадь: <span>{metr}&nbsp;м<sup>2</sup></span></p>
          <p className={styles.project_intro_item_p}>Строительные работы: <span>{building}</span></p>
          <p className={styles.project_intro_item_p}>Бюджет проекта: <span className={styles.project_intro_item_cost + " " + budget}></span></p>
        </div>
      </div>
    </div>
  )
}