import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../subitems/video-intro/index"
import mainVideo from "../video/index.mp4"
import mainVideoMobile from "../video/index_1.mp4"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { PortfolioItem } from "../subitems/portfolio"
import * as PortfolioItemStyles from "../components/styles/portfolio/portfolio.module.scss"

import { RemoteWork } from "../subitems/remote-work/index"
import * as styles from "../components/styles/index.module.scss"

import { Faq } from "../subitems/faq/apartment"
import * as faqStyles from "../subitems/faq/faq.module.scss"
import { ReviewBelomorskayaSpecial } from "../subitems/reviews/special/reviewBelomorskaya"
import * as reviewStyles from "../subitems/reviews/review.module.scss"

import { FooterConsultationDmitry } from "../subitems/footer-consultation-dmitry"


const IndexPage = () => (
  <Layout>
    <Seo 
      title={"Студия дизайна интерьера квартир, домов и офисов в Минске"} description={"RHome - студия дизайна интерьера и ремонта под ключ квартир, домов, коммерческой недвижимости в Минске и по всей Беларуси. Более 200 реализованных проектов, 👍 12 лет успешной работы в дизайне. ✅ Полное сопровождение дизайн-проекта от разработки до ремонта."}
      location={"https://rhome.by/"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.index_intro}>
        <Video mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <h1 className={styles.index_intro_title}><span>Дизайн интерьера</span><span>Архитектура</span><span>Строительство</span></h1>
      </div>
      <div className={styles.index_intro_text}>
        <p className={styles.index_intro_text_p}>На&nbsp;рынке СНГ мы&nbsp;работаем более 15&nbsp;лет и&nbsp;выполнили более 320 проектов с&nbsp;абсолютно разными бюджетами.</p>
      </div>
      <div className={styles.index_services_grid}>
        <Link to="/services/apartment" className={styles.index_services__item + " " + styles.index_services__item1}>
          <p className={styles.index_services__item_p}>Дизайн квартир</p>
        </Link>
        <Link to="/services/house" className={styles.index_services__item + " " + styles.index_services__item2}>
          <p className={styles.index_services__item_p + " " + styles.index_services__item_p2}>Дизайн домов</p>
        </Link>
        <Link to="/services/building" className={styles.index_services__item + " " + styles.index_services__item3}>
          <p className={styles.index_services__item_p}>Строительные работы</p>
        </Link>
        <Link to="/services/office" className={styles.index_services__item + " " + styles.index_services__item4}>
          <p className={styles.index_services__item_p}>Дизайн коммерческих объектов</p>
        </Link>
      </div>
    </div>
    <div className="wrapper">
      <div className={styles.index_portfolio}>
        <h2 className={styles.index_portfolio_title}>Последние проекты</h2>
        <div className={PortfolioItemStyles.portfolio_content}>
          <PortfolioItem
            url="/portfolio/house/zhemchuzhnaya"
            title="Жемчужная-2"
            metr="296"
            building="16 месяцев"
            budget={PortfolioItemStyles.portfolio_item_cost3}
            image={
              <StaticImage
                src="../images/portfolio/zhemchuzhnaya/00_zhemchuzhnaya.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/apartment/apartment-depo"
            title="Современная квартира в Депо"
            metr="122"
            building="7 месяцев"
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../images/portfolio/apartment-depo/00_apartment-depo.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/apartment/apartamenty-keln"
            title="Апартаменты Кельн"
            metr="96"
            building="6 месяцев"
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../images/portfolio/apartamenty-keln/00_apartamenty-keln.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/house/dom-ptich"
            title="Дом в&nbsp;поселке Птичь"
            metr="260"
            building="18 месяцев"
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../images/portfolio/dom-ptich/00_dom-ptich.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/house/shale-gorani"
            title="Шале в&nbsp;Горани"
            metr="260"
            building=""
            budget={PortfolioItemStyles.portfolio_item_cost3}
            image={
              <StaticImage
                src="../images/portfolio/shale-gorani/00_shale-gorani.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/apartment/zhk-farforovyj"
            title="ЖК&nbsp;Фарфоровый"
            metr="85"
            building="12 месяцев"
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../images/portfolio/zhk-farforovyj/00_zhk-farforovyj.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/house/barnhaus-gorani"
            title="Горани Барнхаус"
            metr="250"
            building=""
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../images/portfolio/barnhaus-gorani/00_barnhaus-gorani.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/facade/selskij-dom"
            title="Сельский дом"
            metr="500"
            building=""
            budget=""
            image={
              <StaticImage
                src="../images/portfolio/selskij-dom/00_selskij-dom.jpg"
                alt=""
              />
            }
          />
        </div>
      </div>
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
      <RemoteWork />
      <div className={reviewStyles.review}>
        <h2 className={reviewStyles.review_title}>Отзывы о нашей <br />работе</h2>
        <div className={reviewStyles.review_items}>
          <ReviewBelomorskayaSpecial />
        </div>
      </div>
      <div className="line"></div>
      <div className={faqStyles.faq}>
        <h2 className={faqStyles.faq_title}>Часто задаваемые <br />вопросы</h2>
        <div className={faqStyles.faq_items}>
          <Faq/>
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default IndexPage