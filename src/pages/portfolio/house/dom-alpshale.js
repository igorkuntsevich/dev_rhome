import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const DomAlpshale = () => {
  return (
    <Layout>
      <Seo 
        title={"Интерьер дома с мотивами шале - RHOME"} description={"Интерьер дома с мотивами шале в Минске. Надежность и простота в исполнении дизайн студии Rhome."}
        location={"https://rhome.by/portfolio/house/dom-alpshale"}
        image={"https://rhome.by/images/portfolio/dom-alpshale/01_dom-alpshale.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Интерьер дома с мотивами шале"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="июнь 2015"
                metr="401"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/dom-alpshale/01_dom-alpshale.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-alpshale/00_dom-alpshale.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать уютный дизайн интерьера."
              wishText="Хочется, чтобы интерьер был похож на простой деревенский домик в альпийских горах, в котором мы отдыхали прошлой зимой. Он должен быть теплый и комфортный, с мягкими фактурами и натуральным деревом. Мы хотим только натуральные материалы без ярких синтетических красок и броских цветных пятен. Возможно древесина, камень и натуральный мех."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Стиль шале</h2>
                <div>
                <p className={styles.project__p}>Наши заказчики на первой же встрече рассказали о том, как их вдохновил интерьер альпийского коттеджа, в котором они остановились во время одной из своих поездок. Стиль, в котором выполнены большинство таких горных домов, называется шале. Именно стиль шале стал вдохновением для создания дизайн-проекта интерьера этого загородного дома. Однако мы не пошли по пути копирования, а привнесли нотки других стилей, чтобы отразить все многообразие вкусов наших заказчиков и уйти от простого копирования эстетики альпийской архитектуры.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin + " " + styles.project__narrow_block}>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/02_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/02_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/03_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/03_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/04_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/04_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/05_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/05_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Уютная атмосфера амбара</h2>
                <div>
                <p className={styles.project__p}>Как и полагает стилю шале мебель в этом интерьере массивная и грубо обработанная. Мы выбирали естественные оттенки для мебели и текстиля — здесь преобладает темно-коричневый, графитовый и светло-бежевые оттенки. Из-за того, что по насыщенности использованные цвета совсем не близкие, получился довольно контрастный интерьер. Дома в стиле шале часто описывают, как уютную атмосферу амбара. В этом проекте у нас не было цели полностью повторять эту атмосферу, поэтому мы разбавили тяжеловесную мебель и деревянную отделку классическими светильниками и стульями. Они достаточно яркие и акцентные, неплохо бы вписались в интерьер в неоклассическом стиле или апартаменты в стиле гламур. В гостиной потолки в высоту двух этажей, благодаря чему в комнату попадает много естественного света.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/06_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/06_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/09_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/09_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="В загородном доме подумайте о гостиной с высокими потолками. Часто дополнительные спальни на втором этаже не используются, поэтому еще на этапе планирования дома, стоит рассмотреть вариант гостиной с потолком, уходящим под крышу. Так можно спроектировать второй свет и выбрать акцентные крупные люстры, которые не подошли бы в помещение со стандартной высотой потолков"
              />
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн кухни</h2>
                <div>
                <p className={styles.project__p}>Дизайн кухни — современный. Здесь еще на этапе создания дизайн-проекта мы предусмотрели гладкие поверхности и отделку в монохромной цветовой гамме. Над островом расположена большая вытяжка — на этой кухне хозяева планируют проводить много времени за готовкой.</p>
              </div>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/07_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/07_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/08_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/08_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/12_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/12_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>            
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Лестница и холл второго этажа выполнены в более современной эстетике. Здесь нет визуальных усложнений — все четкой и геометрично. Темное дерево, которое стало основным материалом лестницы, хорошо сочетается с прозрачным стеклом. Такой аскетичный подход дублируется и в выбранном для этой зоны светильнике. Стремление к простоте продолжается и в дизайне холла второго этажа. Мы не изолировали это пространство и здесь образовалась галерея, выходящая на гостиную. Таким образом, холл дополнительно освещен солнечным светом, а по вечерам — светом, исходящим из гостиной.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/10_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/10_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/11_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/11_dom-alpshale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-alpshale/13_dom-alpshale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-alpshale/13_dom-alpshale.jpg"
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
export default DomAlpshale