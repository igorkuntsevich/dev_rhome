import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../../subitems/video-intro/index"
import mainVideo from "../../video/apart.mp4"
import mainVideoMobile from "../../video/apart_1.mp4"

import { PortfolioItem } from "../../subitems/portfolio"
import * as PortfolioItemStyles from "../../components/styles/portfolio/portfolio.module.scss"
import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { StagesApart } from "../../subitems/services-stages/stagesApart"
import { RemoteWork } from "../../subitems/remote-work/index"
import { ReviewBorovlianiSpecial } from "../../subitems/reviews/special/reviewBorovliani"
import * as reviewStyles from "../../subitems/reviews/review.module.scss"
import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { Faq } from "../../subitems/faq/apartment"
import * as faqStyles from "../../subitems/faq/faq.module.scss"
import { HowWeWork } from "../../subitems/how-we-work/hww"
import { SostavDP } from "../../subitems/sostav-dp"


import * as styles from "../../components/styles/services.module.scss"
import { DesignProjectBlock } from "../../subitems/design-project"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"
import { DesignProektDecision } from "../../subitems/dp-decision/index"
import { DecisionApart } from "../../subitems/decision/decisionApart"
import { ServicesCost } from "../../subitems/services-cost"










const ServicesApart = () => (
  <Layout>
    <Seo 
      title={"Дизайн-проекты интерьера квартир и ремонт под ключ в Минске. Студия RHome"} description={"Студия RHome предоставляет услуги по дизайну интерьера и ремонту квартир в Минске и по всей Беларуси уже 12 лет. 👍 В нашем портфолио более 200 успешно реализованных проектов различной сложности."}
      location={"https://rhome.by/services/apartment"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.services_intro}>
        <Video mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Дизайн интерьера квартир</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_apart_text}>
        <p className={styles.services_intro_text_p}>Наша задача&nbsp;&mdash; создать для вас теплое и привлекательное пространство, с&nbsp;умом использовать в&nbsp;дизайне интерьера современные технологии <br /> и&nbsp;материалы.</p>
        <span className={styles.services_intro_text_span}>Также для нас важно дать вам возможность реализовать свои идеи, оказать профессиональную поддержку на&nbsp;всех этапах реализации проекта.</span>
      </div>
    </div>
    <div className={collageStyles.photocollage_services}>
      <PhotoCollage
        amount={collageStyles.photocollage_five_images}
      >
        <StaticImage
          src="../../images/services/apartment/apart_1.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_apart_img1}
        />
        <StaticImage
          src="../../images/services/apartment/apart_2.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_apart_img2}
        />
        <StaticImage
          src="../../images/services/apartment/apart_3.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_apart_img3}
        />
        <StaticImage
          src="../../images/services/apartment/apart_4.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_apart_img4}
        />
        <StaticImage
          src="../../images/services/apartment/apart_5.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_apart_img5}
        />
      </PhotoCollage>
    </div>
    <div className="wrapper">
      <DesignProjectBlock />
      <div className="line"></div>
      <DecisionApart />
      <div>
        <h2 className={styles.services_portfolio_title}>Наши работы</h2>
        <div className={PortfolioItemStyles.portfolio_content}>
        <PortfolioItem
          url="/portfolio/apartment/apartment-depo"
          title="Современная квартира в Депо"
          metr="122"
          building="7 месяцев"
          budget={PortfolioItemStyles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../images/portfolio/apartment-depo/00_apartment-depo.jpg"
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
              src="../../images/portfolio/apartamenty-keln/00_apartamenty-keln.jpg"
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
              src="../../images/portfolio/zhk-farforovyj/00_zhk-farforovyj.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-dlya-dvoih"
          title="Квартира в ЖК «D3»"
          metr="109"
          building="10 месяцев"
          budget={PortfolioItemStyles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../images/portfolio/kvartira-dlya-dvoih/00_kvartira-dlya-dvoih.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-myastrovskaya"
          title="Квартира на Мястровской"
          metr="150"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../images/portfolio/kvartira-myastrovskaya/00_kvartira-myastrovskaya.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/stalinka-nezavisimosti"
          title="Сталинка в Минске"
          metr="74"
          building="8 месяцев"
          budget={PortfolioItemStyles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../images/portfolio/stalinka-nezavisimosti/00_stalinka-nezavisimosti.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/apartamenty-bryussel"
          title="Неоклассика в Брюсселе"
          metr="96"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../images/portfolio/apartamenty-bryussel/00_apartamenty-bryussel.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-dvuhurovnevaya"
          title="Двухуровневая квартира на Васнецова"
          metr="152"
          building="11 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../images/portfolio/kvartira-dvuhurovnevaya/00_kvartira-dvuhurovnevaya.jpg"
              alt=""
            />
          }
        />
        </div>
      </div>
      <ServicesCost
        title="Сколько стоит дизайн-проект интерьера квартиры?"
      />
      <StagesApart />
      <HowWeWork />
      <div className="line"></div>
      <SostavDP />
      <DesignProektDecision />
      <RemoteWork />
      <div className={reviewStyles.review}>
        <h2 className={reviewStyles.review_title}>Отзывы о нашей <br />работе</h2>
        <div className={reviewStyles.review_items}>
          <ReviewBorovlianiSpecial />
        </div>
      </div>
      <div className="line"></div>
      <div className={faqStyles.faq}>
        <h2 className={faqStyles.faq_title}>Часто задаваемые<br />вопросы</h2>
        <div className={faqStyles.faq_items}>
          <Faq />
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesApart