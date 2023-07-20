import * as React from "react"
import * as styles from "./footer-consultation.module.scss"
import { useInView } from "react-intersection-observer"

export const FooterConsultationDmitry = () => {
  const { ref, inView  } = useInView({
    triggerOnce: true,
  });
  return (
    <div className={styles.consultation_block}>
      <div className={styles.consultation_image}>
        <div className={styles.consultation_text}>
          <p className={styles.consultation_image_text + " " + (inView? `${styles.active}` : "")}>&mdash;&nbsp;Подробно расскажу, как строится работа по&nbsp;дизайн-проекту.</p>
          <p ref={ref} className={styles.consultation_image_status + " " + (inView? `${styles.active}` : "")}>Дмитрий, руководитель проектов RHome</p>
        </div>
      </div>
      <div className={styles.consultation_right}>
        <div className={styles.consultation_contacts}>
          <div className={styles.consultation_contact}>
            <a href="/" className={styles.consultation_contact_item}>+375 (29) 674-83-90</a>
            <a href="/" className={styles.consultation_contact_item}>rhomeby@gmail.com</a>
          </div>
          <div className={styles.consultation_social}>
            <a href="/" className={styles.consultation_social_item + " " + styles.consultation_social_telegram}></a>
            <a href="/" className={styles.consultation_social_item + " " + styles.consultation_social_viber}></a>
            <a href="/" className={styles.consultation_social_item + " " + styles.consultation_social_wp}></a>
          </div>
        </div>
        <div className={styles.consultation_form_block}>
          <div className={styles.consultation_form}>
            <div className={styles.consultation_inputs}>
              <input className={styles.consultation_input} placeholder="Имя"></input>
              <input className={styles.consultation_input} placeholder="Телефон"></input>
            </div>
            <button className={styles.consultation_button}>Заказать звонок</button>
          </div>
          <p className={styles.consultation_form_text}>Вы&nbsp;можете оставить свой номер телефона, и&nbsp;мы&nbsp;перезвоним в&nbsp;рабочее время</p>
        </div>
      </div>
    </div>
  )
}