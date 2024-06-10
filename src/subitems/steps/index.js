import React  from 'react'
import * as styles from "./steps.module.scss"
import { calcPrice } from "./calculate";
import useSWR from "swr";
import { API } from "../../api/api";
import { fetcher } from "../../api/fetcher";

import { MODAL_STEPS } from "../../pages/cost";
import { ModalStepFirst } from "./step-first";
import { ModalStepSecond } from "./step-second";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Modal = ({ type, metr, modalStep, setModalStep }) => {

  const onClose = ()=>{
    setModalStep(MODAL_STEPS.close)
  }
  const {data:currencyUSD} = useSWR(API.usdCurrency , fetcher);
  const price = calcPrice({  type, METR:metr, dollarRate:currencyUSD?.rate||0 });
  const submitData = {
    type ,  metr ,price
  }
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

  return (
    <div className={styles.modal}>
      <div className={styles.modal_bcg_anim} onClick={onClose}></div>
      <div className={styles.modal_close} onClick={onClose}></div>
      <div className={styles.modal_wrap} onClick={e => e.stopPropagation()}>
        <div className={styles.modal_close_mob} onClick={onClose}></div>
        <div className={styles.modal_wrap_left}>

          {modalStep===MODAL_STEPS.calculate&&<ModalStepFirst setModalStep={setModalStep} price={price}/>
        }

          {modalStep===MODAL_STEPS.contact&&<ModalStepSecond setModalStep={setModalStep} submitData={submitData}/>}

          {modalStep===MODAL_STEPS.thank&&<div className={styles.step_third}>
            <p className={styles.step_third_p}>Заявка отправлена, мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее
              время</p>
          </div>}
        </div>
        <div className={styles.modal_image}>
          <div className={styles.modal_text}>
            <p className={styles.modal_image_text}>&mdash;&nbsp;Подробно расскажу, как строится работа по&nbsp;дизайн-проекту.</p>
            <p className={styles.modal_image_status}>Дмитрий, руководитель проектов RHome</p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
