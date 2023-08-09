import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'


const FasadSovremennyj = () => {
  return (
    <Layout>
      <Seo 
        title={"Современный фасад дома | Дизайн студия – Rhome.by"} description={"Современный фасад дома от студии Rhome. Было/стало, чертежи, 3D проекты."}
        location={"https://rhome.by/portfolio/facade/fasad-sovremennyj"}
        image={"https://rhome.by/images/portfolio/fasad-sovremennyj/01_fasad-sovremennyj.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Современный фасад дома"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="май 2016"
                metr="250"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-sovremennyj/01_fasad-sovremennyj.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-sovremennyj/00_fasad-sovremennyj.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Оформить фасад дома в современном стиле."
              wishText="Хотим придать нашему дому современный внешний вид. В оформлении фасадов нравится лаконичный европейский подход. Необходимо также разработать входную группу и террасу с обратной стороны дома. Делайте все что угодно, только не «избушку»."
            />
           <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
                <div>
                <p className={styles.project__p}>Финишное покрытие кровли и ливневая система полностью устраивали хозяев, поэтому дизайн фасада архитектор проектировал исходя из этих данных. Фасад решили не дробить и «залили» его белым цветом. Помимо штукатурки ввели еще декоративную клинкерную плитку под кирпич, чтобы разнообразить фактуры.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/fasad-sovremennyj/02_fasad-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-sovremennyj/02_fasad-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-sovremennyj/03_fasad-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-sovremennyj/03_fasad-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationAlexey
                text="Для фасада частного дома лучше использовать декоративную штукатурку шагрень. Привычные «шуба» и «короед» чаще используются для офисных зданий и уже изрядно набили оскомину. Лаконичное решение входной группы добавляет современности в традиционную архитектуру. Металлические ограждения из труб прямоугольного сечения сделали на заказ наши партнеры."
              />

            <div className={styles.project__leftimage_righttext}>
              <a href="https://rhome.by/images/portfolio/fasad-sovremennyj/04_fasad-sovremennyj.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-sovremennyj/04_fasad-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>Чтобы уравновесить высоту фронтонов добавили декоративные распорки. Часть террасы сделали открытой, однако ее всегда можно будет укрыть от дождя с помощью раздвижной маркизы. За счет этого в гостиной будет больше света, а на террасе хозяева смогут установить шезлонги и загорать.</p>
              </div>
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
export default FasadSovremennyj