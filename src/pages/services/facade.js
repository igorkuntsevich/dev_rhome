import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { DecisionFacade } from "../../subitems/decision/decisionFacade"
import { StagesFacade } from "../../subitems/services-stages/stagesFacade"


import * as styles from "../../components/styles/services.module.scss"
import { PhotoCollage } from "../../subitems/photocollage"
import * as collageStyles from "../../subitems/photocollage/photocollage.module.scss"
import { ServicesFacadeCost } from "../../subitems/services-cost/services-facade-cost"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"



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
        <ul className={styles.services_breadcrumbs}>
          <li className={styles.services_breadcrumbs_li}>Услуги</li>
          {/* <li className={styles.services_breadcrumbs_li}>Оформление фасадов</li> */}
        </ul>
        <h1 className={styles.services_intro_title}>Оформление фасадов</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_facade_text}>
        <p className={styles.services_intro_text_p}>Первое впечатление от&nbsp;дома всегда зависит от&nbsp;его внешнего вида. Фасад дома делают не&nbsp;только для себя&nbsp;&mdash; это вклад в&nbsp;красоту всей улицы или даже города. Мы&nbsp;создаем дизайн фасадов и&nbsp;занимаемся реконструкцией.</p>
        <span className={styles.services_intro_text_span}>Мы&nbsp;поможем вам сделать экстерьер дома визуально привлекательным, а&nbsp;также придумаем, как пристроить крыльцо, гараж, террасу, сохранив стилистическую целостность дома.</span>
      </div>
    </div>
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
    <div className="wrapper">
      <div className="line"></div>
      <DecisionFacade />
    </div>
    <div className="wrapper">
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
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesFasad