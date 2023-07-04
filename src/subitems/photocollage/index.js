import * as React from "react"
import * as styles from "./photocollage.module.scss"

export const PhotoCollage = ( { children, amount }) => {
  return (
    <div className={`wrapper ${styles.photocollage_images_bcg}`}>
      <div className={styles.photocollage_images + " " + amount}>
        {children}
      </div>
    </div>
  )
}