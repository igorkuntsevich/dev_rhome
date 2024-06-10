import React, { useState } from 'react'
import * as styles from "./review.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewSilvano = () => {
  const [openReviewList , setOpenReviewList] = useState(false);
  const toggleReviewList =()=>{
    setOpenReviewList(!openReviewList);
  };
  const hide = openReviewList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text}>
          <p className={styles.reviews_item_head_name}>ООО &laquo;Сильвано Фэшн&raquo;</p>
          </div>
        <p className={styles.reviews_item_head_data}>17.09.2019</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>ООО &laquo;Сильвано Фешн&raquo; выражает благодарность дизайн-студии &laquo;RHOME&raquo; за&nbsp;выполненную работу по&nbsp;проектированию дизайна интерьера нашего офиса.</p>
            <p className={styles.reviews_item_body_text_p}>За&nbsp;время сотрудничества дизайн-студия &laquo;RHOME&raquo; подтвердила свой высокий профессиональный уровень. Несмотря на&nbsp;сложность проекта, все работы были выполнены вовремя, в&nbsp;строго оговоренные сроки и&nbsp;с&nbsp;высоким качеством.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>В&nbsp;процессе работы над проектом сотрудники дизайн-студии проявили компетентность и&nbsp;творческий подход. Благодарим дизайнеров за&nbsp;внимательное отношение к&nbsp;заказчику, детальную проработку проекта, исполнительность и&nbsp;достойный результат.</p>
            <p className={styles.reviews_item_body_text_p}>Опираясь на&nbsp;наш позитивный опыт сотрудничества, ООО &laquo;Сильвано Фешн&raquo; может рекомендовать компанию ООО &laquo;Р-ХОУМ&raquo; как надежный и&nbsp;профессиональный коллектив, способный качественно и&nbsp;быстро решать поставленные задачи.</p>
          </div>
          <button onClick={toggleReviewList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
          <Link to="/portfolio/commercial/ofis-silvano" className={styles.reviews_item_body_right_link_mob}>Посмотреть проект</Link>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../images/reviews/reviews_silvano1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../images/reviews/reviews_silvano2.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
          </div>
          <Link to="/portfolio/commercial/ofis-silvano" className={styles.reviews_item_body_right_link}>Посмотреть проект</Link>
        </div>
      </div>
    </div>
  )
}