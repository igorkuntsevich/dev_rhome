import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../../subitems/video-intro/index"
import mainVideo from "../../video/village.mp4"
import mainVideoMobile from "../../video/village_1.mp4"

import { DecisionHouse } from "../../subitems/decision/decisionHouse"
import { StagesHouse } from "../../subitems/services-stages/stagesHouse"

import * as styles from "../../components/styles/services.module.scss"


import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { ServicesCost } from "../../subitems/services-cost"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"



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
        <ul className={styles.services_breadcrumbs}>
          <li className={styles.services_breadcrumbs_li}>Услуги</li>
          {/* <li className={styles.services_breadcrumbs_li}>Дизайн интерьера домов</li> */}
        </ul>
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
    </div>
    <div className="wrapper">
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
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesHouse