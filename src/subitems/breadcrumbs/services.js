import * as React from "react"
import * as styles from "./breadcrumbs.module.scss"


export const BreadcrumbsServices = () => {
  return (
    <ul className={styles.breadcrumbs}>
      <li className={styles.breadcrumbs_li}>
        <li className={styles.breadcrumbs_link}>Услуги</li>
      </li>
    </ul>
  )
}