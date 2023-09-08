import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../../subitems/video-intro/index"
import mainVideo from "../../video/apart.mp4"
import mainVideoMobile from "../../video/apart_1.mp4"
import * as styles from "../../components/styles/services.module.scss"

import { DecisionApart } from "../../subitems/decision/decisionApart"
import { StagesApart } from "../../subitems/services-stages/stagesApart"
import { PortfolioItem } from "../../subitems/portfolio"
import * as PortfolioItemStyles from "../../components/styles/portfolio/portfolio.module.scss"


import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { ServicesCost } from "../../subitems/services-cost"
import { HowWeWork } from "../../subitems/how-we-work/hww"
import { RemoteWork } from "../../subitems/remote-work/index"
import { DesignProektDecision } from "../../subitems/dp-decision/index"

import { ReviewBorovlianiSpecial } from "../../subitems/reviews/special/reviewBorovliani"
import * as reviewStyles from "../../subitems/reviews/review.module.scss"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"

import { Faq } from "../../subitems/faq/apartment"
import * as faqStyles from "../../subitems/faq/faq.module.scss"







const ServicesApart = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/apartment"}
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
      <div className={styles.services_zndp}>
        <h2 className={styles.services_zndp_title}>Зачем нужен дизайн проект?</h2>
        <div className={styles.services_zndp_text}>
          <p className={styles.services_zndp_text_p}>Задача дизайн-проекта интерьера квартиры&nbsp;&mdash; ответить на&nbsp;всевозможные вопросы прораба и&nbsp;строителей, которые будут реализовывать проект. Тщательно подготовленный дизайн-проект оптимизирует ремонт, позволяя избежать лишних трат и&nbsp;простоев в&nbsp;работе.</p>
          <p className={styles.services_zndp_text_p}>При создании интерьера вашей квартиры мы разрабатываем подробный дизайн-проект. В&nbsp;него входят все необходимые документы для проведения ремонта: от&nbsp;общей концепции интерьера до детализированных технических чертежей.</p>
        </div>
      </div>
    </div>
    <div className="wrapper">
      <div className="line"></div>
      <DecisionApart />
      <div className={styles.services_portfolio}>
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
          building="6 месяцев"
          budget={PortfolioItemStyles.portfolio_item_cost1}
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
      <div className={styles.services__lefttitle_righttext + " " + styles.services__lefttitle_righttext__bigmargin}>
        <h2 className={styles.services__lefttitle_righttext__title}>Состав дизайн проекта</h2>
        <div className={styles.services__lefttitle_righttext__text}>
          <div className={styles.services__lefttitle_righttext__wrap}>
            <span className={styles.services__lefttitle_righttext__text_span}>Готовый дизайн-проект&nbsp;&mdash; это инструкция по&nbsp;проведению ремонта, поэтому его можно отдать на&nbsp;реализацию прорабу или руководить командой строителей самостоятельно. По&nbsp;окончании работ по&nbsp;созданию дизайн-проекта вы&nbsp;получите пакет документов&nbsp;&mdash; гид по&nbsp;вашему будущему интерьеру.</span>
          </div>
          <p className={styles.services__lefttitle_righttext__text_title}>Документ включает в себя:</p>
          <ul>
            <li className={styles.services__lefttitle_righttext__text_li}>Несколько вариантов планировки</li>
            <li className={styles.services__lefttitle_righttext__text_li}>4-6 ракурсов 3D-визуализации каждой комнаты</li>
            <li className={styles.services__lefttitle_righttext__text_li}>25&nbsp;листов чертежей, подробно иллюстрирующих все технические моменты: от&nbsp;электрики до&nbsp;развёртки стен</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Полный перечень материалов, которые понадобятся для ремонтных работ</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Расчет бюджета проекта</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Смету на&nbsp;ремонтно-отделочные работы</li>
          </ul>
        </div>
      </div>
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
          <Faq/>
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesApart