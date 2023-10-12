import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./inspiration.module.scss"

export const InspirationArticlePage = ( { title, chapter, url, backgroundImageUrl, number }) => {
  return (
    <Link 
      to={url} 
      className={styles.inspiration_item + " " + styles.inspiration_item_article_page}
      style={{"backgroundImage" : `url(${backgroundImageUrl})`}}>
      <div className={styles.inspiration_item_article_text}>
        <h2 className={styles.inspiration_item_article_title}>{title}</h2>
        <div className={styles.inspiration_item_article_caption}>
          <p className={styles.inspiration_item_article_p}>{chapter}</p>
          <p className={styles.inspiration_item_article_number}>{number}</p>
        </div>
      </div>
    </Link>
  )
}