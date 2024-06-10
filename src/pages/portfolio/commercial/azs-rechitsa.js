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
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'


const AzsRechitsa = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера автомобильной заправочной станции в Речице"} description={"Дизайнеры студии RHome создали интерьер для одной из АЗС в Речице сети заправочных станций в Беларуси. Что получилось, смотрите в нашем портфолио."}
        location={"https://rhome.by/portfolio/commercial/azs-rechitsae"}
        image={"https://rhome.by/images/portfolio/azs-rechitsa/01_azs-rechitsa.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дизайн интерьера АЗС в Речице"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2017"
                metr="80"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/azs-rechitsa/01_azs-rechitsa.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/azs-rechitsa/00_azs-rechitsa.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать интерьер торгового помещения АЗС."
              wishText="Конкуренция среди заправок колоссальна. Соревнование в этой отрасли идет не только между собой, но и с кофейнями. Особенно в небольших городах, где выбор общественных заведений ограничен.Мы хотим, чтобы дизайн торгового помещения нравился молодежи, которая часто заходит сюда выпить кофе, купить снэки и просто провести время."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн интерьера</h2>
              <div>
              <p className={styles.project__p}>Дизайн интерьера – один из инструментов, способных улучшить имидж и конкурентоспособность бренда. Хороший дизайн – гарантия приятного опыта взаимодействия клиента с брендом. Причем этот инструмент работает более органично, воздействуя на психологию посетителя. Правильная планировка, материалы, освещение – рассказывают о бизнесе лучше промо материалов.</p>
              <p className={styles.project__p}>Благодаря грамотному подходу к дизайну общественного пространства можно сформировать позитивные ассоциации с брендом и продуктом, кредит доверия клиентов и партнеров, а также показать статусность. Даже ценности и миссию компании можно выразить через оформление.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/azs-rechitsa/08_azs-rechitsa.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/azs-rechitsa/08_azs-rechitsa.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Рядом с АЗС находится спортивный молодежный центр. Эта заправка стала местом встречи молодых людей на велосипедах и скейтах. Заказчики дизайн-проекта решили учесть их вкусы и интересы, поэтому интерьер отличается от других торговых помещений той же сети. Перед нашими дизайнерами стояла задача сделать интерьер, который по стилю был бы ближе к кофейне.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/azs-rechitsa/03_azs-rechitsa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-rechitsa/03_azs-rechitsa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/azs-rechitsa/06_azs-rechitsa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-rechitsa/06_azs-rechitsa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationAlexey
                text="В дизайне общественных помещений важно думать не только о красоте и функциональности дизайна, но и о том, насколько он соответствует вкусам и нуждам посетителей. Именно они могут стать источником вдохновения!"
            />
          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Разделение потоков</h2>
              <div>
              <p className={styles.project__p}>В начале работы над проектом мы проанализировали первоначальный интерьер АЗС в Речице, уточнили “портрет клиента”. Особенность этого места в том, что кроме автомобилистов сюда часто заходят на кофе скейтбордисты. Мы прибегли к методам сценарного планирования, продумав ключевые моменты для двух групп клиентов, и организовали пространство, так чтобы разделить эти два потока.</p>
              </div>
            </div>
          <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/azs-rechitsa/07_azs-rechitsa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-rechitsa/07_azs-rechitsa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/azs-rechitsa/05_azs-rechitsa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-rechitsa/05_azs-rechitsa.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <h2 className={styles.project__title}>Цвета и свет в дизайне интерьера</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Мы работали с концепцией приглашающего интерьера. Правильно подобранные цвета в интерьере работают как своеобразная цветотерапия. Приглушенные цвета создают уютную атмосферу, формируют кредит доверия у клиента и создают положительные ассоциации с брендом. Способствует этому и многоуровневая система освещения, которая также выполняет функцию зонирования пространства. Заранее продумали оптимальную температуру света, мощность и мерцание ламп.</p>
                  <p className={styles.project__p}>Для отделки стен помещения наши дизайнеры выбрали HPL-панели, а на пол положили керамогранитную плитку Estima. В качестве материала прилавка выбрали композит кварца. Потолок не совсем обычный – это реечный подвесной потолок, разновидность потолка «грильято». Мы использовали ламинированные под дерево рейки, а в освещении использовали линейные интегрированные светильники.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/azs-rechitsa/07_azs-rechitsa.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/azs-rechitsa/07_azs-rechitsa.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/azs-rechitsa/04_azs-rechitsa.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-rechitsa/04_azs-rechitsa.jpg"
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
export default AzsRechitsa