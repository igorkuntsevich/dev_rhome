import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../../subitems/video-intro/index"
import mainVideo from "../../video/office.mp4"
import mainVideoMobile from "../../video/office_1.mp4"
import * as styles from "../../components/styles/services.module.scss"
import { PortfolioItem } from "../../subitems/portfolio"
import * as PortfolioItemStyles from "../../components/styles/portfolio/portfolio.module.scss"
import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { DesignProjectBlock } from "../../subitems/design-project"
import { StagesOffice } from "../../subitems/services-stages/stagesOffice"
import { DecisionOffice } from "../../subitems/decision/decisionOffice"
import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { ServicesCost } from "../../subitems/services-cost"
import { RemoteWork } from "../../subitems/remote-work/index"
import { DesignProektDecision } from "../../subitems/dp-decision/index"
import { SostavDP } from "../../subitems/sostav-dp"
import { Faq } from "../../subitems/faq/office"
import * as faqStyles from "../../subitems/faq/faq.module.scss"
import { ReviewSilvanoSpecial } from "../../subitems/reviews/special/reviewSilvano"
import * as reviewStyles from "../../subitems/reviews/review.module.scss"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"



const ServicesOffice = () => (
  <Layout>
    <Seo 
      title={"Дизайн фасада и экстерьера домов, коттеджей в Минске и Беларуси. Студия RHome"} description={"Оформление фасада, ландшафтный дизайн 🌳, проектирование МАФ и другие услуги по благоустройству экстерьера и участка вашего дома. 👍 12 лет успешной работы в сфере дизайна, сильная команда, большое портфолио реализованных проектов."}
      location={"https://rhome.by/services/office"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.services_intro}>
        <Video mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Дизайн интерьера офисов</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_office_text}>
        <p className={styles.services_intro_text_p}>Разработаем дизайн-проект любых коммерческих помещений, который будет соответствовать вашему корпоративному стилю.</p>
        <span className={styles.services_intro_text_span}>Наши дизайн-проекты соответствуют законодательству с&nbsp;учетом повышенных требований к&nbsp;уровню пожарной безопасности, санитарным и&nbsp;экологическим нормам.</span>
      </div>
    </div>
    <div className={collageStyles.photocollage_services}>
      <PhotoCollage
        amount={collageStyles.photocollage_five_images}
      >
        <StaticImage
          src="../../images/services/office/office_1.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
        />
        <StaticImage
          src="../../images/services/office/office_2.jpg"
          alt=""
          className={collageStyles.photocollage_img}
        />
        <StaticImage
          src="../../images/services/office/office_3.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
        />
        <StaticImage
          src="../../images/services/office/office_4.jpg"
          alt=""
          className={collageStyles.photocollage_img}
        />
        <StaticImage
          src="../../images/services/office/office_5.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
        />
      </PhotoCollage>
    </div>
    <div className="wrapper">
      <DesignProjectBlock />
      <div className="line"></div>
      <DecisionOffice />
      <div className={styles.services_portfolio}>
        <h2 className={styles.services_portfolio_title}>Наши работы</h2>
        <div className={PortfolioItemStyles.portfolio_content}>
        <PortfolioItem
          url="/portfolio/commercial/ofis-kazahstan"
          title="Офис в Казахстане"
          metr="100"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../images/portfolio/ofis-kazahstan/00_ofis-kazahstan.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/commercial/hotel-uzbekistan"
          title="Отель в Узбекистане"
          metr="400"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../images/portfolio/hotel-uzbekistan/00_hotel-uzbekistan.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
            url="/portfolio/commercial/ofis-bryussel"
            title="Офис в Брюсселе"
            metr="100"
            building=""
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/ofis-bryussel/00_ofis-bryussel.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/commercial/ofis-pobediteley"
            title="Офис на Победителей"
            metr="194"
            building=""
            budget={PortfolioItemStyles.portfolio_item_cost1}
            image={
              <StaticImage
                src="../../images/portfolio/ofis-pobediteley/00_ofis-pobediteley.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/commercial/azs-gute"
            title="Дизайн интерьера АЗС в Гуте"
            metr="150"
            building=""
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/azs-gute/00_azs-gute.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/commercial/ofis-logisticheskoj-kompanii"
            title="Офис логистической компании"
            metr="152"
            building=""
            budget={PortfolioItemStyles.portfolio_item_cost1}
            image={
              <StaticImage
                src="../../images/portfolio/ofis-logisticheskoj-kompanii/00_ofis-logisticheskoj-kompanii.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/commercial/azs-rechitsa"
            title="Дизайн интерьера АЗС в Речице"
            metr="80"
            building=""
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/azs-rechitsa/00_azs-rechitsa.jpg"
                alt=""
              />
            }
          />
          <PortfolioItem
            url="/portfolio/commercial/launzh-bar"
            title="Лаунж-бар"
            metr="200"
            building=""
            budget=""
            image={
              <StaticImage
                src="../../images/portfolio/launzh-bar/00_launzh-bar.jpg"
                alt=""
              />
            }
          />
        </div>
      </div>
      <ServicesCost
        title="Сколько стоит дизайн-проект интерьера офиса?"
      />
      <StagesOffice />
    </div>
    <div className="wrapper">
      <div className="line"></div>
      <SostavDP />
      <DesignProektDecision />
      <RemoteWork />
      <div className={reviewStyles.review}>
        <h2 className={reviewStyles.review_title}>Отзывы о нашей <br />работе</h2>
        <div className={reviewStyles.review_items}>
          <ReviewSilvanoSpecial />
        </div>
      </div>
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

export default ServicesOffice