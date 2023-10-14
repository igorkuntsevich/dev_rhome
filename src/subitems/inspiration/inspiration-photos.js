import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./inspiration.module.scss"
import { Loader } from "../../components/loader/loader";
import { useGetPageViews } from "../../hooks/useGetPageViews";

export const InspirationPhoto = ( { title, url, backgroundImageUrl }) => {
const loadedViews=   useGetPageViews(url)

  return (
    <Link
      to={url}
      className={styles.inspiration_item + " " + styles.inspiration_item_photo}
      style={{"backgroundImage" : `url(${backgroundImageUrl})`}}>
      <div className={styles.inspiration_item_photo_text}>
        <h2 className={styles.inspiration_item_photo_title}>{title}</h2>
        <p className={styles.inspiration_item_photo_number}>{loadedViews|| <Loader/>}  </p>
      </div>
    </Link>
  )
}
