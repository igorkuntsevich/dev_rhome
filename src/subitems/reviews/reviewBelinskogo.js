import React, { useState } from 'react'
import * as styles from "./review.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewBelinskogo = () => {
  const [openReviewList , setOpenReviewList] = useState(false);
  const toggleReviewList =()=>{
    setOpenReviewList(!openReviewList);
  };
  const hide = openReviewList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text + " " + styles.reviews_item_head_person4}>
          <p className={styles.reviews_item_head_name}>Тамара и Николай</p>
          </div>
        <p className={styles.reviews_item_head_data}>01.02.2018</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + styles.reviews_item_body_text_wrap3 + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p + " " + styles.reviews_item_body_text_p_bold}>О&nbsp;проекте</p>
            <p className={styles.reviews_item_body_text_p}>Ремонт в&nbsp;нашей квартире находится на&nbsp;завершающей стадии и&nbsp;уже можно сделать некоторые выводы об&nbsp;исполнении вашего проекта.</p>
            <p className={styles.reviews_item_body_text_p}>Когда мы&nbsp;приняли решение полностью отремонтировать нашу квартиру, мы&nbsp;занялись поисками в&nbsp;Минске дизайнерского бюро которое могло&nbsp;бы предложить нам проект ремонта и&nbsp;дизайн интерьера, отвечающего нашим требованиям и&nbsp;пожеланиям. После контакта с&nbsp;несколькими компаниями мы&nbsp;сделали выбор в&nbsp;вашу пользу и&nbsp;не&nbsp;ошиблись.</p>
            
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p + " " + styles.reviews_item_body_text_p_bold}>Почему выбрали &laquo;RHome&raquo;?</p>
            <p className={styles.reviews_item_body_text_p}>Прежде всего у&nbsp;вас хорошая коммуникабельность&nbsp;&mdash; вы&nbsp;сразу предложили осмотреть квартиру и&nbsp;на&nbsp;месте обсудить план работ и&nbsp;возможные изменения в&nbsp;планировке. В&nbsp;процессе обсуждения мы&nbsp;оценили ваш профессионализм и&nbsp;умение учитывать наши предложения. Составление плана строительных работ и&nbsp;проекта дизайна интерьера сделано очень быстро и&nbsp;мы&nbsp;получили достаточно времени для дальнейшего обсуждения этих работ в&nbsp;деталях.</p>
            <p className={styles.reviews_item_body_text_p}>Нельзя сказать, что мы&nbsp;сразу приняли ваш проект в&nbsp;первоначальном виде. Согласно нашим замечаниям и&nbsp;пожеланиям в&nbsp;проект были внесены различные изменения, но&nbsp;это были рабочие моменты, важно&nbsp;то, что мы&nbsp;всегда находили компромиссное решение. Особо отметим, что изменения в&nbsp;иллюстративных материалах проекта делались оперативно и&nbsp;мы&nbsp;могли воочию сравнить варианты дизайна смоделированного на&nbsp;рисунках.</p>
            <p className={styles.reviews_item_body_text_p}>Ваши рекомендации по&nbsp;выбору методов ремонтных работ, используемых строительных и&nbsp;отделочных материалов были нам очень полезны. Немаловажным является и&nbsp;то, что ваша команда хорошо знает белорусский рынок, что позволяет выбрать качественного исполнителя строительных работ, мебель и&nbsp;различные аксессуары.</p>
            <p className={styles.reviews_item_body_text_p + " " + styles.reviews_item_body_text_p_bold}>О&nbsp;студии</p>
            <p className={styles.reviews_item_body_text_p}>В&nbsp;целом мы&nbsp;считаем что разработанный вами дизайн-проект является для нас оптимальным, поскольку он&nbsp;органично сочетает в&nbsp;себе авторский дизайн и&nbsp;пожелания заказчика. У&nbsp;вас хорошая квалифицированная команда и&nbsp;это несомненное преимущество для успешного выполнения любого проекта. Нам понравилось работать с&nbsp;вами. Если у&nbsp;нас возникнет необходимость заказать новый дизайн-проект мы, без сомнения, обратимся к&nbsp;вам еще раз и&nbsp;будем рекомендовать вашу компанию нашим друзьям.</p>
          </div>
          <button onClick={toggleReviewList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../images/reviews/reviews_belinskogo1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../images/reviews/reviews_belinskogo2.jpg"
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