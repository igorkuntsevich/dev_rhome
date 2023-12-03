import React, { useState } from 'react'
import * as styles from "./footer-consultation.module.scss"
import { useInView } from "react-intersection-observer"
import { useOpen } from "../../hooks/useOpen";
import { useForm } from "react-hook-form";
import { axiosWithBase } from "../../api/fetcher";
import { API } from "../../api/api";
import { MODAL_STEPS } from "../../pages/cost";
import { toast } from "react-toastify";
import { ModalStepThird } from "../steps/step-third";

const FOOTER_FORM_STATUS_LIST = {
  unset:1,
  loader:2,
  thanks:3,
}

export const FooterConsultationDmitry = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

 const [formStatus , setFormStatus] = useState(FOOTER_FORM_STATUS_LIST.unset)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit   =async (contacts) =>{
      setFormStatus(FOOTER_FORM_STATUS_LIST.loader)
    const mailBody = {
      "Тема":"footer form" ,
      "Имя":contacts?.name,
      "Номер телефона":contacts?.phone,
    }


    axiosWithBase.post(API.sendMail, mailBody).then((resp)=>{
      setFormStatus(FOOTER_FORM_STATUS_LIST.thanks)
    }).catch ((e)=>{
      console.log(e);
      setFormStatus(FOOTER_FORM_STATUS_LIST.unset)
      toast.error(e.message)
    })

  }
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
            <a href="tel:+375296748390" className={styles.consultation_contact_item}>+375 (29) 674-83-90</a>
            <a href="mailto:rhomeby@gmail.com" className={styles.consultation_contact_item}>rhomeby@gmail.com</a>
          </div>
          <div className={styles.consultation_social}>
            <a href="tg://resolve?domain=drazumeichyk" className={styles.consultation_social_item + " " + styles.consultation_social_telegram}></a>
            <a href="viber://chat?number=+375296748390" className={styles.consultation_social_item + " " + styles.consultation_social_viber}></a>
            <a href="whatsapp://send?phone=+375296748390" className={styles.consultation_social_item + " " + styles.consultation_social_wp}></a>
          </div>
        </div>
         <form onSubmit={handleSubmit(onSubmit)} className={styles.consultation_form_block}>
        {formStatus===FOOTER_FORM_STATUS_LIST.thanks?<ModalStepThird/>  :<div className={styles.consultation_form_wrap}>
            <div className={styles.consultation_form}>
              <div className={styles.consultation_inputs}>
                <input className={styles.consultation_input}
                       placeholder="Имя"   {...register("name", { required: true })} />
                <input className={styles.consultation_input}
                       placeholder="Телефон"  {...register("phone", { required: true })} />
              </div>
              <button   className={styles.consultation_button}>Заказать звонок</button>
              <p style={{ display: Object.keys(errors).length ? "block" : "none" }} className="error">Заполните все
                поля</p>
            </div>
            <p className={styles.consultation_form_text}>Оставьте свой номер телефона, и&nbsp;мы&nbsp;перезвоним
              в&nbsp;рабочее время</p>
          </div>}

        </form>
      </div>
    </div>
  )
}
