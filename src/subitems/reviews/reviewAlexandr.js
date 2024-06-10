import React, { useState } from 'react'
import * as styles from "./review.module.scss"

export const ReviewAlexandr = () => {
  const [openReviewList , setOpenReviewList] = useState(false);
  const toggleReviewList =()=>{
    setOpenReviewList(!openReviewList);
  };
  const hide = openReviewList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text}>
          <p className={styles.reviews_item_head_name}>Александр</p>
          </div>
        <p className={styles.reviews_item_head_data}>10.05.2018</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Решив делать ремонт, мы&nbsp;сразу знали, что будем обращаться к&nbsp;дизайнерам. Остановились на&nbsp;студии RHome, так как понравились проекты в&nbsp;их&nbsp;портфолио.</p>
            <p className={styles.reviews_item_body_text_p}>На&nbsp;первой консультации в&nbsp;студии нам достаточно подробно рассказали, как будет строиться работа на&nbsp;всех этапах. Всех специалистов, которые трудились на&nbsp;нашем проекте (а&nbsp;это дизайнер, архитектор, инженер и&nbsp;менеджер) оцениваем высоко, так как в&nbsp;конечном итоге они помогли в&nbsp;реализации задуманного.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>Вообще всем, кто планирует ремонт, рекомендуем обращаться к&nbsp;профессионалам, так как услуга определенно полезна и&nbsp;экономит время, нервы и&nbsp;деньги.</p>
          </div>
          <button onClick={toggleReviewList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
        </div>
      </div>
    </div>
  )
}