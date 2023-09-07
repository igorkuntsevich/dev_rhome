import React, { useState } from 'react'
import * as styles from "./../review.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewBelomorskayaSpecial = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text + " " + styles.reviews_item_head_person3}>
          <p className={styles.reviews_item_head_name}>Елена</p>
          </div>
        <p className={styles.reviews_item_head_data + " " + styles.reviews_item_head_data_special}>14.01.2020</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + styles.reviews_item_body_text_wrap1 + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Наше сотрудничество с&nbsp;RHOME началось года 2&nbsp;назад, когда мы&nbsp;занимались поиском студии для создания дизайн проекта нашей квартиры. После обстоятельной беседы с&nbsp;директором Сергеем Рассеко мы&nbsp;остановили свой выбор именно на&nbsp;дизайн-студии RHOME.</p>
            <p className={styles.reviews_item_body_text_p}>Уже после первого общения сложилось впечатление, что команда работает проффесионально, слажено и&nbsp;ориентироана на&nbsp;удовлетворение пожеланий клиента. Так и&nbsp;оказалось. Мы&nbsp;получили не&nbsp;только визуализации будущего интерьера, но&nbsp;и&nbsp;подробную комплектацию с&nbsp;ценами на&nbsp;все материалы и&nbsp;мебель.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>Строиться решили тоже вместе с&nbsp;RHOME. Студия работает только со&nbsp;своими строителями, так что не&nbsp;было опасений, что дизайн-проект будет испорчен реализацией, как это часто бывает. Мы&nbsp;также заказали услугу авторский надзор, чтобы реальность соответствовала ожиданиям.</p>
            <p className={styles.reviews_item_body_text_p}>Авторский надзор вел Дмитрий Разумейчик. Нам было очень комфортно с&nbsp;ним работать на&nbsp;этапе разработки дизайн-проекта, так что мы&nbsp;с&nbsp;удовольствием продолжили наше сотрудничество и&nbsp;на&nbsp;этапе реализации. Сейчас ремонт в&nbsp;квартире завершается, доделываем последние детали. Мы&nbsp;очень довольна тем, как все получилось!</p>
            <p className={styles.reviews_item_body_text_p}>Большое спасибо Дмитрию и&nbsp;всей команде за&nbsp;чуткость и&nbsp;профессионализм!</p>
          </div>
          <div className={styles.reviews_item_body_buttons}>
            <button onClick={toggleProcessList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
            <Link to="/about/reviews" className={styles.reviews_item_body_link}>Посмотреть отзывы</Link>
          </div>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../../images/reviews/reviews_belomorskaya1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../../images/reviews/reviews_belomorskaya2.jpg"
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