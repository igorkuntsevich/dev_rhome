import React, { useState } from 'react'
import * as styles from "./review.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewProvans = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text + " " + styles.reviews_item_head_person3}>
          <p className={styles.reviews_item_head_name}>Евгения</p>
          </div>
        <p className={styles.reviews_item_head_data}>16.01.2020</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + styles.reviews_item_body_text_wrap1 + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;Студию, которая разработала&nbsp;бы дизайн-проект для моего дома, я&nbsp;искала в&nbsp;интернете. Оставила запросы примерно в&nbsp;5&nbsp;студий и&nbsp;стала ждать. RHOME очень быстро отреагировали на&nbsp;мой запрос: уже через полчаса мне перезвонил Сергей Рассеко, чтобы обсудить мой проект. По&nbsp;этому разговору мне он&nbsp;показался приятным и&nbsp;адекватным человеком, ответил на&nbsp;все мои вопросы. Уже после этого разговора я&nbsp;на&nbsp;90% определилась, что буду работать с&nbsp;RHOME.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>По&nbsp;работе с&nbsp;дизайнером у&nbsp;меня никаких нареканий не&nbsp;было. Все шло очень гладко&nbsp;&mdash; он&nbsp;прислушался ко&nbsp;всем моим пожеланиям, и&nbsp;уже на&nbsp;первой встрече я&nbsp;увидела&nbsp;то, что хотела. Конечно, правки были, но&nbsp;минимальные.</p>
            <p className={styles.reviews_item_body_text_p}>Поскольку я&nbsp;заказывала, только дизайн-проект, а&nbsp;ремонт делала сама, то&nbsp;были некоторые неудобства, связанные с&nbsp;тем, что некоторые материалы не&nbsp;были доступны в&nbsp;Минске&nbsp;&mdash; купить их&nbsp;можно было только в&nbsp;Москве. Но&nbsp;это вопрос и&nbsp;к&nbsp;ассортименту минских салонов.</p>
            <p className={styles.reviews_item_body_text_p}>В&nbsp;целом я&nbsp;довольна работой с&nbsp;RHOME!</p>
          </div>
          <button onClick={toggleProcessList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
          <Link to="/portfolio/house/dom-provans" className={styles.reviews_item_body_right_link_mob}>Посмотреть проект</Link>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../images/reviews/reviews_provans1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../images/reviews/reviews_provans2.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
          </div>
          <Link to="/portfolio/house/dom-provans" className={styles.reviews_item_body_right_link}>Посмотреть проект</Link>
        </div>
      </div>
    </div>
  )
}