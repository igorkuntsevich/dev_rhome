import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const KottedzhZatsen = () => (
  <Layout>
    <Seo 
      title={"Коттедж в Зацени - RHOME"} description={"Коттедж в Зацени дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/house/kottedzh-zatsen"}
      image={"https://rhome.by/images/portfolio/kottedzh-zatsen/01_kottedzh-zatsen.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Коттедж в Зацени"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев, Вячеслав Сосин"
          manager="Дмитрий Разумейчик"
          data="июль 2016"
          metr="180"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/kottedzh-zatsen/01_kottedzh-zatsen.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kottedzh-zatsen/00_kottedzh-zatsen.jpg"
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
        taskText="Разработать интерьер частного дома в традиционном стиле."
        wishText="Нам нравятся интерьеры в традиционном стиле, мебель с классическими силуэтами и кованые элементы. Что касается отделки, то тут предпочитаем дерево естественных оттенков, камень, металл и другие натуральные материалы. Цветовая гамма должна быть светлая, спокойная. И как отдельное пожелание: постарайтесь найти место для барной стойки или кухонного острова."
      />
      <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default KottedzhZatsen