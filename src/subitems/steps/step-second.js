import React, { useState } from 'react'
import * as styles from "./steps.module.scss"

export const ModalStepSecond = ({ isVisible = false , onClose }) => {
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

          {/* <div className={styles.step__second + " " + (openOpenCall? `${styles.open}` : "")}> */}
          <div className={styles.step__second + " " + styles.open}>
            <div className={styles.step__second_form_block}>
              <div className={styles.step__second_form}>
                <div className={styles.step__second_inputs}>
                  <input className={styles.step__second_input} placeholder="Имя"></input>
                  <input className={styles.step__second_input} placeholder="Телефон"></input>
                </div>
                <button onClick={toggleOpenCall} className={styles.step__second_button}>Заказать звонок</button>
                <p className="error">Заполните все поля</p>
              </div>  
              <p className={styles.step__second_form_text}>Вы&nbsp;можете оставить свой номер телефона, и&nbsp;мы перезвоним в&nbsp;рабочее время</p>
            </div>
          </div>


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