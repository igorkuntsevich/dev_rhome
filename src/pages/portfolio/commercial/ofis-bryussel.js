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


const OfisBryussel = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера офиса в Брюсселе"} description={"Офис в Брюсселе дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/commercial/ofis-bryussel"}
        image={"https://rhome.by/images/portfolio/ofis-bryussel/01_ofis-bryussel.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Офис в Брюсселе"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="100"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-bryussel/01_ofis-bryussel.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-bryussel/00_ofis-bryussel.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать креативный дизайн офиса для бельгийской компании."
              wishText="Наш запрос – дизайн интерьера офиса для компании, которая занимается созданием продукта. Мы хотели бы, чтобы в дизайн-проекте офисного пространства предусмотрели места для переговоров и сосредоточенной работы, работы и отдыха. Сотрудники проводят здесь бо́льшую часть дня, мы хотим быть уверены, что им будет комфортно."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
              <div>
              <p className={styles.project__p}>Четкие линии и контрастные цвета призваны вдохновлять на структурированные и взвешенные решения. Стеллажи для презентационных материалов и документов, которые могут понадобиться во время обсуждения. Встроенная в полки подсветка делает пространство более объемным и смягчает контрастность цветов, использованных в дизайне переговорки.</p>
              </div>
            </div>
             <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/03_ofis-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/03_ofis-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/04_ofis-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/04_ofis-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__leftimage_righttext + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/02_ofis-bryussel.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/02_ofis-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>Концепция интерьера комнаты переговоров – создать строгую, но креативную, атмосферу, чтобы стимулировать обсуждения. В интерьере офиса мы продумали небольшие кабинки для отдыха и обсуждений стилизованные под небольшие дома.</p>
              </div>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн кухни в офисе</h2>
              <div>
              <p className={styles.project__p}>Кухня — сердце не только дома, но и офиса. Это место отдыха, встреч и иногда даже творческих озарений. В дизайне интерьера брюссельского офиса мы создали лаконичную кухню, которая хорошо сочетается с остальными зонами.</p>
              </div>
            </div>
             <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/05_ofis-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/05_ofis-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/06_ofis-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/06_ofis-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Для рабочей зоны мы выбрали более нейтральные, светлые цвета. Здесь идет размеренная работа и важно создать атмосферу, которая была бы с одной стороны продуктивной, но и не создавать излишнего напряжения в рабочем процессе.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/09_ofis-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/09_ofis-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/10_ofis-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/10_ofis-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationAlexey
                text="Даже если интерьер офиса не видно снаружи, продуманный дизайн интерьера общественного помещения делает вклад в дух города и стиль жизни его жителей. В RHome мы стремимся преобразовывать и улучшать публичное пространство через создание стильных и архитектурно-правильных интерьеров и экстерьеров."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер офиса – часть городской среды</h2>
              <div>
              <p className={styles.project__p}>В интерьере офиса мы продумали небольшие кабинки для отдыха и обсуждений стилизованные под небольшие дома. Такая форма обусловлена одновременно желанием создать уютный safe space – укрытие от офисной суеты. Другое прочтение использование – урбанистическое. Эти домики – напоминание, что офис существует внутри городского пространства и является его частью.</p>
              </div>
            </div>
             <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/07_ofis-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/07_ofis-bryussel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-bryussel/08_ofis-bryussel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-bryussel/08_ofis-bryussel.jpg"
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
export default OfisBryussel