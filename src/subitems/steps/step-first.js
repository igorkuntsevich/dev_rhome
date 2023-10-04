import * as React from "react"
import * as styles from "./steps.module.scss"

export const ModalStepFirst = () => {
  return (
    <div className={styles.step__first + " " + (openOpenCall? `${styles.close}` : "")}>
      <div className={styles.step__first_text}>
        <p className={styles.step__first_text_title}>Стоимость вашего дизайн-проекта:</p>
        <p className={styles.step__first_text_p}>990 у.е. &asymp; 2900&nbsp;р.</p>
        <span className={styles.step__first_text_span}>Расчёты осуществляются в&nbsp;белорусских рублях по&nbsp;курсу НБ&nbsp;РБ&nbsp;в&nbsp;день оплаты. Цены в&nbsp;долларах указаны для иностранных граждан. Цены на&nbsp;сайте не&nbsp;являются публичной офертой, а&nbsp;носят только рекламный характер.</span>
      </div>
      <div className={styles.step__first_contacts}>
        <div className={styles.step__first_contacts_left}>
          <div className={styles.step__first_contact}>
            <a href="tel:+375296748390" className={styles.step__first_contact_item}>+375 (29) 674-83-90</a>
            <a href="mailto:rhomeby@gmail.com" className={styles.step__first_contact_item}>rhomeby@gmail.com</a>
          </div>
          <div className={styles.step__first_social}>
            <a href="tg://resolve?domain=drazumeichyk" className={styles.step__first_social_item + " " + styles.step__first_social_telegram}></a>
            <a href="viber://chat?number=+375296748390" className={styles.step__first_social_item + " " + styles.step__first_social_viber}></a>
            <a href="whatsapp://send?phone=+375296748390" className={styles.step__first_social_item + " " + styles.step__first_social_wp}></a>
          </div>
        </div>
        <div className={styles.step__first_contacts_right}>
          <button onClick={toggleOpenCall} className={styles.step__first_contacts_right_button}>Заказать звонок</button>
        </div>
      </div>
    </div>
  );
};