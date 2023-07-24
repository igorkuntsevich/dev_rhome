import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const OfisBryussel = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера офиса в Брюсселе"} description={"Офис в Брюсселе дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/commercial/ofis-bryussel"}
      image={"https://rhome.by/images/portfolio/ofis-bryussel/01_ofis-bryussel.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Офис в Брюсселе"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев"
          manager="Дмитрий Разумейчик"
          data="2020"
          metr="100"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/ofis-bryussel/01_ofis-bryussel.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/ofis-bryussel/00_ofis-bryussel.jpg"
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
      <ProjectTaskSergey
        taskText="Разработать креативный дизайн офиса для бельгийской компании."
        wishText="Наш запрос – дизайн интерьера офиса для компании, которая занимается созданием продукта. Мы хотели бы, чтобы в дизайн-проекте офисного пространства предусмотрели места для переговоров и сосредоточенной работы, работы и отдыха. Сотрудники проводят здесь бо́льшую часть дня, мы хотим быть уверены, что им будет комфортно, а дизайн интерьера офиса станет вдохновением для работы."
      />
        <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default OfisBryussel