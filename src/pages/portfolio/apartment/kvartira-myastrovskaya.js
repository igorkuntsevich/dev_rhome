import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'


const KvartiraMyastrovskaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира на Мястровской - RHOME"} description={"Квартира на Мястровской дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-myastrovskaya"}
        image={"https://rhome.by/images/portfolio/kvartira-myastrovskaya/01_kvartira-myastrovskaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира на Мястровской"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="ноябрь 2017"
                metr="150"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-myastrovskaya/01_kvartira-myastrovskaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-myastrovskaya/00_kvartira-myastrovskaya.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-myastrovskaya/cut/18_kvartira-myastrovskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-myastrovskaya/cut/03_kvartira-myastrovskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-myastrovskaya/cut/10_kvartira-myastrovskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-myastrovskaya/cut/09_kvartira-myastrovskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Мы давно мечтали о большой квартире, в которой будет много свободного пространства и света. В итоге купили две соседние квартиры и хотим объединить их в одну. Нам очень нравится дизайн техники Apple. Хотелось бы, чтобы интерьер в нашем новом доме был таким же – стильным и лаконичным."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Основной задачей архитектора было создание современного, функционального интерьера квартиры, который не утратит эти качества даже через несколько лет. Поэтому здесь минимум декора, максимум работы с пространством. Строгую и лаконичную отделку смягчает только обилие натурального дерева.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/02_kvartira-myastrovskaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-myastrovskaya/02_kvartira-myastrovskaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/03_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/03_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/05_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/05_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Гостиная, столовая и кухня представляют собой единое пространство. Диван выбирали особенно тщательно, ведь он виден из разных точек и потому должен хорошо выглядеть со всех сторон. В итоге остановили выбор на модели итальянской фабрики Minotti. По просьбе хозяина в гостиной предусмотрели небольшое рабочее место у окна, выделили эту зону шпонированными панелями. Сверху над телевизором спрятан экран для проектора, благодаря которому с виду аскетичная TV-зона превращается в современный домашний кинотеатр.</p>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/10_kvartira-myastrovskaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-myastrovskaya/10_kvartira-myastrovskaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Вся квартира – единое пространство</h2>
              <div>
                <p className={styles.project__p}>Чтобы не дробить квартиру на небольшие участки и добиться цельности пространства, пол во всех зонах отделали единым материалом — португальским керамогранитом с текстурой камня. Дизайнер отказался от узких коридоров и сделал ставку на открытое пространство, поэтому входная зона плавно переходит в гостиную. Фасады многочисленных мест хранения растворены в стенах – это было принципиально важно для заказчиков. Такое решение визуально разгрузило комнату, и интерьер выглядит просторным, не загроможденным шкафами. В кухне разместили большой П-образный гарнитур, который имеет два основных объема: рабочую зону с плитой и мойкой, а также колонну со встроенной техникой и системами хранения.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/06_kvartira-myastrovskaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-myastrovskaya/06_kvartira-myastrovskaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/11_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/11_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/08_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/08_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/04_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/04_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/34_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/34_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/07_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/07_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня с умиротворяющей атмосферой</h2>
              <div>
                <p className={styles.project__p}>В спальне заказчикам хотелось создать более уютную, умиротворяющую атмосферу, поэтому для оформления были выбраны мягкие цвета: светло-молочная гамма с добавлением деликатного серого и оттенков натурального дерева. Для удобства хозяев предусмотрен небольшой встроенный гардероб. Двери в нем открываются по принципу купе и выполнены из затемненного стекла. Такое решение выглядит современно и позволяет быстрее ориентироваться в зоне хранения. Как и во всей квартире, в спальне достаточно свободного пространства и дневного света. Есть выделенная зона для чтения и для занятий йогой.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/20_kvartira-myastrovskaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-myastrovskaya/20_kvartira-myastrovskaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/18_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/18_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/21_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/21_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/17_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/17_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/22_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/22_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/19_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/19_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Зеркало во всю стену</h2>
              <div>
                <p className={styles.project__p}>Санузел отделан крупноформатной керамической плиткой. Она фоновая, но за счет интересной текстуры стены смотрятся очень эффектно. С помощью большого зеркала на всю ширину стены визуально расширили комнату и сломали геометрию пространства. В целом, получился лаконичный, спокойный интерьер, в котором нет кричащих и ярких пятен и пестрого декора. Интерьер, который будет актуален еще очень долгое время.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/12_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/12_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/13_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/13_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/14_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/14_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/16_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/16_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/15_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/15_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Реализация</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/23_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/23_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/24_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/24_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/25_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/25_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/32_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/32_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/26_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/26_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/28_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/28_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/27_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/27_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/29_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/29_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/31_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/31_kvartira-myastrovskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-myastrovskaya/33_kvartira-myastrovskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-myastrovskaya/33_kvartira-myastrovskaya.jpg"
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
                  src="../../../images/partners/domani.jpg"
                  alt=""
                  />
                }
                text="Центр интерьерных решений"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/skvirel.jpg"
                  alt=""
                  />
                }
                text="Салон интерьеров" 
              />
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
                  src="../../../images/partners/openini.jpg"
                  alt=""
                  />
                }
                text="Салон напольных покрытий и дверей" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/asteya.jpg"
                  alt=""
                  />
                }
                text="Современные электроустановочные изделия" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/austrialight.jpg"
                  alt=""
                  />
                }
                text="Салон светильников" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/sofaclub.jpg"
                  alt=""
                  />
                }
                text="Салон мебели"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/caparol.jpg"
                  alt=""
                  />
                }
                text="Отделочные материалы" 
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
export default KvartiraMyastrovskaya