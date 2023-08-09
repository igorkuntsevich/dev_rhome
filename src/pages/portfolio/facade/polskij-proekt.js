import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const PolskijProekt = () => {
  return (
    <Layout>
      <Seo 
        title={"Польский проект | Дизайн студия «Rhome.by»"} description={"Польский проект от дизайн студии «Rhome.by» - качественная работа, прозрачные условия, фото портфолио, 200+ успешных проектов"}
        location={"https://rhome.by/portfolio/facade/polskij-proekt"}
        image={"https://rhome.by/images/portfolio/polskij-proekt/01_polskij-proekt.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#E7E6EB"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Польский проект"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="январь 2017"
                metr="280"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/polskij-proekt/01_polskij-proekt.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/polskij-proekt/00_polskij-proekt.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
          <div className={styles.project__bigmargin}>
            <ProjectTaskSergey
              taskText="Доработать внешний вид дома, подобрать отделочные материалы, разработать техническую документацию для строителей."
              wishText="Первоначальный проект мне в принципе нравится, но есть моменты которые можно улучшить. Так же в проекте нет ни слова о материалах, которые использовали польские архитекторы в отделке фасада, их необходимо подобрать."
            />
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/polskij-proekt/07_polskij-proekt.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/polskij-proekt/07_polskij-proekt.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/polskij-proekt/08_polskij-proekt.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/polskij-proekt/08_polskij-proekt.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/polskij-proekt/02_polskij-proekt.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/polskij-proekt/02_polskij-proekt.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/polskij-proekt/03_polskij-proekt.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/polskij-proekt/03_polskij-proekt.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/polskij-proekt/04_polskij-proekt.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/polskij-proekt/04_polskij-proekt.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/polskij-proekt/05_polskij-proekt.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/polskij-proekt/05_polskij-proekt.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/polskij-proekt/06_polskij-proekt.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/polskij-proekt/06_polskij-proekt.jpg"
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
export default PolskijProekt