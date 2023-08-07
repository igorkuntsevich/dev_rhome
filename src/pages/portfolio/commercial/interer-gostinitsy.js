import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const IntererGostinitsy = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн-проект интерьера для гостиницы Mariott"} description={"Наша команда создала комплексное решение по оформлению интерьера многофункционального пространства в гостинице Mariott. Достойный результат работы дизайнеров можно детально рассмотреть и оценить в портфолио на сайте."}
        location={"https://rhome.by/portfolio/commercial/interer-gostinitsy"}
        image={"https://rhome.by/images/portfolio/interer-gostinitsy/01_interer-gostinitsy.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Интерьер гостиницы"
                leader="Сергей Рассеко"
                architector=""
                manager="Дмитрий Разумейчик"
                data="июнь 2015"
                metr="450"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-gostinitsy/01_interer-gostinitsy.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-gostinitsy/00_interer-gostinitsy.jpg"
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
              taskText="Оформить интерьер гостиницы в современном стиле."
              wishText="Нужно комплексное, проработанное решение по оформлению интерьера гостиницы. Что касается цвета, то здесь не должно быть чрезмерно ярких, кричащих оттенков, раздражающих восприятие, в приоритете сдержанные цвета: черный, серый, белый, песочный."
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
export default IntererGostinitsy