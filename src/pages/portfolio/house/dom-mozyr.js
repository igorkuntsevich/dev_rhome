import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const DomMaryalivo = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера дома в Мозыре - RHOME"} description={"Современный дизайн интерьера дома в Мозыре от студии Rhome. Было/стало, чертежи, 3D проекты"}
      location={"https://rhome.by/portfolio/house/dom-maryalivo"}
      image={"https://rhome.by/images/portfolio/dom-maryalivo/01_dom-maryalivo.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Современный интерьер дома в Мозыре"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев"
          manager="Дмитрий Разумейчик"
          data="сентябрь 2016"
          metr="250"
          building="14 месяцев"
          budget={styles.project_intro_item_cost2}
        />
        <StaticImage
          src="../../../images/portfolio/dom-maryalivo/01_dom-maryalivo.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/dom-maryalivo/00_dom-maryalivo.jpg"
          className={styles.project_intro_image_mob}
          alt=""
        />
      </div>    
      </div>
      <PhotoCollage
        amount={collageStyles.photocollage_five_images}
      >
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/01_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/02_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/03_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/04_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/05_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
        />
      </PhotoCollage>
      <div className="wrapper">
      <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default DomMaryalivo