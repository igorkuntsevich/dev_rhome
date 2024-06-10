import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey'


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
          <div className="wrapper">
            <div className={styles.project__bigmargin}>
            <ProjectTaskAlexey
              taskText="Оформить фасад здания в современном стиле."
              wishText="Сейчас коробка дома напоминает шале, а мне хочется, чтобы дом имел современный вид. Возможно комбинировать в отделке дерево и штукатурку."
            />
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/fasad-mogilev/02_fasad-mogilev.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-mogilev/02_fasad-mogilev.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-mogilev/03_fasad-mogilev.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-mogilev/03_fasad-mogilev.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/fasad-mogilev/04_fasad-mogilev.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-mogilev/04_fasad-mogilev.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-mogilev/05_fasad-mogilev.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-mogilev/05_fasad-mogilev.jpg"
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
export default FasadMogilev