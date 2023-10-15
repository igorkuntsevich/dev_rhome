import React, { useState } from 'react'
import * as styles from "./steps.module.scss"
import { useForm } from "react-hook-form";
import { axiosWithBase, fetcher } from "../../api/fetcher";
import { API } from "../../api/api";
import { useOpen } from "../../hooks/useOpen";
import { MODAL_STEPS } from "../../pages/cost";
import { toast } from "react-toastify";
import axios from "axios";

export const ModalStepSecond = ( {submitData,setModalStep}) => {
  const loader = useOpen()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit   =async (data) =>{
    loader.onOpen()
    axiosWithBase.post(API.sendMail,{
      data , submitData
    }).then((resp)=>{
        setModalStep(MODAL_STEPS.thank)
      }).catch ((e)=>{
        console.log(e);
      loader.onClose()
      toast.error(e.message)
    })

  }

  return  (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.step__second}>
      <div className={styles.step__second_form_block}>
        <div className={styles.step__second_form}>
          <div className={styles.step__second_inputs}>
            <input  className={styles.step__second_input} placeholder="Имя"  {...register("name", { required: true })} />
            <input className={styles.step__second_input} placeholder="Телефон"  {...register("phone" , { required: true })} />
          </div>
          <button className={styles.step__second_button}>Заказать звонок</button>
           <p style={{display:Object.keys(errors).length?"block":"none"}} className="error">Заполните все поля</p>
        </div>
        <p className={styles.step__second_form_text}>Вы&nbsp;можете оставить свой номер телефона, и&nbsp;мы
          перезвоним в&nbsp;рабочее время</p>
      </div>
    </form>
  );
};
