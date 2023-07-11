import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./inspiration.module.scss"

export const InspirationPhoto = ( { title, url, backgroundImageUrl }) => {
  return (
    <Link
      to={url}
      className={styles.inspiration_item + " " + styles.inspiration_item_photo}
      style={{"backgroundImage" : `url(${backgroundImageUrl})`}}>
      <div className={styles.inspiration_item_photo_text}>
        <h2 className={styles.inspiration_item_photo_title}>{title}</h2>
        <p className={styles.inspiration_item_photo_number}>693</p>
      </div>
    </Link>
  )
}