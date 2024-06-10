import React, { useState } from 'react'
import * as styles from "./review.module.scss"

export const ReviewDiana = () => {
  const [openReviewList , setOpenReviewList] = useState(false);
  const toggleReviewList =()=>{
    setOpenReviewList(!openReviewList);
  };
  const hide = openReviewList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text}>
          <p className={styles.reviews_item_head_name}>Диана</p>
          </div>
        <p className={styles.reviews_item_head_data}>23.11.2016</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Выражаем благодарность коллективу &laquo;RHOME&raquo; за&nbsp;создание дизайн-проекта нашей квартиры. Все было реализовано с&nbsp;учетом наших пожеланий, к&nbsp;тому&nbsp;же в&nbsp;процессе ремонта без проблем можно было обратиться в&nbsp;студию по&nbsp;любому вопросу.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>Отдельное спасибо хотелось&nbsp;бы сказать за&nbsp;хорошую строительную бригаду и&nbsp;рекомендации в&nbsp;выборе организаций для заказа/покупки стройматериалов, мебели и&nbsp;тд. Т.к. это был наш первый ремонт, то&nbsp;такой подход существенно упростил нам жизнь и&nbsp;не&nbsp;пришлось нервничать, потому что процесс протекал гладко и&nbsp;без каких-либо существенных проблем.</p>
            <p className={styles.reviews_item_body_text_p}>Желаем успехов и&nbsp;дальнейшего развития студии!</p>
          </div>
          <button onClick={toggleReviewList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
        </div>
      </div>
    </div>
  )
}