import React, { useState } from 'react'
import * as styles from "./modal.module.scss"

export const ModalStep2 = () => {

  const [openOpenCall , setOpenCall] = useState(false);
  const toggleOpenCall =()=>{
    setOpenCall(!openOpenCall);
  };
  return (
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
  );
};