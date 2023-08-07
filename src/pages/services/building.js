import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../components/styles/services.module.scss"


import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"








const ServicesBuilding = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/building"}
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
      <div className={styles.services_intro + " " + styles.services_intro_building}>
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Строительные работы</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_building_text}>
        <p className={styles.services_intro_text_p}>Предлагаем не&nbsp;только разработку дизайн-проекта, но&nbsp;и&nbsp;сопровождаем проект на&nbsp;всех этапах строительства.</p>
        <span className={styles.services_intro_text_span}>Мы&nbsp;работаем с&nbsp;проверенной командой строителей. Вам не&nbsp;нужно искать подрядчиков и&nbsp;поставщиков&nbsp;&mdash; мы&nbsp;ведем проекты от&nbsp;идеи до&nbsp;сдачи под ключ.</span>
      </div>
    </div>
    <div className="wrapper">
      <div className="line"></div>


      
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesBuilding