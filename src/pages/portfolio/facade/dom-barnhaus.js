import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartnerNarrow } from "../../../subitems/project/project-partner-narrow"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey';


const DomBarnhaus = () => {
  return (
    <Layout>
      <Seo 
        title={"Дом в стиле Барнхаус - RHOME"} description={"Дом в стиле Барнхаус дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/facade/dom-barnhaus"}
        image={"https://rhome.by/images/portfolio/dom-barnhaus/01_dom-barnhaus.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом в стиле Барнхаус"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="июнь 2017"
                metr="200"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-barnhaus/01_dom-barnhaus.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-barnhaus/00_dom-barnhaus.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-barnhaus/cut/10_dom-barnhaus.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-barnhaus/cut/01_dom-barnhaus.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/dom-barnhaus/cut/08_dom-barnhaus.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-barnhaus/cut/07_dom-barnhaus.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Оформить фасад дома в стиле барнхаус."
              wishText="Мы купили дом в городе и хотим, чтобы он выглядел современно как внутри, так и снаружи. Так как участок небольшой, нужно максимально рационально использовать имеющуюся площадь. Обязательно спроектируйте гараж и предусмотрите место для небольшой зоны барбекю."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
              <div>
              <p className={styles.project__p}>Форм-фактор дома прост и минималистичен. Фасад выглядит современно благодаря комбинированию различных приемов наружного оформления, в нашем случае это декоративная штукатурка и деревянные рейки.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__narrow_block}>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/02_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/02_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/03_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/03_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>В гармонии с природой</h2>
                <div>
                <p className={styles.project__p}>Дом имеет прямую двускатную крышу из модульной черепицы, сплошные стены и панорамные окна. Простота дома прекрасно вписывается в природный ландшафт городской среды. Свободное внутреннее пространство визуально расширяется, уходит за пределы дома благодаря панорамным окнам на всю высоту первого этажа, они же дают помещению максимум естественного света.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/04_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/04_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/05_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/05_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/08_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/08_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/07_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/07_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/06_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/06_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationSergey
                text="Для внешней отделки фасадов и террас наилучшим выбором станет термодоска (прошедшая термообработку древесина). Это один из самых долговечных, прочных и устойчивых к внешним факторам отделочный материал. К тому же экологически чистый."
            />
                        <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Комбинированный фасад</h2>
                <div>
                <p className={styles.project__p}>Форм-фактор дома прост и минималистичен. Фасад выглядит современно благодаря комбинированию различных приемов наружного оформления, в нашем случае это декоративная штукатурка и деревянные рейки.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/10_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/10_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-barnhaus/09_dom-barnhaus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-barnhaus/09_dom-barnhaus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <ProjectPartnerNarrow
            items={
            <>
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/skvirel.jpg"
                  alt=""
                  />
                }
                text="Салон интерьеров" 
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
export default DomBarnhaus