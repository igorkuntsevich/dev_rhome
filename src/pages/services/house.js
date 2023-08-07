import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../../subitems/video-intro/index"
import mainVideo from "../../video/village.mp4"
import mainVideoMobile from "../../video/village_1.mp4"
import * as styles from "../../components/styles/services.module.scss"

import { DecisionHouse } from "../../subitems/decision/decisionHouse"
import { StagesHouse } from "../../subitems/services-stages/stagesHouse"
import { PortfolioItem } from "../../subitems/portfolio"
import * as PortfolioItemStyles from "../../components/styles/portfolio/portfolio.module.scss"

import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"


import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { ServicesCost } from "../../subitems/services-cost"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"

import { Faq } from "../../subitems/faq/house"
import * as faqStyles from "../../subitems/faq/faq.module.scss"



const ServicesHouse = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/house"}
      image={""}
    />
    <div className="wrapper">
      {/* <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
      <div className={styles.services_intro}>
        <Video mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Дизайн интерьера домов</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_house_text}>
        <p className={styles.services_intro_text_p}>Цель нашей работы&nbsp;&mdash; это дом вашей мечты, который перешёл с&nbsp;картинок в&nbsp;реальность. С&nbsp;помощью визуализации интерьера мы&nbsp;предложим лучшие решения для оформления <br /> уюта в&nbsp;доме.</p>
        <span className={styles.services_intro_text_span}>Кроме визуального оформления, дизайн-проект&nbsp;&mdash; это ещё схемы и&nbsp;чертежи для каждого участка работы. Проект даёт чёткую инструкцию по&nbsp;этапам строительства и&nbsp;точный бюджет.</span>
      </div>
    </div>
    <PhotoCollage
      amount={collageStyles.photocollage_five_images}
    >
      <StaticImage
        src="../../images/services/house/house_1.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
      />
      <StaticImage
        src="../../images/services/house/house_2.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
      />
      <StaticImage
        src="../../images/services/house/house_3.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
      />
      <StaticImage
        src="../../images/services/house/house_4.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
      />
      <StaticImage
        src="../../images/services/house/house_5.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
      />
    </PhotoCollage>
    <div className="wrapper">
      <div className="line"></div>
      <DecisionHouse />
      <div className={styles.services_portfolio}>
        <h2 className={styles.services_portfolio_title}>Наши работы</h2>
        <div className={PortfolioItemStyles.portfolio_content}>
          <PortfolioItem
            url="/portfolio/house/dom-ptich"
            title="Дом в&nbsp;поселке Птичь"
            metr=""
            building="18 месяцев"
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../../images/portfolio/dom-ptich/00_dom-ptich.jpg"
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
                src="../../images/portfolio/shale-gorani/00_shale-gorani.jpg"
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
                src="../../images/portfolio/barnhaus-gorani/00_barnhaus-gorani.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/house/selskij-dom"
            title="Сельский дом"
            metr="500"
            building=""
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/selskij-dom/00_selskij-dom.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/house/dom-leskovka"
            title="Дом в Лесковке"
            metr="220"
            building="18 месяцев"
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../../images/portfolio/dom-leskovka/00_dom-leskovka.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/house/interior-borovlyany"
            title="Интерьер дома в Боровлянах"
            metr="255"
            building="16 месяцев"
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../../images/portfolio/interior-borovlyany/00_interior-borovlyany.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/house/dom-berezino"
            title="Дом на Березине"
            metr="260"
            building="18 месяцев"
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/dom-berezino/00_dom-berezino.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/house/monohrom-zelenaya-gavan"
            title="Монохромный интерьер дома в Зеленой Гавани"
            metr="182"
            building=""
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../../images/portfolio/monohrom-zelenaya-gavan/00_monohrom-zelenaya-gavan.jpg"
                alt=""
              />
            }
          />
        </div>
      </div>
      <ServicesCost
        title="Сколько стоит дизайн-проект интерьера дома?"
      />
      <StagesHouse />
    </div>
    <div className="wrapper">
      {/* <div className={styles.services_zndp}>
        <h2 className={styles.services_zndp_title}>Зачем нужен дизайн проект?</h2>
        <div className={styles.services_zndp_text}>
          <p className={styles.services_zndp_text_p}>Задача дизайн-проекта интерьера квартиры&nbsp;&mdash; ответить на&nbsp;всевозможные вопросы прораба и&nbsp;строителей, которые будут реализовывать проект. Тщательно подготовленный дизайн-проект оптимизирует ремонт, позволяя избежать лишних трат и&nbsp;простоев в&nbsp;работе.</p>
          <p className={styles.services_zndp_text_p}>При создании интерьера вашей квартиры мы разрабатываем подробный дизайн-проект. В&nbsp;него входят все необходимые документы для проведения ремонта: от&nbsp;общей концепции интерьера до детализированных технических чертежей.</p>
        </div>
      </div> */}
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

export default ServicesHouse