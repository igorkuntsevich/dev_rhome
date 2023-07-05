import * as React from "react"
import * as styles from "./breadcrumbs.module.scss"


export const InspirationPhotos = () => {
  return (
    <ul className={styles.breadcrumbs}>
      <li className={styles.breadcrumbs_li}>Вдохновение</li>
      <li className={styles.breadcrumbs_li}>Фотографии</li>
    </ul>
  )
}