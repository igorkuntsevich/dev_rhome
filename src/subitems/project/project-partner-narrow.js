import * as React from "react"
import * as styles from "./project.module.scss"

export const ProjectPartnerNarrow = ({ items }) => {
  return (
    <div className={styles.project_partners}>
      <h2 className={styles.project_partners_title}>В&nbsp;проекте использовались материалы</h2>
      <div className={styles.project_partners_grid + " " + styles.project_partners_grid_narrow}>
        {items}
      </div>
    </div>
  )
}