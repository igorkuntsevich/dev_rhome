import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./portfolio.module.scss"

export const PortfolioItem = ( { title, metr, url, image , building , budget }) => {
  return (
    <Link 
      to={url} 
      className={styles.portfolio_item + " " + styles.portfolio_item_article}
    >
      {image}
      <div className={styles.portfolio_item_text}>
        <h2 className={styles.portfolio_item_title}>{title}</h2>
        <div className={styles.portfolio_item_caption}>
          <p className={styles.portfolio_item_p + " "+ styles.portfolio_item_p_sup} style={metr.length === 0?{display:'none'}:{}}>{metr}&nbsp;м<sup>2</sup></p>
          <p className={styles.portfolio_item_p} style={building.length === 0?{display:'none'}:{}}>{building}</p>
          <p className={styles.portfolio_item_p} style={budget.length === 0?{display:'none'}:{}}><span className={styles.portfolio_item_cost + " " + budget}></span></p>
        </div>
      </div>
    </Link>
  )
}