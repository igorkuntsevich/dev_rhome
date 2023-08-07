import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const DomAlpshale = () => {
  return (
    <Layout>
      <Seo 
        title={"Интерьер дома с мотивами шале - RHOME"} description={"Интерьер дома с мотивами шале в Минске. Надежность и простота в исполнении дизайн студии Rhome."}
        location={"https://rhome.by/portfolio/house/dom-alpshale"}
        image={"https://rhome.by/images/portfolio/dom-alpshale/01_dom-alpshale.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Интерьер дома с мотивами шале"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="июнь 2015"
                metr="401"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/dom-alpshale/01_dom-alpshale.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-alpshale/00_dom-alpshale.jpg"
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
              taskText="Разработать уютный дизайн интерьера."
              wishText="Хочется, чтобы интерьер был похож на простой деревенский домик в альпийских горах, в котором мы отдыхали прошлой зимой. Он должен быть теплый и комфортный, с мягкими фактурами и натуральным деревом. Мы хотим только натуральные материалы без ярких синтетических красок и броских цветных пятен. Возможно древесина, камень и натуральный мех."
            />
          </div>
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default DomAlpshale