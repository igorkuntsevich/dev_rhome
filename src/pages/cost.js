import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import * as styles from "../components/styles/cost.module.scss"

import { HowWeWork } from "../subitems/how-we-work/hww"

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
          <StaticImage
            src="../images/cost/cost_intro.jpg"
            loading="eager"
            alt=""
          />
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
  </Layout>
)

export default Cost