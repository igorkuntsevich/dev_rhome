import React, { useState } from 'react'
import * as styles from "./review.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewBorovliani = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text + " " + styles.reviews_item_head_person2}>
          <p className={styles.reviews_item_head_name}>Виктор</p>
          </div>
        <p className={styles.reviews_item_head_data}>14.04.2018</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + styles.reviews_item_body_text_wrap4 + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Над нашим проектом работал дизайнер Лев, но&nbsp;лично с&nbsp;ним мы&nbsp;общались мало (только во&nbsp;время презентации), вся коммуникация в&nbsp;основном велась с&nbsp;менеджером проекта Дмитрием. Нам очень понравилась предложенная идея и&nbsp;сам дизайн. Но, к&nbsp;сожалению, в&nbsp;процессе реализации проекта были обнаружены некоторые недочеты: к&nbsp;примеру, в&nbsp;дизайн-проекте не&nbsp;учли высоту окон на&nbsp;кухне, и&nbsp;предложенный карниз просто не&nbsp;подходил по&nbsp;размерам. Также были нюансы с&nbsp;кондиционером&nbsp;&mdash; установить внешний блок как задумано в&nbsp;проекте было практически нереально, пришлось искать альтернативу. К&nbsp;сожалению, с&nbsp;бригадой, которую предложила студия, мы&nbsp;не&nbsp;сошлись в&nbsp;финансовых вопросах, поэтому сам ремонт мы&nbsp;решили делать с&nbsp;другой бригадой.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>Но&nbsp;в&nbsp;целом впечатления о&nbsp;работе с&nbsp;RHome очень приятные. Менеджер, с&nbsp;которым мы&nbsp;общались, всегда шел нам навстречу и&nbsp;старался решать все возникающие в&nbsp;процессе ремонта вопросы максимально оперативно. В&nbsp;итоге ремонт мы&nbsp;сделали целиком по&nbsp;дизайн-проекту, который нам предложила студия (с&nbsp;незначительным отклонениями) и&nbsp;очень довольны результатом. Так что если нам снова понадобится дизайн-проект, обязательно вернемся.</p>
            <p className={styles.reviews_item_body_text_p}>Хотелось&nbsp;бы пожелать дизайнерам как можно тщательнее прорабатывать все нюансы и&nbsp;мелочи, чтобы потом в&nbsp;процессе самого ремонта возникало меньше вопросов. А&nbsp;так, конечно, спасибо за&nbsp;качественную работу и&nbsp;классный проект!</p>
          </div>
          <button onClick={toggleProcessList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
          <Link to="/portfolio/apartment/kvartira-borovlyani" className={styles.reviews_item_body_right_link_mob}>Посмотреть проект</Link>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../images/reviews/reviews_borovliani1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../images/reviews/reviews_borovliani2.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
          </div>
          <Link to="/portfolio/apartment/kvartira-borovlyani" className={styles.reviews_item_body_right_link}>Посмотреть проект</Link>
        </div>
      </div>
    </div>
  )
}