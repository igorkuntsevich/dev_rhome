import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const KottedzhZatsen = () => {
  return (
    <Layout>
      <Seo 
        title={"Коттедж в Зацени - RHOME"} description={"Коттедж в Зацени дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/kottedzh-zatsen"}
        image={"https://rhome.by/images/portfolio/kottedzh-zatsen/01_kottedzh-zatsen.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
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
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать интерьер частного дома в традиционном стиле."
              wishText="Нам нравятся интерьеры в традиционном стиле, мебель с классическими силуэтами и кованые элементы. Что касается отделки, то тут предпочитаем дерево естественных оттенков, камень, металл и другие натуральные материалы. Цветовая гамма должна быть светлая, спокойная. И как отдельное пожелание: постарайтесь найти место для барной стойки или кухонного острова."
            />
                        <div className="line"></div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kottedzh-zatsen/02_kottedzh-zatsen.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kottedzh-zatsen/02_kottedzh-zatsen.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kottedzh-zatsen/03_kottedzh-zatsen.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kottedzh-zatsen/03_kottedzh-zatsen.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kottedzh-zatsen/04_kottedzh-zatsen.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kottedzh-zatsen/04_kottedzh-zatsen.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kottedzh-zatsen/05_kottedzh-zatsen.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kottedzh-zatsen/05_kottedzh-zatsen.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kottedzh-zatsen/06_kottedzh-zatsen.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kottedzh-zatsen/06_kottedzh-zatsen.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kottedzh-zatsen/07_kottedzh-zatsen.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kottedzh-zatsen/07_kottedzh-zatsen.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kottedzh-zatsen/08_kottedzh-zatsen.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kottedzh-zatsen/08_kottedzh-zatsen.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div> 

          </div>
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default KottedzhZatsen