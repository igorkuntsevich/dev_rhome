import * as React from "react"
import * as styles from "./project.module.scss"

export const ProjectIntro = ({ title, breadcrumbs , leader , architector , manager , data , metr , building , budget }) => {
  return (
    <div className={styles.project_intro_left}>
      <div className={styles.project_intro_left_top}>
        {breadcrumbs}
        <h1 className={styles.project_intro_title}>{title}</h1>
      </div>
      <div>
        <div className={styles.project_intro_item}>
          <p className={styles.project_intro_item_p} style={leader.length === 0?{display:'none'}:{}}>Руководитель: <span>{leader}</span></p>
          <p className={styles.project_intro_item_p} style={architector.length === 0?{display:'none'}:{}}>Архитектор: <span>{architector}</span></p>
          <p className={styles.project_intro_item_p} style={manager.length === 0?{display:'none'}:{}}>Менеджер: <span>{manager}</span></p>
        </div>
        <div className={styles.project_intro_item}>
          <p className={styles.project_intro_item_p} style={data.length === 0?{display:'none'}:{}}>Дата: <span>{data}</span></p>
          <p className={styles.project_intro_item_p} style={metr.length === 0?{display:'none'}:{}}>Площадь: <span>{metr}&nbsp;м<sup>2</sup></span></p>
          <p className={styles.project_intro_item_p} style={building.length === 0?{display:'none'}:{}}>Строительные работы: <span>{building}</span></p>
          <p className={styles.project_intro_item_p} style={budget.length === 0?{display:'none'}:{}}>Бюджет проекта: <span className={styles.project_intro_item_cost + " " + budget}></span></p>
        </div>
      </div>
    </div>
  )
}