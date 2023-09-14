import React, { useState } from 'react'
import * as styles from "./review.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewBerezovayaRoshcha = () => {
  const [openReviewList , setOpenReviewList] = useState(false);
  const toggleReviewList =()=>{
    setOpenReviewList(!openReviewList);
  };
  const hide = openReviewList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text + " " + styles.reviews_item_head_person4}>
          <p className={styles.reviews_item_head_name}>Алеся и Андрей</p>
          </div>
        <p className={styles.reviews_item_head_data}>23.08.2019</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + styles.reviews_item_body_text_wrap6 + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Мы&nbsp;очень довольны сотрудничеством с&nbsp;RHOME! Вы&nbsp;действительно смогли создать ландшафтный дизайн, который вписался в&nbsp;местность и&nbsp;гармонирует с&nbsp;домом. А&nbsp;дом у&nbsp;нас необычный!</p>
            <p className={styles.reviews_item_body_text_p}>С&nbsp;нами работал архитектор Алексей, и&nbsp;мы&nbsp;просто были очарованы его профессионализмом, интеллигентным подходом к&nbsp;работе и&nbsp;общению.</p>
            <p className={styles.reviews_item_body_text_p}>Причем нам не&nbsp;только придумали, как разбить наклонный участок на&nbsp;зоны, и&nbsp;проложили дорожки, но&nbsp;и&nbsp;помогли подобрать растения. Все эти кустики подбирались с&nbsp;настоящим биологом&nbsp;&mdash; мы&nbsp;раньше и&nbsp;подумать не&nbsp;могли, что все так серьезно! Результат в&nbsp;итоге отличный&nbsp;&mdash; растения отлично прижились и&nbsp;уже значительно разрослись. Радуют нас зимой и&nbsp;летом (часть из&nbsp;них вечнозеленые).</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>Еще нам сделали реконструкцию недостроенной террасы. Получилось замечательно: красиво и&nbsp;функционально! Мы&nbsp;постоянно собираемся там семьей и&nbsp;с&nbsp;друзьями! Все сделано на&nbsp;10&nbsp;баллов!</p>
            <p className={styles.reviews_item_body_text_p}>Большое спасибо!</p>
          </div>
          <button onClick={toggleReviewList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
          <Link to="/portfolio/house/dom-berezovaya-roshha" className={styles.reviews_item_body_right_link_mob}>Посмотреть проект</Link>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../images/reviews/reviews_berezovaya_roshcha1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../images/reviews/reviews_berezovaya_roshcha2.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
          </div>
          <Link to="/portfolio/house/dom-berezovaya-roshha" className={styles.reviews_item_body_right_link}>Посмотреть проект</Link>
        </div>
      </div>
    </div>
  )
}