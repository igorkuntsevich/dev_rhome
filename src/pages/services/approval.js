import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../components/styles/services.module.scss"


import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"








const ServicesApproval = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/approval"}
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
      <div className={styles.services_intro + " " + styles.services_intro_approval}>
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Согласование перепланировки</h1>
      </div>
      <div className={styles.services_intro_text}>
        <p className={styles.services_intro_text_p}>Мы&nbsp;поможем вам пройти все этапы согласования вплоть до&nbsp;получения на&nbsp;руки нового техпаспорта объекта на&nbsp;выгодных и&nbsp;удобных для вас условиях.</p>
      </div>
    </div>
    <div className="wrapper">
      <div className="line"></div>


      
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesApproval