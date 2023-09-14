import React, { useState } from 'react'
import * as styles from "./review.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewAlla = () => {
  const [openReviewList , setOpenReviewList] = useState(false);
  const toggleReviewList =()=>{
    setOpenReviewList(!openReviewList);
  };
  const hide = openReviewList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text + " " + styles.reviews_item_head_person3}>
          <p className={styles.reviews_item_head_name}>Алла</p>
          </div>
        <p className={styles.reviews_item_head_data}>16.01.2020</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + styles.reviews_item_body_text_wrap5 + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Мы&nbsp;обратились в&nbsp;RHOME, потому что понравились проекты, которые увидели в&nbsp;портфолио на&nbsp;сайте. Также я&nbsp;слышала много положительных отзывов о&nbsp;работе студии. Когда познакомилась с&nbsp;командой&nbsp;&mdash; окончательно убедилась в&nbsp;правильности сделанного выбора.</p>
            <p className={styles.reviews_item_body_text_p}>Понравилось&nbsp;то, что нам предлагались различные идеи по&nbsp;обустройству пространства, где использовались технологические новинки. Нам всегда давали время подумать и&nbsp;никто не&nbsp;продавливал и&nbsp;не&nbsp;настаивал на&nbsp;своей позиции. Первый предложенный вариант проекта меня несколько смутил. Решила обсудить эту ситуацию, позвонила руководителю студии Дмитрию Разумейчику. Он&nbsp;абсолютно вежливо выслушал и&nbsp;сказал: &laquo;Хорошо, представим другой вариант&raquo;. Следующий вариант уже пришёлся по&nbsp;вкусу. Мы&nbsp;больше всего контактировали именно с&nbsp;Дмитрием Разумейчиком, хотя понимаем, что это коллективная работа большой команды специалистов.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>С&nbsp;дизайнерами мы&nbsp;советовались по&nbsp;любым мелочам от&nbsp;выбора цвета обивки мебели, цвета текстиля, подбору обоев до&nbsp;формы дверных ручек и&nbsp;т.д. Всегда выслушивали наши пожелания и&nbsp;подсказывали&nbsp;то, что нам иногда было неочевидно как неспециалистам. Никогда не&nbsp;был такого, чтобы наш вопрос остался без ответа. Дмитрий всегда перезванивал, организовывал встречи с&nbsp;командой, которая вела наш проект, часто нас лично консультировал.</p>
            <p className={styles.reviews_item_body_text_p}>Проект воплотили в&nbsp;жизнь строители, которые сотрудничают со&nbsp;студией. В&nbsp;этом тоже были свои плюсы. Так как технические вопросы по&nbsp;проекту они решали между собой, не&nbsp;втягивая нас в&nbsp;эти процессы. Строители оказались интеллигентными, высококлассными специалистами.</p>
            <p className={styles.reviews_item_body_text_p}>Что у&nbsp;нас не&nbsp;сошлось с&nbsp;нашими ожиданиями по&nbsp;ходу ремонта? Это только сроки строительства. Нам, конечно, хотелось, чтобы все было немного быстрее. И&nbsp;не&nbsp;сошлись ожидания по&nbsp;поводу стоимости ремонта, но&nbsp;здесь мы&nbsp;сами сделали выбор в&nbsp;сторону более дорогостоящих материалов.</p>
            <p className={styles.reviews_item_body_text_p}>Конечный результат нас порадовал. Всем огромное спасибо. Всё получилось &laquo;как с&nbsp;картинки&raquo;!</p>
          </div>
          <button onClick={toggleReviewList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../images/reviews/reviews_alla1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../images/reviews/reviews_alla2.jpg"
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