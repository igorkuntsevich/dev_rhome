import * as React from "react"
import * as styles from "./project.module.scss"

export const ProjectPartnerItem = ({ text , image }) => {
  return (
    <div className={styles.project_partner}>
      {image}
      <p className={styles.project_partner_text}>{text}</p>
    </div>
  )
}