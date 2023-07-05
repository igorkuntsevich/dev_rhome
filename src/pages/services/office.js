import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Video } from "../../subitems/video-intro/index"
import mainVideo from "../../video/office.mp4"
import mainVideoMobile from "../../video/office_1.mp4"

import { DecisionOffice } from "../../subitems/decision/decisionOffice"
import { StagesOffice } from "../../subitems/services-stages/stagesOffice"

import * as styles from "../../components/styles/services.module.scss"


import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { ServicesCost } from "../../subitems/services-cost"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"



const ServicesOffice = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/office"}
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
          {/* <li className={styles.services_breadcrumbs_li}>Дизайн интерьера офисов</li> */}
        </ul>
        <h1 className={styles.services_intro_title}>Дизайн интерьера офисов</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_office_text}>
        <p className={styles.services_intro_text_p}>Разработаем дизайн-проект любых коммерческих помещений, который будет соответствовать вашему корпоративному стилю.</p>
        <span className={styles.services_intro_text_span}>Наши дизайн проекты соответствуют законодательству с&nbsp;учетом повышенных требований к&nbsp;уровню пожарной безопасности, санитарным и&nbsp;экологическим нормам.</span>
      </div>
    </div>
    <PhotoCollage
      amount={collageStyles.photocollage_five_images}
    >
      <StaticImage
        src="../../images/services/office/office_1.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_office_img1}
      />
      <StaticImage
        src="../../images/services/office/office_2.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_office_img2}
      />
      <StaticImage
        src="../../images/services/office/office_3.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_office_img3}
      />
      <StaticImage
        src="../../images/services/office/office_4.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_office_img4}
      />
      <StaticImage
        src="../../images/services/office/office_5.jpg"
        alt=""
        className={collageStyles.photocollage_img + " " + collageStyles.photocollage_office_img5}
      />
    </PhotoCollage>
    <div className="wrapper">
      <div className="line"></div>
      <DecisionOffice />
    </div>
    <div className="wrapper">
      <ServicesCost
        title="Сколько стоит дизайн-проект интерьера офиса?"
      />
      <StagesOffice />
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

export default ServicesOffice