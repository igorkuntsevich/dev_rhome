import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./breadcrumbs.module.scss"


export const BreadcrumbsProject = () => {
  return (
    <ul className={styles.breadcrumbs + " " + styles.breadcrumbs_black}>
      <li className={styles.breadcrumbs_li}>
        <Link to="/portfolio" className={styles.breadcrumbs_link}>Портфолио</Link>
      </li>
      <li className={styles.breadcrumbs_li}>
        <Link to="/portfolio" className={styles.breadcrumbs_link}>Квартиры</Link>
      </li>
    </ul>
  )
}