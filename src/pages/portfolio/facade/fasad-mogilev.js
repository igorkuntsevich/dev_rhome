import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const FasadMogilev = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн фасада дома в Могилеве | Студия – Rhome.by"} description={"Сейчас коробка дома напоминает шале, а мне хочется чтобы дом имел современный вид. Возможно комбинировать в отделке дерево и штукатурку."}
        location={"https://rhome.by/portfolio/facade/fasad-mogilev"}
        image={"https://rhome.by/images/portfolio/fasad-mogilev/01_fasad-mogilev.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Фасад дома в Могилеве"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="июль 2017"
                metr="300"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-mogilev/01_fasad-mogilev.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-mogilev/00_fasad-mogilev.jpg"
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
              taskText="Оформить фасад здания в современном стиле."
              wishText="Сейчас коробка дома напоминает шале, а мне хочется, чтобы дом имел современный вид. Возможно комбинировать в отделке дерево и штукатурку."
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
export default FasadMogilev