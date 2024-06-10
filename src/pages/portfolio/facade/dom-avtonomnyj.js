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


const DomAvtonomnyj = () => {
  return (
    <Layout>
      <Seo 
        title={"Автономный дом в Литве - RHOME"} description={"Автономный дом в Литве дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/facade/dom-avtonomnyj"}
        image={"https://rhome.by/images/portfolio/dom-avtonomnyj/01_dom-avtonomnyj.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Автономный дом в Литве"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="март 2016"
                metr="206"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-avtonomnyj/01_dom-avtonomnyj.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-avtonomnyj/00_dom-avtonomnyj.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-avtonomnyj/cut/06_dom-avtonomnyj.jpg"
              alt=""
              className={collageStyles.photocollage_img}
            />
            <StaticImage
              src="../../../images/portfolio/dom-avtonomnyj/cut/05_dom-avtonomnyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/dom-avtonomnyj/cut/08_dom-avtonomnyj.jpg"
              alt=""
              className={collageStyles.photocollage_img}
            />
            <StaticImage
              src="../../../images/portfolio/dom-avtonomnyj/cut/04_dom-avtonomnyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Оформить фасад дома в современном стиле."
              wishText="Мы купили дом на берегу небольшого озера, планируем использовать его исключительно в качестве загородного. Место очень живописное, поэтому не хочется глухих стен, сделайте панорамные окна везде, где это возможно. А еще нам очень нравятся идеи автономного дома. Продумайте, как это можно воплотить в жизнь в наших реалиях."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/02_dom-avtonomnyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/dom-avtonomnyj/02_dom-avtonomnyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/03_dom-avtonomnyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/dom-avtonomnyj/03_dom-avtonomnyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Архитектура вписанная в ландшафт</h2>
                <div>
                <p className={styles.project__p}>Стиль этого загородного дома очень сложно обозначить одним словом: это современный, экологичный и продуманный до мелочей уголок для людей, уставших от суеты большого города.</p>
                <p className={styles.project__p}>Концепция дизайн-проекта дома отражает передовой подход к проектированию: здание органично вписано в природный ландшафт, а границы между внутренним и внешним пространством практически стерты.</p>
                <p className={styles.project__p}>С целью впустить в дом природу и максимум света были предусмотрены раздвижные окна во всю ширину и высоту стены, выходящей на небольшую террасу у озера. Благодаря этому решению дом выглядит роскошно и современно, а внутри всегда много естественного света.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/05_dom-avtonomnyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-avtonomnyj/05_dom-avtonomnyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/06_dom-avtonomnyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-avtonomnyj/06_dom-avtonomnyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Философия экологичности</h2>
                <div>
                <p className={styles.project__p}>Нейтральная цветовая гамма, простота линий, минимум лишних деталей и технологичность
Фасад выполнен в современном стиле с использованием натуральных материалов: дерево, бетон, металл. Основные пожелания заказчиков нашли отражение в реализации идеи автономного дома: в проекте предусмотрен геотермальный тепловой насос, генератор и возможность установки на крыше солнечных батарей. Этот дом не просто находится в гармонии с природой, но и является энергоэффективным. А значит наносит минимальное влияние на окружающую среду.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/08_dom-avtonomnyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-avtonomnyj/08_dom-avtonomnyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/09_dom-avtonomnyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-avtonomnyj/09_dom-avtonomnyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/11_dom-avtonomnyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/dom-avtonomnyj/11_dom-avtonomnyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/04_dom-avtonomnyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-avtonomnyj/04_dom-avtonomnyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/10_dom-avtonomnyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-avtonomnyj/10_dom-avtonomnyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Внутри дома господствует эстетика минимализма, где нет даже намека на избыточный декор и мелкие детали. Все внимание концентрируется на простоте вещей, подчеркивая тем самым идеальное соотношение внешнего и внутреннего убранства, функции и формы.</p>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/07_dom-avtonomnyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-avtonomnyj/07_dom-avtonomnyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/dom-avtonomnyj/12_dom-avtonomnyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-avtonomnyj/12_dom-avtonomnyj.jpg"
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
export default DomAvtonomnyj