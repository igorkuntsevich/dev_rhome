import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey'

const ApartamentyBryussel = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн неоклассического интерьера квартиры в Брюсселе. Студия RHome"} description={"Разработка дизайн-проекта арендной квартиры в Брюсселе. Дизайн интерьера квартиры в неоклассическом стиле хорошо смотрится в старых квартирах с высокими потолками."}
        location={"https://rhome.by/portfolio/apartment/apartamenty-bryussel"}
        image={"https://rhome.by/images/portfolio/apartamenty-bryussel/01_apartamenty-bryussel.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Неоклассика в Брюсселе"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="96"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/apartamenty-bryussel/01_apartamenty-bryussel.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/apartamenty-bryussel/00_apartamenty-bryussel.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Разработать дизайн интерьера в неоклассическом стиле."
              wishText="Это одна из двух квартир для сдачи в аренду. Я бы хотел, чтобы ее интерьер был оформлен в неоклассическом стиле. Вторую квартиру сделаем в современном стиле. Апартаменты находятся в районе Брюсселя, где обитают успешные люди из мира искусства. Портрет потенциальных арендаторов – семейная пара с ребенком-подростком."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/02_apartamenty-bryussel.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/apartamenty-bryussel/02_apartamenty-bryussel.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/03_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/03_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/04_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/04_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Неоклассика – идеальный баланс строгих линий и современного декора</h2>
              <div>
                <p className={styles.project__p}>Дизайн интерьера в неоклассическом стиле отлично смотрится в старых квартирах с высокими потолками. Эта квартира расположена в историческом здании в центре Брюсселя. Фасад — историко-культурная ценность, охраняемая государством. Это большая удача для нас — реализовать такой требовательный со стилистической точки зрения интерьер можно не везде. Хороший дизайн квартиры предполагает гармонию интерьера с окружением — фасадом дома, районом в котором расположен дом и даже духом города.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/05_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/05_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/07_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/07_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Дизайн-проект квартиры выполнена в светлых тонах. Здесь отсутствуют яркие акценты. Это продиктовано канонами неоклассического стиля — в таких интерьерах редко используются яркие цвета и пышный декор. Кроме того, мы создавали интерьер для квартиры под сдачу — важно было разработать универсальное пространство. Грамотный дизайн и продуманная техническая сторона универсальны, а характерные элементы — дело вкуса. Будущим жильцам лучше выбирать их самостоятельно. К тому же, в районе, где расположена эта квартира живет творческая интеллигенция. У них, наверняка найдутся картины и скульптуры, которые они захотят разместить в интерьере.</p>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/13_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/13_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/08_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/08_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Наш заказчик не хотел дробить пространство на комнаты – гостиная, кухня и столовая образуют общее пространство. Диван в гостиной от Granger Hertzog напоминает работы знаменитого дизайнера мебели Владимира Кагана. Он автор скульптурного стиля мебели, его мебель – классика американского дизайна середины прошлого столетия.</p>
            </div>

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/09_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/09_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/06_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/06_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/11_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/11_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            
            <ProjectConsultationSergey
                text="Когда обсуждаете пожелания по интерьеру квартиры с дизайнером, важно рассказать о стиле жизни и предпочтениях будущих жильцов. Даже если вы делаете ремонт квартиры под сдачу, стоит заранее обдумать, кто может жить в этой квартире. Это прояснит не только задачу дизайнеру, но и сделает квартиру более привлекательной для потенциальных арендаторов."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>В дизайне квартиры мы использовали узнаваемый декор интерьеров в неоклассическом стиле</h2>
              <div>
                <p className={styles.project__p}>Стены во всех комнатах декорированы молдингом — это узнаваемый элемент неоклассических интерьеров. Его мы использовали и в декорировании кухонных фасадов и шкафов спальнях. Однако, при создании дизайн-проекта важно не перегрузить пространство. Поэтому мы отдали предпочтение дверям невидимкам с минималистичным дизайном.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/22_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/22_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/14_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/14_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/16_apartamenty-bryussel.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/apartamenty-bryussel/16_apartamenty-bryussel.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/15_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/15_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/24_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/24_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/23_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/23_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>Ванная комната ближе к современному стилю. Классический интерьер легко «убить» шампунями, электробритвами и прочими нужными вещами, разбросанными по ванной. Мы выбрали более универсальный вариант. Широкоформатная плитка под камень, большое зеркало с подсветкой, четкие линии — здесь все максимально просто и изысканно. Это не неоклассика, но интерьер санузлов отлично гармонирует с остальными комнатами квартиры.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/19_apartamenty-bryussel.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/apartamenty-bryussel/19_apartamenty-bryussel.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/20_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/20_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/17_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/17_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/18_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/18_apartamenty-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartamenty-bryussel/21_apartamenty-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartamenty-bryussel/21_apartamenty-bryussel.jpg"
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
export default ApartamentyBryussel