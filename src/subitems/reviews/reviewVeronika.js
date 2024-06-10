import React, { useState } from 'react'
import * as styles from "./review.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export const ReviewVeronika = () => {
  const [openReviewList , setOpenReviewList] = useState(false);
  const toggleReviewList =()=>{
    setOpenReviewList(!openReviewList);
  };
  const hide = openReviewList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text}>
          <p className={styles.reviews_item_head_name}>Вероника</p>
          </div>
        <p className={styles.reviews_item_head_data}>14.07.2011</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p + " " + styles.reviews_item_body_text_p_bold}>О&nbsp;студии</p>
            <p className={styles.reviews_item_body_text_p}>Очень приятная атмосфера, понравился интерьер самой студии. Дружелюбное, внимательное и&nbsp;веселое отношение к&nbsp;клиенту, располагало на&nbsp;легкую доверительную беседу о&nbsp;мечтах и&nbsp;целях создания своего уютного, красивого и&nbsp;функционального дома.</p>
            <p className={styles.reviews_item_body_text_p + " " + styles.reviews_item_body_text_p_bold}>О&nbsp;проекте</p>
            <p className={styles.reviews_item_body_text_p}>Очень красивый проект, выполненный с&nbsp;пониманием вкуса и&nbsp;желания клиента. Четко, удобно и&nbsp;понятно сделана тех. документация. Понравилось оформление тех. документации.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openReviewList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p + " " + styles.reviews_item_body_text_p_bold}>О&nbsp;команде</p>
            <p className={styles.reviews_item_body_text_p}>Творческая команда с&nbsp;профессиональным подходом к&nbsp;своему делу, умеющие говорить с&nbsp;заказчиком на&nbsp;одном языке и&nbsp;создавать новые, интересные идеи. Понравилось&nbsp;то, что проект создавался не&nbsp;одним лицом, а&nbsp;целой командой, заинтересованной в&nbsp;положительном результате. Дизайнеры студии помогают воплотить мечту в&nbsp;реальность, отвлечь от&nbsp;суровых будней. При этом заказчик неосознанно внедряется в&nbsp;этот интересный процесс, тем самым набираясь опыта для своего дальнейшего совершенствования.</p>
            <p className={styles.reviews_item_body_text_p + " " + styles.reviews_item_body_text_p_bold}>О&nbsp;строителях</p>
            <p className={styles.reviews_item_body_text_p}>Хорошо подобран персонал (квалифицированные специалисты). Несмотря на&nbsp;длительный и&nbsp;довольно сложный процесс ремонтных работ, осталась очень довольна результатом!!! Понравился комплексный подход к&nbsp;осуществлению данного проекта&nbsp;&mdash; доставка материалов, погрузочно-разгрузочные работы, уборка, вывоз мусора, помощь в&nbsp;выборе материалов, сантехники и&nbsp;т.д. Хочу отметить качество выполненных штукатурных работ, работу по&nbsp;установке встроенных светильников, плиточные работы. Работали настоящие профессионалы!!!</p>
          </div>
          <button onClick={toggleReviewList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
        </div>
        <div className={styles.reviews_item_body_right}>
          <div className={styles.reviews_item_body_images}>
            <StaticImage
              src="../../images/reviews/reviews_veronika1.jpg"
              loading="eager"
              alt=""
              className={styles.reviews_item_body_img}
            />
            <StaticImage
              src="../../images/reviews/reviews_veronika2.jpg"
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