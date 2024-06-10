import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskDmitry } from '../../../subitems/project/task/project-task-dmitry'
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'


const SpaKrym = () => {
  return (
    <Layout>
      <Seo 
        title={"SPA в Крыму - RHOME"} description={"SPA в Крыму дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/commercial/spa-krym"}
        image={"https://rhome.by/images/portfolio/spa-krym/01_spa-krym.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="SPA в Крыму"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2021"
                metr="94"
                building="4 месяца"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/spa-krym/01_spa-krym.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/spa-krym/00_spa-krym.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskDmitry
              taskText="Создать дизайн-проект SPA при гостинице."
              wishText="Мы планируем открыть SPA-зону для гостей в нашем отеле на морском побережье. Поскольку это не отдельное заведение, а часть уже существующего комплекса, важно, чтобы интерьер перекликался по стилю с остальными помещениями. Главное пожелание – никакой классики, все должно быть строго и современно!"
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепт</h2>
              <div>
              <p className={styles.project__p}>Одно из основных направлений работы дизайн-студии RHome – создание общественных объектов. Это всегда интересная задача и чуть более сложная, поскольку, кроме стилистических решений мы продумываем и техническую реализацию, которая соответствует строгим санитарным и экологическим нормам, установленным законодательством, и всем правилам безопасности. Для этого проекта мы также продумали техническую реализацию. Благодаря подробной проектной документации работы можно выполнять и без постоянных консультаций с нашими архитекторами, что особенно важно, если объект находится в другой стране.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/spa-krym/02_spa-krym.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/spa-krym/02_spa-krym.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Центр пространства – бассейн с гидромассажем и зона отдыха вокруг него. Основная цветовая гамма монохромная – варьируется от белого до глубокого серого. В отделке поверхностей мы использовали керамогранит Estima двух оттенков. Бассейн украшает настенное панно из широкоформатной плитки, имитирующей срезы каменных пород. Узор на них напоминает волны и морскую пену. Так мы объединили интерьер СПА с окружающей средой – все же отель находится прямо на побережье!</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/spa-krym/03_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/03_spa-krym.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/spa-krym/04_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/04_spa-krym.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка водно-термального комплекса</h2>
              <div>
              <p className={styles.project__p}>Площадь SPA сравнительно небольшая. Важно продумать оптимальную планировку, чтобы разместить три парные и бассейн на площади не превышающей 100 кв.м. Кроме того мы визуально разгрузили пространство. Основа этого дизайна-интерьера – строгие линии и спокойные цвета. Еще на этапе обсуждения пожеланий по дизайн-проекту заказчик прислал фотографии других СПА в качестве ориентира и основы муд-борда, который мы составляем для каждого проекта. В тех минималистичных интерьерах главным фишкой было освещение. Свет играет большую роль и в нашем проекте. Кроме потолочных светильников, мы использовали светодиодные ленты, которые придают объем небольшим помещениям и мягко рассеивают свет по стенам.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/spa-krym/05_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/05_spa-krym.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/spa-krym/06_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/06_spa-krym.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Стена в зоне отдыха полностью отделана стабилизированным мхом. Такой пример вертикального озеленения отлично подходит для помещений, где нет места для растений в кадках, а все же добавить зелени хочется. Кроме этого, стена изо мха смягчает основные для этого интерьера четкие линии, делая пространство уютнее. Шезлонги и кресла – Vondom Faz.</p>
            </div>

              <ProjectConsultationSvetlana
                text="При создании общественного объекта, особенно водно-термального комплекса, важно выбирать износостойкие материалы, а также убедиться, что все поверхности не скользкие. Вопрос безопасности в таких проектах всегда на первом месте!"
              />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Массив осины и соляные блоки в парных</h2>
              <div>
              <p className={styles.project__p}>В небольшом водно-термальном комплексе есть сауна, хамам и травяная баня. Полки в парных выполнены из массива осины. На стене сауны мы разместили панно из соляных кирпичей. Это не просто декор – каждый брусок сделан из гималайской соли, которая при нагревании выделяет обеззараживающие и ионизирующие вещества.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/spa-krym/07_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/07_spa-krym.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/spa-krym/08_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/08_spa-krym.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Коридоры и санузлы в этом дизайн-проекте выполнены с использованием минимума цвета и декора.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/spa-krym/09_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/09_spa-krym.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/spa-krym/11_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/11_spa-krym.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/spa-krym/10_spa-krym.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/spa-krym/10_spa-krym.jpg"
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
export default SpaKrym