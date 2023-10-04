import * as React from "react"
import * as styles from "../steps/modal.module.scss"

export const Modal = ({ isVisible = false }) => {
  return !isVisible ? null : (
    <div className={styles.step_third}>
      <p className={styles.step_third_p}>Заявка отправлена, мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время</p>
    </div>
  );
};