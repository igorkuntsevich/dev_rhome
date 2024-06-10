import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'


const IntererZelenojagavan = () => {
  return (
    <Layout>
      <Seo 
        title={"Интерьер дома Черничный проезд - RHOME"} description={"Дизайн-проект интерьера дома Черничный проезд от дизайн-студии RHome. "}
        location={"https://rhome.by/portfolio/house/interer-zelenoja-gavan"}
        image={"https://rhome.by/images/portfolio/interer-zelenoja-gavan/01_interer-zelenoja-gavan.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Черничный проезд"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="189"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-zelenoja-gavan/01_interer-zelenoja-gavan.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-zelenoja-gavan/00_interer-zelenoja-gavan.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/interer-zelenoja-gavan/cut/08_interer-zelenoja-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/interer-zelenoja-gavan/cut/01_interer-zelenoja-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/interer-zelenoja-gavan/cut/09_interer-zelenoja-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/interer-zelenoja-gavan/cut/07_interer-zelenoja-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать утонченный и современный интерьер дома."
              wishText="Мы въезжаем в новый дом в Зеленой Гавани, хочется, чтобы интерьер отражал ощущение начала новой главы жизни для нашей семьи. Здесь большие окна, поэтому нам видится что-то простоное и светлое, но в то же время изысканное и соответствующее тенденциям мировых трендов дизайна."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Планировка дома в Зеленой Гавани довольно удачная и изначально соответствовала запросам наших клиентов. Изменения по этой части — минимальные.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/02_interer-zelenoja-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/interer-zelenoja-gavan/02_interer-zelenoja-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>  
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн-проект первого этажа дома</h2>
                <div>
                <p className={styles.project__p}>Чисто и светло — именно эти слова мы хотели, чтобы приходили в голову каждому, кто попадает в этот дом. Мы использовали светлые цвета в оформлении дизайна интерьера дома, а окна в пол, наполняют пространство светом. Кухня, столовая, гостиная объединены. </p>
                <p className={styles.project__p}>Зонирование осуществляется за счет перепада уровня стены и освещения — трековые светильники Delta Light Splitline 29 отделяют зону кухни от гостиной. Чистый белый цвет смягчается светлым деревом, латунной фурнитурой и использованием бархатистого текстиля на стульях Beso и диване Tuffy Time. Яркая деталь — люстра Procario Design Freeform VI над обеденным столом Eliot Drive.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/05_interer-zelenoja-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/interer-zelenoja-gavan/05_interer-zelenoja-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/08_interer-zelenoja-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/interer-zelenoja-gavan/08_interer-zelenoja-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/14_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/14_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/15_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/15_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
            <ProjectConsultationSergey
                text="Чтобы визуально объединить пространство, разделенное на зоны, стоит рассмотреть вариант с одинаковым напольным покрытием. Весь пол на первом этаже дома в Зеленой Гавани вымощен плиткой Atlas Concorde Kone Silver."
            />
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Оформление коридоров и лестницы</h2>
                <div>
                <p className={styles.project__p}>Коридоры максимально минималис­тичные — важно не перегружать пространство. Дизайн лестницы на второй этаж легкий и невесомый, такого ощущения мы добились с помощью стеклянной перегородки, выполняющей функцию перил, и изящного светильника A-tube nano cluster system. Здесь было важно, чтобы лестница не нависала над гостиной.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/10_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/10_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/09_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/09_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер спальной комнаты – сочетание строгости и мягкости</h2>
                <div>
                <p className={styles.project__p}>Главное в дизайне интерьера этой спальни – светлые тона и четкие линии. Чтобы смягчить некоторую строгость линий и сделать интерьер спальной комнаты более расслабленной, мы выбрали кровать Softly с мягким изголовьем из драпированного текстиля. У окна зона чтения – кресло Poltrona Tabano и напольный светильник Cinetique Ligne Roset. Система хранения – Gliss Master Glass.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/11_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/11_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/04_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/04_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/12_interer-zelenoja-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " "+ styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/interer-zelenoja-gavan/12_interer-zelenoja-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Интерьер детской комнаты мы создавали для двух маленьких сестер. Основа концепции дизайна интерьера детской комнаты — сделать ее немного легкомысленной, по-настоящему детской, но гармонично сочетающийся со стилем всего дома. Здесь достаточно места для хранения, чтобы было просто поддерживать порядок, и много свободного места для игр.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/03_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/03_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/13_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/13_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Ванные комнаты на втором этаже</h2>
                <div>
                <p className={styles.project__p}>Интерьер санузлов в этом доме мы старались не унифицировать. Интерьер большой ванной комнаты дома на втором этаже светлый, а поверхности глянцевые. На стенах крупноформатная плитка под мрамор. Отдельно стоя́щая ванная чаша Blu Bathworks. Санузел с душевой более темный, а плитка здесь матовая — Atlas Concorde Lims 3D Way Ivory.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/06_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/06_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-zelenoja-gavan/16_interer-zelenoja-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-zelenoja-gavan/16_interer-zelenoja-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <ProjectPartner
            items={
            <>
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/lazio.jpg"
                  alt=""
                  />
                }
                text="Салон дверей"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/mega.jpg"
                  alt=""
                  />
                }
                text="Салон интерьерных решений" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/openini.jpg"
                  alt=""
                  />
                }
                text="Салон напольных покрытий и дверей"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/oikos.jpg"
                  alt=""
                  />
                }
                text="Декоративная штукатурка и краска"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/daskitchen.jpg"
                  alt=""
                  />
                }
                text="Салон немецкой мебели" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/concetto.jpg"
                  alt=""
                  />
                }
                text="Салон итальянской мебели" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/antrano.jpg"
                  alt=""
                  />
                }
                text="Фабрика эксклюзивной мебели" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/rode.jpg"
                  alt=""
                  />
                }
                text="Салон штор и текстиля" 
              />
            </>
          }
          />
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default IntererZelenojagavan