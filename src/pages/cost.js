import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import video from "../video/cost.mp4"

import * as styles from "../components/styles/cost.module.scss"
import { Modal } from "../subitems/steps"
import { HowWeWork } from "../subitems/how-we-work/hww"
import ScrollContainer from 'react-indiana-drag-scroll'
import { FooterConsultationDmitry } from "../subitems/footer-consultation-dmitry"

import { Faq } from "../subitems/faq/cost"
import * as faqStyles from "../subitems/faq/faq.module.scss"
import { useState } from "react";
import { PLACES_LIST } from "../subitems/steps/calculate";

export const MODAL_STEPS = {
  close:0,
  calculate :1,
  contact:2,
  thank:3
}


const Cost = () => {
  const [modalStep, setModalStep] = React.useState(MODAL_STEPS.close);
  const [placeType , setPlaceType ] =useState(PLACES_LIST.flat);
 const [spaceValue ,setSpaceValue] =useState("")
const [isInvalid , setIsInvalid] =useState(false);

 const isEmptyForm =spaceValue<1;
  const checkActiveClassName =(type)=>{
     return  type===placeType?styles.cost_intro_dropdown_mob_item  +" " + styles.cost_intro_dropdown_mob_item_checked:styles.cost_intro_dropdown_mob_item
  }
  const openModalHandler = ()=>{
      if(isEmptyForm){
        setIsInvalid(true)
      }else{
        setModalStep(MODAL_STEPS.calculate)
      }
  }
  return (
    <Layout>
      <Seo
        title={""} description={""}
        location={"https://rhome.by/cost"}
        image={""}
      />
      <div className="wrapper">
        <div className={styles.cost_intro}>
          <div className={styles.cost_intro_left}>
            <h1 className={styles.cost_intro_title}>Стоимость<br /> дизайн-проекта</h1>
            <div className={styles.cost_intro_form_block}>
              <div className={styles.cost_intro_form}>
                <div className={styles.cost_intro_inputs}>
                  <div className={styles.cost_intro_dropdown_wrap}>
                    <select value={placeType} onChange={(e)=> {
                      setPlaceType(e.target.value);
                    }} className={styles.cost_intro_dropdown}>
                      <option>Квартира</option>
                      <option>Частный дом</option>
                      <option>Коммерческий объект</option>
                    </select>
                  </div>
                  <ScrollContainer className="scroll-container">
                    <div className={styles.cost_intro_dropdown_mob_wrap}>
                      <button onClick={()=>setPlaceType(PLACES_LIST.flat)} className={checkActiveClassName(PLACES_LIST.flat)}>
                        <span className={styles.cost_intro_dropdown_mob_label}  >Квартира</span>
                      </button>
                      <button onClick={()=>setPlaceType(PLACES_LIST.house)} className={checkActiveClassName(PLACES_LIST.house)}>
                        <label className={styles.cost_intro_dropdown_mob_label}  >Дом</label>
                      </button>
                      <button onClick={()=>setPlaceType(PLACES_LIST.commercial)} className={checkActiveClassName(PLACES_LIST.commercial)}>
                        <label className={styles.cost_intro_dropdown_mob_label}  >Коммерческий&nbsp;объект</label>
                      </button>
                    </div>
                  </ScrollContainer>
                  <input className={styles.cost_intro_input} value={spaceValue} onChange={(e)=>{setSpaceValue(e.target.value)}} type="number" placeholder="м2" />
                </div>
                <button onClick={openModalHandler} className={styles.cost_intro_button}>Рассчитать</button>
                <p style={{display:isInvalid&&isEmptyForm?"block":"none"}} className="error">Заполните все поля</p>
              </div>
              <p className={styles.cost_intro_form_text}>Узнайте стоимость, указав<br /> тип объекта и его площадь</p>
            </div>
          </div>
          <div className={styles.cost_intro_right}>
            <div className={styles.cost_intro_right_video}>
              <video width="100%" height="auto" muted={true} playsInline={true} autoPlay={true} loop={true} type="video/mp4">
                <source src={video} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>

        {modalStep!==MODAL_STEPS.close&&<Modal
          type={placeType}
          metr={spaceValue}
          modalStep={modalStep}
          setModalStep={setModalStep}
        />}
        <div className="line"></div>
        <div className={styles.cost_design_proekt}>
          <h2 className={styles.cost_design_proekt_title}>По&nbsp;окончании работ вы&nbsp;получите пакет документов&nbsp;&mdash; гид по&nbsp;вашему будущему интерьеру.</h2>
          <div className={styles.cost_design_proekt_items}>
            <p className={styles.cost_design_proekt_p}>Он&nbsp;включает в&nbsp;себя:</p>
            <ul>
              <li className={styles.cost_design_proekt_li}>Несколько вариантов планировки</li>
              <li className={styles.cost_design_proekt_li}>4-6 ракурсов 3D-визуализации каждой комнаты</li>
              <li className={styles.cost_design_proekt_li}>25&nbsp;листов чертежей, подробно иллюстрирующих все технические моменты: от&nbsp;электрики до&nbsp;развёртки стен</li>
              <li className={styles.cost_design_proekt_li}>Полный перечень материалов, которые понадобятся для ремонтных работ</li>
              <li className={styles.cost_design_proekt_li}>Расчет бюджета проекта</li>
              <li className={styles.cost_design_proekt_li}>Смету на&nbsp;ремонтно-отделочные работы</li>
            </ul>
          </div>
        </div>
        <div className={styles.cost_design_proekt_block}>
          <p className={styles.cost_design_proekt_block_text}>Сопровождаем проект на всех этапах строительства, осуществляем авторский надзор. Наша задача&nbsp;&mdash; сэкономить ваше время, нервы, деньги.</p>
        </div>
        <div className={styles.cost_work}>
          <h2 className={styles.cost_work_title}>Работая с&nbsp;нами, вы получаете:</h2>
          <div className={styles.cost_work_items}>
            <div className={styles.cost_work_item + " " + styles.cost_work_item1}>
              <h4 className={styles.cost_work_item_title}>Официальные<br />отношения</h4>
              <div>
                <p className={styles.cost_work_item_p}>Договор</p>
                <p className={styles.cost_work_item_p}>Обязательства (ответственность)</p>
                <p className={styles.cost_work_item_p}>Фиксированная стоимость</p>
              </div>
            </div>
            <div className={styles.cost_work_item + " " + styles.cost_work_item2}>
              <h4 className={styles.cost_work_item_title}>Нашу систему<br />контроля качества</h4>
              <div>
                <p className={styles.cost_work_item_p}>Прописанные стандарты качества разработки проекта</p>
                <p className={styles.cost_work_item_p}>Контроль качества каждого этапа разработки дизайн-проекта</p>
              </div>
            </div>
            <div className={styles.cost_work_item + " " + styles.cost_work_item3}>
              <h4 className={styles.cost_work_item_title}>Официальных<br />строителей</h4>
              <div>
                <p className={styles.cost_work_item_p}>Строительство индивидуальных жилых домов и&nbsp;ремонтные работы</p>
                <p className={styles.cost_work_item_p}>Лицензия и&nbsp;аттестаты</p>
                <p className={styles.cost_work_item_p}>Технический надзор за&nbsp;строительством</p>
              </div>
            </div>
          </div>
        </div>
        <HowWeWork />
        <div className="line"></div>
        <div className={faqStyles.faq}>
          <h2 className={faqStyles.faq_title}>Часто задаваемые<br />вопросы</h2>
          <div className={faqStyles.faq_items}>
            <Faq/>
          </div>
        </div>
        <FooterConsultationDmitry />
      </div>
      {/* <div className={styles.cost_result + " " + (openResultCalculate? `${styles.open}` : "")}>
        <div className={styles.cost_result_left}>
          <div className={styles.cost_result_left_text}>
            <p className={styles.cost_result_text_title}>Стоимость вашего дизайн-проекта:</p>
            <p className={styles.cost_result_text_p}>990 у.е. &asymp; 2900&nbsp;р.</p>
            <span className={styles.cost_result_text_span}>Расчёты осуществляются в&nbsp;белорусских рублях по&nbsp;курсу НБ&nbsp;РБ&nbsp;в&nbsp;день оплаты. Цены в&nbsp;долларах указаны для иностранных граждан. Цены на&nbsp;сайте не&nbsp;являются публичной офертой, а&nbsp;носят только рекламный характер.</span>
          </div>
          <div className={styles.cost_result_contacts}>
            <div className={styles.cost_result_contact}>
              <a href="/" className={styles.cost_result_contact_item}>+375 (29) 674-83-90</a>
              <a href="/" className={styles.cost_result_contact_item}>rhomeby@gmail.com</a>
            </div>
            <div className={styles.cost_result_social}>
              <a href="/" className={styles.cost_result_social_item + " " + styles.cost_result_social_telegram}></a>
              <a href="/" className={styles.cost_result_social_item + " " + styles.cost_result_social_viber}></a>
              <a href="/" className={styles.cost_result_social_item + " " + styles.cost_result_social_wp}></a>
            </div>
          </div>
        </div>
        <div className={styles.cost_result_image}>
          <div className={styles.cost_result_text}>
            <p className={styles.cost_result_image_text}>&mdash;&nbsp;Подробно расскажу, как строится работа по&nbsp;дизайн-проекту.</p>
            <p className={styles.cost_result_image_status}>Дмитрий, руководитель проектов RHome</p>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}

export default Cost
