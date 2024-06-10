import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSvetlana} from '../../../subitems/project/task/project-task-svetlana'


const ApartamentyKeln = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера апартаментов в Кельне - RHOME"} description={"Современный интерьер квартиры в городском стиле."}
        location={"https://rhome.by/portfolio/apartment/apartamenty-keln"}
        image={"https://rhome.by/images/portfolio/apartamenty-keln/01_apartamenty-keln.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Апартаменты Кельн"
                leader="Сергей Рассеко"
                architector="Илья Горовец, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="2023"
                metr="96"
                building="6 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/apartamenty-keln/01_apartamenty-keln.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/apartamenty-keln/00_apartamenty-keln.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSvetlana
              taskText="В дизайне мне нравятся простые формы, чистые линии и незахламленные открытые пространства. Цветовая гамма темная."
              wishText="Используйте свободную комнату под гардеробную, отдельный рабочий кабинет не нужен, достаточно рабочего места. Квартира арендная, поэтому применяйте мобильные решения, чтобы при переезде можно было забрать с собой не только мебель, но и элементы отделки (стеновые панели, светильники и тд.)"
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/apartamenty-keln/02_apartamenty-keln.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/apartamenty-keln/02_apartamenty-keln.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/05_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/05_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/06_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/06_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/apartamenty-keln/03_apartamenty-keln.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/apartamenty-keln/03_apartamenty-keln.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Кухня, совмещенная с гостиной</h2>
            </div> 
            <a href="https://rhome.by/images/portfolio/apartamenty-keln/08_apartamenty-keln.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/apartamenty-keln/08_apartamenty-keln.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/04_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/04_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/07_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/07_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/09_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/09_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мастер-спальня</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/15_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/15_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/13_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/13_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/apartamenty-keln/11_apartamenty-keln.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/apartamenty-keln/11_apartamenty-keln.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/12_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/12_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/10_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/10_apartamenty-keln.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-keln/14_apartamenty-keln.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-keln/14_apartamenty-keln.jpg"
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
export default ApartamentyKeln