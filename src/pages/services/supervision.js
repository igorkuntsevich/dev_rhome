import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../components/styles/services.module.scss"


import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"








const ServicesSupervision = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/supervision"}
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
      <div className={styles.services_intro + " " + styles.services_intro_supervision}>
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Авторский надзор</h1>
      </div>
      <div className={styles.services_intro_text}>
        <p className={styles.services_intro_text_p}>Услуга гарантирует, что реализованный проект будет в точности соответствовать плану. Архитектор берёт на себя ответственность за результат стройки и каждый этап процесса.</p>
      </div>
    </div>
    <div className="wrapper">
      <div className="line"></div>


      
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesSupervision