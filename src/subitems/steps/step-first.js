import * as React from "react"
import * as styles from "./steps.module.scss"

import { Loader } from "../../components/loader/loader";
import { MODAL_STEPS } from "../../pages/cost";


export const ModalStepFirst = ({price , setModalStep}) => {
  const clickWhatsapp = () => {
    typeof window !== "undefined" && window.ym(62048629,'reachGoal','watsap_cost')
  };
  const clickViber = () => {
    typeof window !== "undefined" && window.ym(62048629,'reachGoal','viber_cost')
  };
  const clickTelegram = () => {
    typeof window !== "undefined" && window.ym(62048629,'reachGoal','telegram_cost')
  };
  const clickMail = () => {
    typeof window !== "undefined" && window.ym(62048629,'reachGoal','email_cost')
  };
  const clickPhone = () => {
    typeof window !== "undefined" && window.ym(62048629,'reachGoal','phone_cost')
  };
  const clickCall = () => {
    typeof window !== "undefined" && window.ym(62048629,'reachGoal','callback_cost')
  };

  return (
    <div>
      <div className={styles.step__first_text}>
        <p className={styles.step__first_text_title}>Стоимость вашего дизайн-проекта:</p>
        <p className={styles.step__first_text_p}>{price?.sumUSD || <Loader />} у.е. &asymp; {price?.COST}&nbsp;р.</p>
        <span
          className={styles.step__first_text_span}>Расчёты осуществляются в&nbsp;белорусских рублях по&nbsp;курсу НБ&nbsp;РБ&nbsp;в&nbsp;день оплаты. Цены в&nbsp;долларах указаны для иностранных граждан. Цены на&nbsp;сайте не&nbsp;являются публичной офертой, а&nbsp;носят только рекламный характер.</span>
      </div>
      <div className={styles.step__first_contacts}>
        <div className={styles.step__first_contacts_left}>
          <div className={styles.step__first_contact}>
            <a
              href="tel:+375296748390"
              className={styles.step__first_contact_item}
              onClick={() => {clickPhone();}}
            >+375 (29) 674-83-90</a>
            <a
              href="mailto:rhomeby@gmail.com"
              className={styles.step__first_contact_item}
              onClick={() => {clickMail();}}
            >rhomeby@gmail.com</a>
          </div>
          <div className={styles.step__first_social}>
            <a
              href="tg://resolve?domain=drazumeichyk"
              className={styles.step__first_social_item + " " + styles.step__first_social_telegram}
              onClick={() => {clickTelegram();}}
            ></a>
            <a
              href="viber://chat?number=+375296748390"
              className={styles.step__first_social_item + " " + styles.step__first_social_viber}
              onClick={() => {clickViber();}}
            ></a>
            <a
              href="whatsapp://send?phone=+375296748390"
              className={styles.step__first_social_item + " " + styles.step__first_social_wp}
              onClick={() => {clickWhatsapp();}}
            ></a>
          </div>
        </div>
        <div className={styles.step__first_contacts_right}>
          <button
            onClick={() => {
              setModalStep(MODAL_STEPS.contact)
              clickCall();
            }}
            className={styles.step__first_contacts_right_button}
          >Заказать звонок</button>
        </div>
      </div>
    </div>
  );
};
