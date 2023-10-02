import React, { useState } from 'react'
import * as styles from "./modal.module.scss"

// import { ModalStep2 } from './modal-step2';
// import video from "../../video/modal.mp4"

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
  // const hide = openOpenCall? {display:"none"}:{};
  // const hide = onClose? {display:"block"}:{};



  return !isVisible ? null : (
    <div className={styles.cost_result_wrap + " " + styles.modal}>
      <div className={styles.modal_sun} onClick={onClose}></div>
      {/* <div className={styles.modal_video}>
        <video className={styles.modal_video_video} width="100%" height="100%" muted={true} playsInline={true} autoPlay={true} loop={true} type="video/mp4">
          <source src={video} type="video/mp4"/>
        </video>
      </div> */}
      <div className={styles.cost_result_close} onClick={onClose}></div>
      <div className={styles.cost_result} onClick={e => e.stopPropagation()}>
        <div className={styles.cost_result_close_mob} onClick={onClose}></div>
        <div className={styles.cost_result_left}>
          <div className={styles.cost_result_left_first + " " + (openOpenCall? `${styles.close}` : "")}>
            <div className={styles.cost_result_left_text}>
              <p className={styles.cost_result_text_title}>Стоимость вашего дизайн-проекта:</p>
              <p className={styles.cost_result_text_p}>990 у.е. &asymp; 2900&nbsp;р.</p>
              <span className={styles.cost_result_text_span}>Расчёты осуществляются в&nbsp;белорусских рублях по&nbsp;курсу НБ&nbsp;РБ&nbsp;в&nbsp;день оплаты. Цены в&nbsp;долларах указаны для иностранных граждан. Цены на&nbsp;сайте не&nbsp;являются публичной офертой, а&nbsp;носят только рекламный характер.</span>
            </div>
            <div className={styles.cost_result_contacts}>
              <div className={styles.cost_result_contacts_left}>
                <div className={styles.cost_result_contact}>
                  <a href="tel:+375296748390" className={styles.cost_result_contact_item}>+375 (29) 674-83-90</a>
                  <a href="mailto:rhomeby@gmail.com" className={styles.cost_result_contact_item}>rhomeby@gmail.com</a>
                </div>
                <div className={styles.cost_result_social}>
                  <a href="tg://resolve?domain=drazumeichyk" className={styles.cost_result_social_item + " " + styles.cost_result_social_telegram}></a>
                  <a href="viber://chat?number=+375296748390" className={styles.cost_result_social_item + " " + styles.cost_result_social_viber}></a>
                  <a href="whatsapp://send?phone=+375296748390" className={styles.cost_result_social_item + " " + styles.cost_result_social_wp}></a>
                </div>
              </div>
              <div className={styles.cost_result_contacts_right}>
                <button onClick={toggleOpenCall} className={styles.cost_result_contacts_right_button}>Заказать звонок</button>
              </div>
            </div>
          </div>
          {/* <ModalStep2
          
          /> */}
          <div className={styles.cost_result_left_second + " " + (openOpenCall? `${styles.open}` : "")}>
            <div className={styles.cost_result_form_block}>
              <div className={styles.cost_result_form}>
                <div className={styles.cost_result_inputs}>
                  <input className={styles.cost_result_input} placeholder="Имя"></input>
                  <input className={styles.cost_result_input} placeholder="Телефон"></input>
                </div>
                <button className={styles.cost_result_button}>Заказать звонок</button>
              </div>  
              <p className={styles.cost_result_form_text}>Вы&nbsp;можете оставить свой номер телефона, и&nbsp;мы перезвоним в&nbsp;рабочее время</p>
            </div>
          </div>
        </div>
        <div className={styles.cost_result_image}>
          <div className={styles.cost_result_text}>
            <p className={styles.cost_result_image_text}>&mdash;&nbsp;Подробно расскажу, как строится работа по&nbsp;дизайн-проекту.</p>
            <p className={styles.cost_result_image_status}>Дмитрий, руководитель проектов RHome</p>
          </div>
        </div>
      </div>
    </div>
  );
};