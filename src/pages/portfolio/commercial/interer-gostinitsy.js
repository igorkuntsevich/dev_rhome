import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'


const IntererGostinitsy = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн-проект интерьера для гостиницы Mariott"} description={"Наша команда создала комплексное решение по оформлению интерьера многофункционального пространства в гостинице Mariott. Достойный результат работы дизайнеров можно детально рассмотреть и оценить в портфолио на сайте."}
        location={"https://rhome.by/portfolio/commercial/interer-gostinitsy"}
        image={"https://rhome.by/images/portfolio/interer-gostinitsy/01_interer-gostinitsy.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Интерьер гостиницы"
                leader="Сергей Рассеко"
                architector=""
                manager="Дмитрий Разумейчик"
                data="июнь 2015"
                metr="450"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-gostinitsy/01_interer-gostinitsy.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-gostinitsy/00_interer-gostinitsy.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Оформить интерьер гостиницы в современном стиле."
              wishText="Нужно комплексное, проработанное решение по оформлению интерьера гостиницы. Что касается цвета, то здесь не должно быть чрезмерно ярких, кричащих оттенков, раздражающих восприятие, в приоритете сдержанные цвета: черный, серый, белый, песочный."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
              <div>
              <p className={styles.project__p}>Современные гостиницы — место для проведения светских мероприятий и конференций, в гостинице Marriott мы занялись проектированием многофункциональной зоны. В дневное время здесь коворкинг, а по вечерам пространство трансформируется для проведения концертов камерной музыки, приемов, конференций.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gostinitsy/02_interer-gostinitsy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gostinitsy/02_interer-gostinitsy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gostinitsy/03_interer-gostinitsy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gostinitsy/03_interer-gostinitsy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <h2 className={styles.project__title}>Дизайн интерьера — это часть менеджмента впечатлений</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>С помощью хорошо продуманного дизайн-проекта можно создать нужное впечатление у гостей о сервисах и статусе вашего бизнеса, сформировать кредит доверия. Все материалы рассчитаны на длительную эксплуатацию, с учетом потенциального износа. Поскольку, место статусное, материалы и мебель мы выбрали высокого класса.</p>
                  <p className={styles.project__p}>Основа концепции интерьера многофункционального пространства в Mariott — универсальность. С одной стороны, пространство должно способствовать продуктивности, а с другой — оно должно быть в меру торжественным для вечерних мероприятий.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/interer-gostinitsy/04_interer-gostinitsy.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/interer-gostinitsy/04_interer-gostinitsy.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/interer-gostinitsy/05_interer-gostinitsy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gostinitsy/05_interer-gostinitsy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Цветовая гамма интерьера</h2>
              <div>
              <p className={styles.project__p}>В дизайне коммерческих помещений важно учитывать психологию цвета. Здесь цетовое решение контрастное, немного авангардное, подойдет для любого сценария: рутинной работы, переговоров, съемок или концерта. Система комфортного многоуровневого освещения обеспечивает комфортное пребывание гостей, а разные сценарии освещения задают нужную атмосферу.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gostinitsy/06_interer-gostinitsy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gostinitsy/06_interer-gostinitsy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gostinitsy/07_interer-gostinitsy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gostinitsy/07_interer-gostinitsy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Исследования показывают, что темная гамма ассоциируется у клиентов с надежностью и компетентностью, а светлая – с открытостью в коммуникации. Вовсе не обязательно выбирать одну цветовую схему: для приемной больше подойдет светлая мебель и отделка, для частных переговоров – темная."
              />
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Пространство-трансформер</h2>
              <div>
              <p className={styles.project__p}>Разрабатывая планировку этого пространства, дизайнер-архитектор проекта предусмотрел, чтобы мебель можно было передвигать и трансформировать в течение дня. Все продумано таким образом, чтобы развести потоки людей и адаптировать пространство для разных мероприятий.</p>
              <p className={styles.project__p}>Кухня для коворкинга спланирована как сцена, она легко превращается в студию для записи кулинарных шоу. При проведении конференций или презентаций кухню можно скрыть, развернув экран, вмонтированный в потолок.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gostinitsy/08_interer-gostinitsy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gostinitsy/08_interer-gostinitsy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gostinitsy/09_interer-gostinitsy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gostinitsy/09_interer-gostinitsy.jpg"
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
export default IntererGostinitsy