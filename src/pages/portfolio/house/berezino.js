import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

const HouseBerezino = () => (
  <Layout>
    <Seo 
      title={"170 кв. метров для молодой семьи - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/170-kv-metrov"}
      image={"https://rhome.by/images/inspiration/photos/170-kv-metrov/01_170-kv-metrov.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Дом на&nbsp;Березине"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев, Светлана Рожкова"
          manager="Дмитрий Разумейчик"
          data="2020"
          metr="260"
          building="18 месяцев"
          budget={styles.project_intro_item_cost3}
        />
        <StaticImage
          src="../../../images/portfolio/berezino/01_dom-berezeno.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/berezino/001_dom-berezeno.jpg"
          className={styles.project_intro_image_mob}
          alt=""
        />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default HouseBerezino