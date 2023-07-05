import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../../subitems/video-intro/index"
import mainVideo from "../../video/apart.mp4"
import mainVideoMobile from "../../video/apart_1.mp4"

import { DecisionApart } from "../../subitems/decision/decisionApart"
import { StagesApart } from "../../subitems/services-stages/stagesApart"


import * as styles from "../../components/styles/services.module.scss"
import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { ServicesCost } from "../../subitems/services-cost"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"

import { Faq } from "../../subitems/faq"
// import { Faq } from "../../subitems/faq/apartment"







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
        <ul className={styles.services_breadcrumbs}>
          <li className={styles.services_breadcrumbs_li}>Услуги</li>
          {/* <li className={styles.services_breadcrumbs_li}>Дизайн интерьера квартиры</li> */}
        </ul>
        <h1 className={styles.services_intro_title}>Дизайн интерьера квартир</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_apart_text}>
        <p className={styles.services_intro_text_p}>Наша задача&nbsp;&mdash; создать для вас теплое и привлекательное пространство, с&nbsp;умом использовать в&nbsp;дизайне интерьера современные технологии <br /> и&nbsp;материалы.</p>
        <span className={styles.services_intro_text_span}>Также для нас важно дать вам возможность реализовать свои идеи, оказать профессиональную поддержку на&nbsp;всех этапах реализации проекта.</span>
      </div>
    </div>
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
    </div>
    <div className="wrapper">
      <ServicesCost
        title="Сколько стоит дизайн-проект интерьера квартиры?"
      />
      <StagesApart />
      <div className="line"></div>
      <Faq/>


      
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesApart