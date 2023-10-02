import React, { useState } from 'react'
import * as styles from "../modal/modal.module.scss"

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


  return !isVisible ? null : (
    <div className={styles.cost_result_wrap + " " + styles.modal}>
      <div className={styles.modal_sun} onClick={onClose}></div>
      <div className={styles.cost_result_close} onClick={onClose}></div>
      <div className={styles.cost_result} onClick={e => e.stopPropagation()}>
        <div className={styles.cost_result_close_mob} onClick={onClose}></div>
        <div className={styles.cost_result_left}>
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