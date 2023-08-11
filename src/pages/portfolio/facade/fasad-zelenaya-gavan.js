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

const FasadZelenayagavan = () => {
  return (
    <Layout>
      <Seo 
        title={"Монохромный фасад дома в Зеленой Гавани - RHOME"} description={"Монохромный фасад дома в Зеленой Гавани дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/facade/fasad-zelenaya-gavan-dom"}
        image={"https://rhome.by/images/portfolio/fasad-zelenaya-gavan/01_fasad-zelenaya-gavan.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Зеленая гавань"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data=""
                metr="180"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/fasad-zelenaya-gavan/01_fasad-zelenaya-gavan.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-zelenaya-gavan/00_fasad-zelenaya-gavan.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Переосмыслить идею классического дома в эстетике современной архитектуры."
              wishText="Это проект мы создавали для дома в Зеленой Гавани. Он построен в современной минималистичной стилистике. Дома, где интерьер и экстерьер выполнены в единой стилистике смотрятся более целостно и эффектно. Поэтому концепцию интерьера мы разработали в соответствии с эстетикой архитектурного решения дома."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
                <div>
                <p className={styles.project__p}>Это проект мы создавали для дома в Зеленой Гавани. Он построен в современной минималистичной стилистике. Дома, где интерьер и экстерьер выполнены в единой стилистике смотрятся более целостно и эффектно. Поэтому концепцию интерьера мы разработали в соответствии с эстетикой архитектурного решения дома.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/03_fasad-zelenaya-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/fasad-zelenaya-gavan/03_fasad-zelenaya-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/05_fasad-zelenaya-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/fasad-zelenaya-gavan/05_fasad-zelenaya-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/04_fasad-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-zelenaya-gavan/04_fasad-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/02_fasad-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-zelenaya-gavan/02_fasad-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/06_fasad-zelenaya-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/fasad-zelenaya-gavan/06_fasad-zelenaya-gavan.jpg"
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
export default FasadZelenayagavan