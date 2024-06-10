import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'


const SelskijDom = () => {
  return (
    <Layout>
      <Seo 
        title={"Сельский дом - RHOME"} description={"Сельский дом дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/facade/selskij-dom"}
        image={"https://rhome.by/images/portfolio/selskij-dom/01_selskij-dom.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Сельский дом"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="ноябрь 2019"
                metr="500"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/selskij-dom/01_selskij-dom.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/selskij-dom/00_selskij-dom.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Переосмыслить идею классического дома в эстетике современной архитектуры."
              wishText="Необходимо разработать архитектурное решение для одноэтажного дома примерной площадью 500 м2"
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
                <div>
                <p className={styles.project__p}>В нашей климатической зоне большую часть времени пасмурно, а этот дом всегда выглядит залитым солнцем. Большие окна в пол наполняют дом дневным светом.</p>
                <p className={styles.project__p}>Этот проект необычен тем, что он довольно большой, но при этом одноэтажный. Такое решение архитектора вдохновлено классическими виллами, которые традиционно делали одноуровневыми. Участок, на котором расположен дом, достаточно большой, чтобы воплотить такую задумку и переосмыслить идею классического дома в эстетике современной архитектуры.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/selskij-dom/05_selskij-dom.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/selskij-dom/05_selskij-dom.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/selskij-dom/04_selskij-dom.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/selskij-dom/04_selskij-dom.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/selskij-dom/03_selskij-dom.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/selskij-dom/03_selskij-dom.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
          </div>
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default SelskijDom