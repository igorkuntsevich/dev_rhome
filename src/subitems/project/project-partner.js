import * as React from "react"
import * as styles from "./project.module.scss"

export const ProjectPartner = ({ items }) => {
  return (
    <div className={styles.project_partners}>
      <h2 className={styles.project_partners_title}>В&nbsp;проекте использовались материалы</h2>
      <div className={styles.project_partners_grid}>
        {items}
      </div>
    </div>
  )
}