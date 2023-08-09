import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey';

const DomStaroeselo = () => {
  return (
    <Layout>
      <Seo 
        title={"Дом в Старом селе - RHOME"} description={"Дом в Старом селе дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/facade/dom-staroeselo"}
        image={"https://rhome.by/images/portfolio/dom-staroeselo/01_dom-staroeselo.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом в Старом селе"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="январь 2018"
                metr="350"
                building=""
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/dom-staroeselo/01_dom-staroeselo.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-staroeselo/00_dom-staroeselo.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-staroeselo/cut/08_dom-staroeselo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/dom-staroeselo/cut/07_dom-staroeselo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/dom-staroeselo/cut/06_dom-staroeselo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-staroeselo/cut/09_dom-staroeselo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Создать современный жилой дом для двух семей в традиционном европейском стиле."
              wishText="Мы хотим удобный для жизни загородный дом, в котором могли бы расположиться две семьи и не мешать друг другу. Нам нравится традиционная европейская архитектура и минимализм."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
              <div>
                <p className={styles.project__p}>Дом в Старом селе — пример «амбарной» архитектуры (Барнхаус). Этот стиль уже стал популярным в Европе. Стиль получил свое название из-за сходства с деревенскими амбарами. Характерной особенностью стиля барнхауc является двускатная крыша. Благодаря мансардным окнам в крыше дома в Старом селе солнечный свет долго освещает комнаты.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-staroeselo/02_dom-staroeselo.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/dom-staroeselo/02_dom-staroeselo.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-staroeselo/03_dom-staroeselo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-staroeselo/03_dom-staroeselo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-staroeselo/04_dom-staroeselo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-staroeselo/04_dom-staroeselo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дом в стиле Барнхаус</h2>
              <div>
                <p className={styles.project__p}>Дом расположен на возвышенности, откуда открывается хороший вид. Это было учтено в планировке: вид из окон кухни и гостиной выходит на реку и лес. Кроме того, большие окна выигрышно смотрятся на монохромном фасаде.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-staroeselo/05_dom-staroeselo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-staroeselo/05_dom-staroeselo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-staroeselo/07_dom-staroeselo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-staroeselo/07_dom-staroeselo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Простота и функциональность — философия архитектурного проекта дома в Старом Селе. Фасад выполнен лаконично, но ярко. Яркость достигается благодаря контрасту белой фасадной штукатурки с черным цветом, в который выкрашены алюминиевые окна и сосновый брус, покрывающий часть стен дома. Крыша выполнена из матовой черной модульной черепицы.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/dom-staroeselo/08_dom-staroeselo.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-staroeselo/08_dom-staroeselo.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/dom-staroeselo/06_dom-staroeselo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-staroeselo/06_dom-staroeselo.jpg"
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
export default DomStaroeselo