import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationDmitry } from '../../../subitems/project/consultation/project-consultation-dmitry'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey';

const DomTerassa = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн фасада дома - RHOME"} description={"Дизайн фасада дома с открытой террасой от студии Rhome. Было/стало, чертежи, 3D проекты"}
        location={"https://rhome.by/portfolio/facade/dom-terassa"}
        image={"https://rhome.by/images/portfolio/dom-terassa/01_dom-terassa.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом с открытой террасой"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="июнь 2016"
                metr="450"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-terassa/01_dom-terassa.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-terassa/00_dom-terassa.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Оформить фасад дома и подчеркнуть современную архитектуру."
              wishText="Мы строим дом для для себя и хотим, чтобы все было максимально качественно. Современная лаконичная архитектура нам очень нравится, поэтому не переборщите с декором. К дому нужно пристроить крыльцо и разработать лицевую часть забора."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
                <div>
                <p className={styles.project__p}>Первое, что сделал архитектор для оформления фасада дома, — разработал входную группу в современном стиле. Деревянная отделка стен перекликается с материалами, использованными на террасе.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-terassa/02_dom-terassa.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-terassa/02_dom-terassa.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/dom-terassa/03_dom-terassa.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-terassa/03_dom-terassa.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Архитектор «поиграл» с плоскостями</h2>
                <div>
                <p className={styles.project__p}>Ровный «кубик» скорее похож на госучреждение или трансформаторную будку, нежели на современный дом для семьи. В отделке фасада важно слегка «сдвигать» плоскости. Визуально, конечно. Поэтому отделка цоколя, первого и второго этажа выполнены с легким смещением. Материалы: штукатурка, плитка и клинкерный кирпич.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-terassa/04_dom-terassa.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-terassa/04_dom-terassa.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <ProjectConsultationDmitry
                text="Сиротливая дверь смотрится уныло и одиноко, поэтому крыльцо — это не только защита от непогоды, но и важный архитектурный элемент."
              />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Окна отделали алюминиевыми обоймами</h2>
                <div>
                <p className={styles.project__p}>Этот нехитрый прием добавляет фасаду глубины и респектабельности. Выход на летнюю террасу защищен раздвижной маркизой. При необходимости ее можно свернуть, чтобы добавить внутренним помещениям больше света или просто поставить шезлонги и позагорать.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-terassa/05_dom-terassa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-terassa/05_dom-terassa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-terassa/06_dom-terassa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-terassa/06_dom-terassa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Фасад в светлом цвете</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-terassa/07_dom-terassa.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-terassa/07_dom-terassa.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-terassa/08_dom-terassa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-terassa/08_dom-terassa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-terassa/09_dom-terassa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-terassa/09_dom-terassa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-terassa/10_dom-terassa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-terassa/10_dom-terassa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-terassa/11_dom-terassa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-terassa/11_dom-terassa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <ProjectPartner
            items={
            <>
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/caparol.jpg"
                  alt=""
                  />
                }
                text="Отделочные материалы" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/alutex.jpg"
                  alt=""
                  />
                }
                text="Алюминиевые профильные системы" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/vandersanden.jpg"
                  alt=""
                  />
                }
                text="Кирпич ручной формовки" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/hormann.jpg"
                  alt=""
                  />
                }
                text="Двери и ворота" 
              />
            </>
          }
          />
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default DomTerassa