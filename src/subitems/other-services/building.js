import * as React from "react"
import * as styles from "./other-services.module.scss"
import { Link } from "gatsby"

export const BuildingOtherServices = () => {
  return (
    <Link to="/services/building" className={styles.services_item + " " + styles.services_item_building}>
      <h2 className={styles.services_title}>Строительные работы</h2>
      <div>
        <p className={styles.services_p}>Довести проекты до&nbsp;конца можно только с&nbsp;лучшими исполнителями. Наши партнеры выполняют строительные и&nbsp;отделочные работы любой сложности.</p>
      </div>
      <p className={styles.services_link}>Подробнее</p>
    </Link>
  )
}