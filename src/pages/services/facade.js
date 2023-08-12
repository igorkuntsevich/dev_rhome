import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



import * as styles from "../../components/styles/services.module.scss"


import { DecisionFacade } from "../../subitems/decision/decisionFacade"
import { StagesFacade } from "../../subitems/services-stages/stagesFacade"
import { PortfolioItem } from "../../subitems/portfolio"
import * as PortfolioItemStyles from "../../components/styles/portfolio/portfolio.module.scss"


import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { ServicesFacadeCost } from "../../subitems/services-cost/services-facade-cost"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"

import { Faq } from "../../subitems/faq/office"
import * as faqStyles from "../../subitems/faq/faq.module.scss"



const ServicesFasad = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/facade"}
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
      <div className={styles.services_intro + " " + styles.services_intro_facade}>
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Оформление фасадов</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_facade_text}>
        <p className={styles.services_intro_text_p}>Первое впечатление от&nbsp;дома всегда зависит от&nbsp;его внешнего вида. Фасад дома делают не&nbsp;только для себя&nbsp;&mdash; это вклад в&nbsp;красоту всей улицы или даже города. Мы&nbsp;создаем дизайн фасадов и&nbsp;занимаемся реконструкцией.</p>
        <span className={styles.services_intro_text_span}>Мы&nbsp;поможем вам сделать экстерьер дома визуально привлекательным, а&nbsp;также придумаем, как пристроить крыльцо, гараж, террасу, сохранив стилистическую целостность дома.</span>
      </div>
    </div>
    <div className={collageStyles.photocollage_services}>
      <PhotoCollage
        amount={collageStyles.photocollage_four_images}
      >
        <StaticImage
          src="../../images/services/fasad/fasad_1.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_fasad_img1}
        />
        <StaticImage
          src="../../images/services/fasad/fasad_2.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_fasad_img2}
        />
        <StaticImage
          src="../../images/services/fasad/fasad_3.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_fasad_img3}
        />
        <StaticImage
          src="../../images/services/fasad/fasad_4.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_fasad_img4}
        />
      </PhotoCollage>
    </div>
    <div className="wrapper">
      <div className="line"></div>
      <DecisionFacade />
      <div className={styles.services_portfolio}>
        <h2 className={styles.services_portfolio_title}>Наши работы</h2>
        <div className={PortfolioItemStyles.portfolio_content}>
          <PortfolioItem
            url="/portfolio/facade/dom-barnhaus"
            title="Дом в стиле Барнхаус"
            metr="200"
            building=""
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/dom-barnhaus/00_dom-barnhaus.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/facade/dom-podmoskove"
            title="Дом в&nbsp;Подмосковье"
            metr="350"
            building=""
            budget={PortfolioItemStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../../images/portfolio/dom-podmoskove/00_dom-podmoskove.jpg"
                alt=""
              />
            }
          />

          <PortfolioItem
            url="/portfolio/facade/dom-staroeselo"
            title="Дом в Старом селе"
            metr="350"
            building=""
            budget={PortfolioItemStyles.portfolio_item_cost1}
            image={
              <StaticImage
                src="../../images/portfolio/dom-staroeselo/00_dom-staroeselo.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/facade/dom-avtonomnyj"
            title="Автономный дом в Литве"
            metr="206"
            building=""
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/dom-avtonomnyj/00_dom-avtonomnyj.jpg"
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
              src="../../../images/portfolio/selskij-dom/00_selskij-dom.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
            url="/portfolio/facade/fasad-borovlyany"
            title="Фасад дома в Боровлянах"
            metr="450"
            building="3 месяца"
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/fasad-borovlyany/00_fasad-borovlyany.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/facade/polskij-proekt"
            title="Польский проект"
            metr="280"
            building=""
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/polskij-proekt/00_polskij-proekt.jpg"
                alt=""
              />
            }
          />
        <PortfolioItem
          url="/portfolio/facade/fasad-zelenaya-gavan"
          title="Зеленая гавань"
          metr="180"
          building=""
          budget={PortfolioItemStyles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../images/portfolio/fasad-zelenaya-gavan/00_fasad-zelenaya-gavan.jpg"
              alt=""
            />
          }
        />
        </div>
      </div>
      <ServicesFacadeCost
        title="Стоимость оформления фасада обычно составляет:"
      />
      <StagesFacade />
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

export default ServicesFasad