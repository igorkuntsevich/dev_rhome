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


const AzsGute = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн-проект интерьера АЗС в Гуте"} description={"Студия RHome разработала стильный интерьер для корпоративного клиента - сети заправочных станций в Беларуси. Наши дизайнеры создавали дизайн-проект для отдельной АЗС в Гуте."}
        location={"https://rhome.by/portfolio/commercial/azs-gute"}
        image={"https://rhome.by/images/portfolio/azs-gute/01_azs-gute.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дизайн интерьера АЗС в Гуте"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="февраль 2018"
                metr="150"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/azs-gute/01_azs-gute.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/azs-gute/00_azs-gute.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать новый дизайн магазинов сети АЗС Белоруснефть."
              wishText="Необходимо развить и доработать в соответствии с современными тенденциями уже имеющуюся дизайн-концепцию магазинов сети АЗС. Одни из основных условий – тиражируемость, доступность материалов, простота возведения объекта в любой точке Беларуси."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн</h2>
              <div>
              <p className={styles.project__p}>Заправок в Беларуси много, поэтому конкурировать приходится на более сложном уровне.
Дизайн интерьера АЗС – один из способов повысить конкурентоспособность точки. Основные способы создать нужный образ в глазах клиента и приятный опыт взаимодействия с брендом – продумать планировку, освещение, материалы, цветовую гамму. Все это расскажет о бизнесе лучше рекламных буклетов.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/azs-gute/03_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/03_azs-gute.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/azs-gute/04_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/04_azs-gute.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Цветовая гамма интерьера</h2>
              <div>
              <p className={styles.project__p}>Сообщить о ценностях и миссии компании можно с помощью дизайна интерьера. В оформлении интерьера зала АЗС мы выбрали контрастные простые цвета и четкие линии, нам было важно показать, что это современная компания с прогрессивными ценностями. Поскольку компания белорусская, мы добавили в оформление интерьера национальный орнамент, чтобы продемонстрировать сочетание современного подхода с уважением традиций.</p>
              <p className={styles.project__p}>Зеленый цвет не только цвет движения, но и основа корпоративного стиля Белнефтехим. Использовав зеленый в дизайне интерьера АЗС в Гуте, мы создали звено, объединяющее эту заправку с сетью по всей стране.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/azs-gute/06_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/06_azs-gute.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/azs-gute/11_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/11_azs-gute.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Грамотно подобранные материалы</h2>
              <div>
              <p className={styles.project__p}>Для такого бизнеса важна узнаваемость и тиражируемость, поэтому мы проектировали универсальный интерьер, который можно было бы воспроизвести в другом месте. Это важно для оптимизации процесса стройки последующих павильонов.</p>
              <p className={styles.project__p}>Дизайн-проект включает не только визуализацию пространства, но список материалов. В данном случае было важно, чтобы они подходили для длительной эксплуатации, ведь это общественное пространство с большой нагрузкой и вероятностью неожиданных ситуаций. Мы учли этот момент, так что любой элемент можно оперативно заменить.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/azs-gute/05_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/05_azs-gute.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/azs-gute/10_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/10_azs-gute.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Один из важнейших элементов работы с пространством, особенно общественного или коммерческого назначения, – освещение. Важно было продумать систему многоуровневого освещения. Правильное освещение создает ощущение уюта и зонирует пространство. Кроме того, мы высчитали правильную температуру света, мощность, частоту мерцаний ламп. Обо всем этом не придется думать на этапе реализации объекта.</p>
            </div>
              <ProjectConsultationSvetlana
                text="По правилам в торговом помещении должны быть потолки, дающие возможность быстрого доступа к коммуникациям. Один из популярных вариантов – потолок «грильято», который мы использовали в дизайне интерьера АЗС в Речице. Для этого проекта мы выбрали островные акустические потолки Rockfon. Они закрывают коммуникации от глаз посетителей, но сохраняют возможность моментально получить доступ для проверки или устранения неполадок."
              />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка торгового зала и кафе</h2>
              <div>
              <p className={styles.project__p}>Планировка торгового пространства – это прежде всего работа со сценариями поведения клиента. Одна из задач – с помощью дизайна интерьера повысить продажи. Разрабатывая планировку, мы продумывали, как расположить так, чтобы маршрут «оплатить топливо, купить что-нибудь в дорогу, выпить кофе» был построен максимально органично. Дополнительно мы продумали систему навигации по залу, которая органично вписывается в интерьер торгового зала АЗС.</p>   
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/azs-gute/02_azs-gute.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/azs-gute/02_azs-gute.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/azs-gute/08_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/08_azs-gute.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/azs-gute/07_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/07_azs-gute.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/azs-gute/09_azs-gute.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/azs-gute/09_azs-gute.jpg"
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
export default AzsGute