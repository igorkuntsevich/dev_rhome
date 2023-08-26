import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationDmitry } from '../../../subitems/project/consultation/project-consultation-dmitry'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'


const KvartiraMinskmir = () => {
  return (
    <Layout>
      <Seo 
        title={"Трехкомнатная квартира в ЖК Минск Мир - RHOME"} description={"Дизайн-проект интерьера квартиры в ЖК Минск Мир от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-minsk-mir"}
        image={"https://rhome.by/images/portfolio/kvartira-minsk-mir/01_kvartira-minsk-mir.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Трехкомнатная квартира в ЖК Минск Мир"
                leader="Сергей Рассеко"
                architector="Евгений Ковалевский, Анастасия Стороженко"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="90"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-minsk-mir/01_kvartira-minsk-mir.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-minsk-mir/00_kvartira-minsk-mir.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-minsk-mir/cut/12_kvartira-minsk-mir.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-minsk-mir/cut/17_kvartira-minsk-mir.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-minsk-mir/cut/08_kvartira-minsk-mir.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-minsk-mir/cut/10_kvartira-minsk-mir.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-minsk-mir/cut/20_kvartira-minsk-mir.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать современный минималистичный интерьер в темной гамме."
              wishText="Мне хотелось бы видеть городскую квартиру, довольно минималистичную и современную, но не сто́ит уходить в индустриальный стиль или делать лофт-пространство. Я отдаю предпочтения темным цветам и контрастным сочетаниям, но интерьер квартиры не должен смотреться слишком мрачно."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Квартира была сдана со свободной планировкой. Нам нужно было расположить оптимальным образом просторную гостиную, объединенную с кухней, спальню и будущую детскую комнату. Выбирая, как разместить комнаты, мы ориентировались на окна и их расположение относительно сторон света. Но не менее важным был элемент сценарного планирования – мы заранее обсуждали с заказчиком, как он обычно проводит время дома. Небольшой закуток справа от входа в квартиру логично подходил для гардеробной-постирочной.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/02_kvartira-minsk-mir.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-minsk-mir/02_kvartira-minsk-mir.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/03_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/03_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/04_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/04_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Интерьер гостиной со светильником-созвездием</h2>
              <div>
                <p className={styles.project__p}>В дизайне интерьера этой квартиры в ЖК Минск Мир мы изначально задумывали гостиную как многофункциональное пространство, в котором хозяева будут проводить бо́льшую часть времени. Здесь живет пара, поэтому задачи разделить квартиру на множество комнат, чтобы создать личное пространство каждому члену семьи не стояло. Наоборот – идея создать интерьер гостиной, в котором можно принимать гостей – вместе ужинать или устраивать совместный просмотр фильмов на большом диване.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/06_kvartira-minsk-mir.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-minsk-mir/06_kvartira-minsk-mir.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Над обеденным столом на шесть человек Midj Blade утонченный светильник SOZVEZDIE LINE от Центрсвет, напоминающий россыпь звезд в ночном небе. Особенно удачно она смотрится на фоне темных шпонированных стеновых панелей. Стулья у обеденного стола – Nellavetrina Odette/B. Пол – паркетная доска Boen.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/07_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/07_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/05_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/05_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>





            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Интерьер кухни, объединенной с гостиной</h2>
              <div>
                <p className={styles.project__p}>Зона кухни светлее остального пространства. Минималистичные кухонные фасады белого цвета выполнены из крашенного МДФ. Фартук выполнен из белого композита кварца. Из этого же материала выполнена столешница острова. Основание острова темное сделано из фрезерованного МДФ. Мы использовали такую же фактуру в оформлении верхних кухонных шкафчиков, благодаря чему в интерьере появляется визуальная ритмичность. Вертикальные полосы также подчеркнуты черными модульными светильниками Locus PDNT от Центрсвет.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/08_kvartira-minsk-mir.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-minsk-mir/08_kvartira-minsk-mir.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>




          <div className={styles.project__bigmargin}>
              <ProjectConsultationDmitry
                text="Основание острова можно использовать не только для хранения, там можно разместить встроенную бытовую технику. В этом проекте в остров вмонтирована морозильная камера. Так объем используется более рационально."
              />
          </div>

          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня с окнами в пол</h2>
              <div>
                <p className={styles.project__p}>Акцент в интерьере спальни – панно из крупноформатной плитки Tubadzin Specchio Carrara SAT в изголовьи кровати. Кровать Poliform Dream, прикроватные тумбочки – Asplund Mon Xi Xi. </p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/20_kvartira-minsk-mir.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-minsk-mir/20_kvartira-minsk-mir.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Особенность квартир в ЖК Минск Мир – большие окна в пол. Чтобы свет не мешал сну, мы подобрали шторы из плотного текстиля темно-серого цвета.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/15_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/15_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/09_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/09_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн интерьера детской комнаты</h2>
              <div>
                <p className={styles.project__p}>Отделка детской комнаты и корпусная мебель довольно нейтральная, Концепция интерьера разрабатывалась не под конкретного ребенка с его вкусами и предпочтениями, а как место, где в будущем может появиться детская. Сейчас эту комнату можно использовать как гостевую или как кабинет.</p>
              </div>
            </div>

          <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/12_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/12_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/13_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/13_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/11_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/11_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/14_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/14_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер ванной комнаты</h2>
              <div>
                <p className={styles.project__p}>Наш заказчик еще во время обсуждения его предпочтений в дизайне интерьере упоминал, что ему нравятся контрастные сочетания и темные цвета. В интерьере ванной комнаты контраст черной и белой крупноформатной плитки Imola Ceramica из коллекции The Room стало основой интерьера. Прямые вертикальные линии смягчаются круглым зеркалом и скругленными краями тумбы-консоли и отдельностоящей ванны.</p>
              </div>
            </div>

          <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/16_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/16_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/18_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/18_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/19_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/19_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/17_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/17_kvartira-minsk-mir.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-minsk-mir/21_kvartira-minsk-mir.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-minsk-mir/21_kvartira-minsk-mir.jpg"
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
                  src="../../../images/partners/terra.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
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
                  src="../../../images/partners/stonetech.jpg"
                  alt=""
                  />
                }
                text="Мастерская камня" 
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
                  src="../../../images/partners/antrano.jpg"
                  alt=""
                  />
                }
                text="Фабрика эксклюзивной мебели"
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
export default KvartiraMinskmir