import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./breadcrumbs.module.scss"


export const BreadcrumbsAbout = () => {
  return (
    <ul className={styles.breadcrumbs}>
      <li className={styles.breadcrumbs_li}>
        <Link to="/about" className={styles.breadcrumbs_link}>О&nbsp;студии</Link>
      </li>
    </ul>
  )
}