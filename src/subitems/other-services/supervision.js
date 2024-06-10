import * as React from "react"
import * as styles from "./other-services.module.scss"
import { Link } from "gatsby"

export const SupervisionOtherServices = () => {
  return (
    <Link to="/services/supervision" className={styles.services_item + " " + styles.services_item_supervision}>
      <h2 className={styles.services_title}>Авторский надзор</h2>
      <div>
        <p className={styles.services_p}>Что такое авторский надзор? Авторский надзор&nbsp;&mdash; это контроль качества строительных работ архитектором или проектировщиком дизайн-проекта.</p>
      </div>
      <p className={styles.services_link}>Подробнее</p>
    </Link>
  )
}