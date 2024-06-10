import React from 'react'
import * as styles from "./review.module.scss"

export const ReviewMarina = () => {
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text}>
          <p className={styles.reviews_item_head_name}>Марина</p>
          </div>
        <p className={styles.reviews_item_head_data}>14.07.2011</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Выражаю огромную благодарность всему коллективу за&nbsp;креативную и&nbsp;профессиональную работу студии и&nbsp;строительной компании, дизайнерам&nbsp;&mdash; Екатерине, Дмитрию, Алесе, Сергею за&nbsp;современные, интересные идеи и&nbsp;постоянную помощь, техническую поддержку в&nbsp;реализации проекта.</p>
          </div>
        </div>
      </div>
    </div>
  )
}