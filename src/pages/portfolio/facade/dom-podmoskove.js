import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey'
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'

const DomPodmoskove = () => {
  return (
    <Layout>
      <Seo 
        title={"Дом в Подмосковье - RHOME"} description={"Дом в Подмосковье дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/facade/dom-podmoskove"}
        image={"https://rhome.by/images/portfolio/dom-podmoskove/01_dom-podmoskove.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом в Подмосковье"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев, Евгений Сиваков"
                manager=""
                data="ноябрь 2022"
                metr="350"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/dom-podmoskove/01_dom-podmoskove.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-podmoskove/00_dom-podmoskove.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-podmoskove/cut/02_dom-podmoskove.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/dom-podmoskove/cut/07_dom-podmoskove.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/dom-podmoskove/cut/03_dom-podmoskove.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/dom-podmoskove/cut/04_dom-podmoskove.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Оформить фасад дома, подобрать отделочные материалы, посчитать бюджет."
              wishText="У меня есть архитектурный проект, сейчас по нему возводят коробку. В процессе строительства я понял, что решение по фасаду совсем сырое, не разработаны узлы и элементы фасада, нет проекта для лицевой части забора и ворот, не подобраны отделочные материалы."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Три материала в отделке фасада</h2>
                <div>
                <p className={styles.project__p}>Работая над эскизами мы внесли в существующий архитектурный проект ряд небольших, но существенных с точки зрения оформления дома решений: поработали с формой окон и геометрией фронтального фасада, скатную кровлю над гаражом спрятали за геометрически ровным парапетом. Общий вид дома стал более строгий и целостный.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-podmoskove/02_dom-podmoskove.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-podmoskove/02_dom-podmoskove.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-podmoskove/03_dom-podmoskove.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-podmoskove/03_dom-podmoskove.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В отделке применили технологию «мокрого фасада» (системы фасадные теплоизоляционные композиционные с наружными штукатурными слоями). В итоге было использовано три материала отделки поверх теплоизоляционного слоя: декоративная штукатурка, клинкерная плитка и деревянный планкен. Такое сочетание подобрано с учетом предпочтений клиента.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-podmoskove/04_dom-podmoskove.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-podmoskove/04_dom-podmoskove.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-podmoskove/06_dom-podmoskove.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-podmoskove/06_dom-podmoskove.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-podmoskove/05_dom-podmoskove.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-podmoskove/05_dom-podmoskove.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
            <ProjectConsultationSvetlana
                text="К оформлению фасада лучше всего приступать совместно с проектированием ландшафтного дизайна, т.к. это неразделимые пространства в восприятия вашего жилища в целом"
            />
            </div>
            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>В оформлении въездной группы применили сочетание металлического ограждения «расческа» и бетонных тумб, что довольно гармонично сочетается с современным модерновым фасадом.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/dom-podmoskove/08_dom-podmoskove.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-podmoskove/08_dom-podmoskove.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/dom-podmoskove/07_dom-podmoskove.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-podmoskove/07_dom-podmoskove.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/dom-podmoskove/09_dom-podmoskove.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-podmoskove/09_dom-podmoskove.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-podmoskove/10_dom-podmoskove.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-podmoskove/10_dom-podmoskove.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-podmoskove/11_dom-podmoskove.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-podmoskove/11_dom-podmoskove.jpg"
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
export default DomPodmoskove