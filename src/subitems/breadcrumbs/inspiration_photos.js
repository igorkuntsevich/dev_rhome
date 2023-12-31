import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./breadcrumbs.module.scss"


export const BreadcrumbsInspirationPhotos = () => {
  return (
    <ul className={styles.breadcrumbs}>
      <li className={styles.breadcrumbs_li}>
        <Link to="/inspiration" className={styles.breadcrumbs_link}>Вдохновение</Link>
      </li>
      <li className={styles.breadcrumbs_li}>
        <Link to="/inspiration/photos" className={styles.breadcrumbs_link}>Фотографии</Link>
      </li>
    </ul>
  )
}