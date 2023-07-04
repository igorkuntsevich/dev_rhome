import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../subitems/video-intro/index"
import mainVideo from "../video/index.mp4"
import mainVideoMobile from "../video/index_1.mp4"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import * as styles from "../components/styles/index.module.scss"
// import { PortfolioItems } from "../subitems/portfolio/portfolioItems"
// import { Footer } from "../components/footer.js"

import { FooterConsultationDmitry } from "../subitems/footer-consultation-dmitry"



const IndexPage = () => (
  <Layout>
    <div className="wrapper">
      <div className={styles.index_intro}>
        <Video mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <h1 className={styles.index_intro_title}><span>Дизайн интерьера</span><span>Архитектура</span><span>Строительство</span></h1>
      </div>
      <div className={styles.index_intro_text}>
        <p className={styles.index_intro_text_p}>На&nbsp;рынке СНГ мы&nbsp;работаем более 15&nbsp;лет и&nbsp;выполнили более 320 проектов с&nbsp;абсолютно разными бюджетами. <br /> Наши основные услуги:</p>
      </div>
      <div className={styles.index_services_grid}>
        <Link to="/services/apartment" className={styles.index_services__item + " " + styles.index_services__item1}>
          <p className={styles.index_services__item_p}>Дизайн квартир</p>
        </Link>
        <Link to="/services/house" className={styles.index_services__item + " " + styles.index_services__item2}>
          <p className={styles.index_services__item_p + " " + styles.index_services__item_p2}>Дизайн домов</p>
        </Link>
        <div className={styles.index_services__item + " " + styles.index_services__item3}>
          <p className={styles.index_services__item_p}>Строительные работы</p>
        </div>
        <Link to="/services/office" className={styles.index_services__item + " " + styles.index_services__item4}>
          <p className={styles.index_services__item_p}>Дизайн коммерческих объектов</p>
        </Link>
      </div>
    </div>
    <div className="wrapper">
      <div className="line"></div>
      <div className={styles.index_offer}>
        <h2 className={styles.index_offer_title}>Мы&nbsp;предлагаем</h2>
        <div className={styles.index_offer_simplbar}>
          <SimpleBar forceVisible="y" autoHide={false}>
            <div className={styles.index_offer_items}>
              <div className={styles.index_offer_item + " " + styles.index_offer_item1}>
                <h3 className={styles.index_offer_item_title}>Индивидуальный дизайн-проект</h3>
                <p className={styles.index_offer_item_p}>Разработаем концепцию интерьера с&nbsp;авторской идеей. Подготовим качественную 3D-визуализацию, весь перечень технической документации и&nbsp;сформируем бюджет проекта.</p>
              </div>
              <div className={styles.index_offer_item + " " + styles.index_offer_item2}>
                <h3 className={styles.index_offer_item_title}>Согласование перепланировки</h3>
                <p className={styles.index_offer_item_p}>Подготовим весь пакет документов по&nbsp;перепланировке в&nbsp;соответствии с&nbsp;требованиями законодательства. Пройдем все этапы согласования вплоть до&nbsp;получения на&nbsp;руки нового техпаспорта объекта.</p>
              </div>
              <div className={styles.index_offer_item + " " + styles.index_offer_item3}>
                <h3 className={styles.index_offer_item_title}>Строительные работы</h3>
                <p className={styles.index_offer_item_p}>Выполним строительные и&nbsp;отделочные работы любой сложности с&nbsp;соблюдением всех норм и&nbsp;сроков. Предоставим 5&nbsp;лет гарантии на&nbsp;ремонтно-отделочные услуги.</p>
              </div>
              <div className={styles.index_offer_item + " " + styles.index_offer_item4}>
                <h3 className={styles.index_offer_item_title}>Авторский надзор</h3>
                <p className={styles.index_offer_item_p}>Возьмем на&nbsp;себя все вопросы, связанные с&nbsp;реализацией проекта. Проконтролируем ход ремонтно-отделочных работ и&nbsp;представим ваши интересы в&nbsp;салонах поставщиков.</p>
              </div>
            </div>
          </SimpleBar>
        </div>
        
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Rhome" />

export default IndexPage
