import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const OfisSilvano = () => {
  return (
    <Layout>
      <Seo 
        title={"Офис Silvano Fashion - RHOME"} description={"Офис Silvano Fashion дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/commercial/ofis-silvano"}
        image={"https://rhome.by/images/portfolio/ofis-silvano/01_ofis-silvano.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Офис Silvano Fashion"
                leader="Сергей Рассеко"
                architector="Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data=""
                metr="150"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-silvano/01_ofis-silvano.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-silvano/00_ofis-silvano.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать концепцию офиса для компании, работающей в сфере моды."
              wishText="Офис должен быть удобным для сотрудников и достаточно презентабельным для проведения переговоров с компаньонами и заказчиками. Нам нужен офис, в котором могли бы расположиться бухгалтерия, отдел кадров, дирекция и конференц-зал."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
              <div>
              <p className={styles.project__p}>Главной сложностью при разработке концепции дизайна офиса стала планировка. Помещения, в которых могли быть расположены кабинеты, находятся в противоположных концах здания: у главного и черного входа, а в центральной части располагаются складские помещения.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-silvano/04_ofis-silvano.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-silvano/04_ofis-silvano.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-silvano/06_ofis-silvano.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-silvano/06_ofis-silvano.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Функциональные связи в компании – основа планировочного решения</h2>
              <div>
              <p className={styles.project__p}>Для создания действительно удобного пространства нужно было продумать функциональные связи в компании. Необходимо было создать такую планировку, чтобы отделы, которые часто работают друг с другом, располагались рядом.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-silvano/08_ofis-silvano.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-silvano/08_ofis-silvano.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-silvano/05_ofis-silvano.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-silvano/05_ofis-silvano.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Логично, что кабинет директора должен соседствовать с блоком, где работает секретарь. Конференц-зал также стоит расположить неподалеку от дирекции. К тому же, он должен располагаться у главного входа в здание, ведь не всегда удобно проводить посетителей по коридорам через подсобные и складские помещения"
              />
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В интерьере использовались контрастные сочетания цветов и сдержанный декор. Так, потребности сотрудников и особенности планировки здания легли в основу концепции минималистичного офиса.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-silvano/02_ofis-silvano.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-silvano/02_ofis-silvano.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-silvano/07_ofis-silvano.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-silvano/07_ofis-silvano.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-silvano/03_ofis-silvano.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-silvano/03_ofis-silvano.jpg"
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
export default OfisSilvano