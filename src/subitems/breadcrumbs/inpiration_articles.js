import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./breadcrumbs.module.scss"


export const BreadcrumbsInspirationArticles = () => {
  return (
    <ul className={styles.breadcrumbs}>
      <li className={styles.breadcrumbs_li}>
        <Link to="/inspiration" className={styles.breadcrumbs_link}>Вдохновение</Link>
      </li>
      <li className={styles.breadcrumbs_li}>
        <Link to="/inspiration/articles" className={styles.breadcrumbs_link}>Статьи</Link>
      </li>
    </ul>
  )
}