import React, { useState } from 'react'
import * as styles from "./review.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewMstislavtsa = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text + " " + styles.reviews_item_head_person2}>
          <p className={styles.reviews_item_head_name}>Олег</p>
          </div>
        <p className={styles.reviews_item_head_data}>16.01.2020</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Я&nbsp;выбирал студию, как и&nbsp;большинство, по&nbsp;интернету. У&nbsp;RHOME мне понравились уже сделанные работы, которые я&nbsp;увидел в&nbsp;портфолио на&nbsp;сайте.</p>
            <p className={styles.reviews_item_body_text_p}>Решающим фактором стало&nbsp;то, что RHomе делает проекты &laquo;под ключ&raquo;&nbsp;&mdash; меня не&nbsp;интересовали студии, которые делают только дизайн-проект. Знаете, как это часто бывает: одна студия делает только визуализации, а&nbsp;исполнители&nbsp;&mdash; другая команда, отчего страдает реализация дизайнерской концепции. В&nbsp;RHome команда ведет весь проект от&nbsp;начала до&nbsp;конца.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>Для меня это было особенно важным, потому что я&nbsp;живу за&nbsp;рубежом и&nbsp;мне нужно было, чтобы проект вели и&nbsp;в&nbsp;мое отсутствие. Конечно, со&nbsp;мной все согласовывали, я&nbsp;приезжал, чтобы выбрать определенные вещи в&nbsp;интерьер. Иногда сроки из-за этого затягивались, но&nbsp;в&nbsp;целом мое включение в&nbsp;строительство было минимальным.</p>
            <p className={styles.reviews_item_body_text_p}>Еще хотелось&nbsp;бы отметить клиентоориентированность студии. Мы&nbsp;очень быстро нашли взаимопонимание с&nbsp;дизайнером. Я&nbsp;рассказал ему о&nbsp;своих пожеланиях, и&nbsp;он&nbsp;услышал все правильно. Получилось в&nbsp;точности так, как я&nbsp;хотел. Впечатляет, когда смотришь на&nbsp;картинку и&nbsp;понимаешь, что в&nbsp;голове у&nbsp;себя это так и&nbsp;представлял!</p>
            <p className={styles.reviews_item_body_text_p}>Сейчас ремонт в&nbsp;моей квартире почти закончен, и&nbsp;результат полностью соответствует дизайн-проекту. К&nbsp;строительной бригаде у&nbsp;меня тоже нет никаких нареканий&nbsp;&mdash; очень профессиональные ребята. Это очень здорово, когда&nbsp;то, что ты&nbsp;представлял один в&nbsp;один соответствует реальности. Это очень классно!</p>
          </div>
          <button onClick={toggleProcessList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../images/reviews/reviews_mstislavtsa1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../images/reviews/reviews_mstislavtsa2.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
          </div>
        </div>
      </div>
    </div>
  )
}