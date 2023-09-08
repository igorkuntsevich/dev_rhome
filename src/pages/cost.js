import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import * as styles from "../components/styles/cost.module.scss"

import { HowWeWork } from "../subitems/how-we-work/hww"

import video from "../video/cost.mp4"
import { FooterConsultationDmitry } from "../subitems/footer-consultation-dmitry"

import { Faq } from "../subitems/faq/cost"
import * as faqStyles from "../subitems/faq/faq.module.scss"




const Cost = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/cost"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.cost_intro}>
        <div className={styles.cost_intro_left}>
          <h1 className={styles.cost_intro_title}>Стоимость дизайн-проекта</h1>
          <div className={styles.cost_intro_form_block}>
            <div className={styles.cost_intro_form}>
              <div className={styles.cost_intro_inputs}>
                <input className={styles.cost_intro_input} placeholder="Квартира"></input>
                <input className={styles.cost_intro_input} placeholder="м2"></input>
              </div>
              <button className={styles.cost_intro_button}>Рассчитать</button>
            </div>
            <p className={styles.cost_intro_form_text}>Чтобы рассчитать стоимость проекта укажите площадь и&nbsp;выберите услуги, которые вам нужны.</p>
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
      <div className="line"></div>
      <div className={styles.cost_design_proekt}>
        <h2 className={styles.cost_design_proekt_title}>По&nbsp;окончании работ по&nbsp;созданию дизайн-проекта вы&nbsp;получите пакет документов&nbsp;&mdash; гид по&nbsp;вашему будущему интерьеру.</h2>
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
        <h2 className={styles.cost_work_title}>Работая с&nbsp;нами вы получаете:</h2>
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
    {/* <div className={styles.cost_result}>
      <div className={styles.cost_result_left}>
        <div className={styles.cost_result_text}>
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
      
      </div>
    </div> */}
  </Layout>
)

export default Cost