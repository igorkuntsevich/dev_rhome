import React, { useState } from 'react'
import * as styles from "./steps.module.scss"


export const Modal = ({ isVisible = false , onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  const [openOpenCall , setOpenCall] = useState(false);
  const toggleOpenCall =()=>{
    setOpenCall(!openOpenCall);
  };



  return !isVisible ? null : (
    <div className={styles.modal}>
      <div className={styles.modal_bcg_anim} onClick={onClose}></div>
      <div className={styles.modal_close} onClick={onClose}></div>
      <div className={styles.modal_wrap} onClick={e => e.stopPropagation()}>
        <div className={styles.modal_close_mob} onClick={onClose}></div>
        <div className={styles.modal_wrap_left}>

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

          <div className={styles.step__second + " " + (openOpenCall? `${styles.open}` : "")}>
            <div className={styles.step__second_form_block}>
              <div className={styles.step__second_form}>
                <div className={styles.step__second_inputs}>
                  <input className={styles.step__second_input} placeholder="Имя"></input>
                  <input className={styles.step__second_input} placeholder="Телефон"></input>
                </div>
                <button className={styles.step__second_button}>Заказать звонок</button>
              </div>  
              <p className={styles.step__second_form_text}>Вы&nbsp;можете оставить свой номер телефона, и&nbsp;мы перезвоним в&nbsp;рабочее время</p>
            </div>
          </div>

          {/* <div className={styles.step_third}>
            <p className={styles.step_third_p}>Заявка отправлена, мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время</p>
          </div> */}
        </div>
        <div className={styles.modal_image}>
          <div className={styles.modal_text}>
            <p className={styles.modal_image_text}>&mdash;&nbsp;Подробно расскажу, как строится работа по&nbsp;дизайн-проекту.</p>
            <p className={styles.modal_image_status}>Дмитрий, руководитель проектов RHome</p>
          </div>
        </div>
      </div>
    </div>
  );
};