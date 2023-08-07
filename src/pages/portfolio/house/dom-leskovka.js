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

const DomLeskovka = () => {
  return (
    <Layout>
      <Seo 
        title={"Дом в Лесковке - RHOME"} description={"Дом в Лесковке дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/dom-leskovka"}
        image={"https://rhome.by/images/portfolio/dom-leskovka/01_dom-leskovka.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Сельский дом"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="ноябрь 2021"
                metr="220"
                building="18 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/dom-leskovka/01_dom-leskovka.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-leskovka/00_dom-leskovka.jpg"
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
              taskText="Спроектировать интерьер дома для семьи из 4 человек."
              wishText="Изучили несколько проектов у вас на сайте. Понравилась концепция проекта «дом в Песках»: цветовая гамма, стены под бетон, сочетание с деревом, душевая в черных тонах с белой сантехникой (такой вариант можно использовать для блока мастер), душевые с деревянным трапом, кабинет (в нашем случае гостевая спальня) в тёмных тонах..."
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
export default DomLeskovka