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
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana'
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'


const HouseBerezino = () => {
  return (
    <Layout>
      <Seo 
        title={"Дом на Березине - RHOME"} description={"Дом на Березине дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/dom-berezino"}
        image={"https://rhome.by/images/portfolio/dom-berezino/01_dom-berezino.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом на&nbsp;Березине"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="260"
                building="18 месяцев"
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-berezino/01_dom-berezino.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-berezino/00_dom-berezino.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-berezino/cut/01_cut_dom-berezino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/dom-berezino/cut/02_cut_dom-berezino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-berezino/cut/03_cut_dom-berezino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/dom-berezino/cut/04_cut_dom-berezino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-berezino/cut/05_cut_dom-berezino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSvetlana
              taskText="Спроектировать дом и&nbsp;баню. Разработать дизайн интерьера загородного дома в&nbsp;современном стиле."
              wishText="Мы&nbsp;решили обзавестись загородным домом, куда можно было&nbsp;бы приезжать не&nbsp;просто на&nbsp;выходные, а&nbsp;жить с&nbsp;комфортом продолжительное время. Очень важно сохранить комфорт городской жизни."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
                <div>
                <p className={styles.project__p}>Этот проект&nbsp;&mdash; сочетание лучшего, что есть в&nbsp;городской и&nbsp;загородной жизни. Мы&nbsp;спроектировали дом для семьи, где комфорт и&nbsp;утонченная эстетика современного интерьера соседствует с&nbsp;природой.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-berezino/02_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/02_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__text_center700}>
              <p className={styles.project__p}>Строгость линий, присущая современной стилистике, сочетается с&nbsp;натуральными материалами и&nbsp;приглушенными оттенками дерева и&nbsp;камня.</p>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-berezino/03_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/03_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__leftimage_righttext}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/04_dom-berezino.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/04_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>Здесь можно жить и&nbsp;работать, наслаждаясь природой. Дом спланирован так, чтобы в&nbsp;любой его части ощущалась близость природы. По&nbsp;задумке архитектора, окна в&nbsp;пол в&nbsp;гостиной на&nbsp;первом этаже объединяют интерьер с&nbsp;садом, а&nbsp;со&nbsp;второго этажа есть выход на&nbsp;террасу, с&nbsp;которой открывается прекрасный вид.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-berezino/05_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/05_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <h2 className={styles.project__title}>Реализация</h2>
            <a href="https://rhome.by/images/portfolio/dom-berezino/06_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/06_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__grid_2flex + " " + styles.project__bigmargin}>
              <div className={styles.project__grid_flex}>
                <a href="https://rhome.by/images/portfolio/dom-berezino/07_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/07_dom-berezino.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
                <a href="https://rhome.by/images/portfolio/dom-berezino/08_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/08_dom-berezino.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <div className={styles.project__grid_flex}>
                <a href="https://rhome.by/images/portfolio/dom-berezino/09_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/09_dom-berezino.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
                <a href="https://rhome.by/images/portfolio/dom-berezino/10_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/10_dom-berezino.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
            </div>
            <h2 className={styles.project__title}>Архитектура</h2>
            <a href="https://rhome.by/images/portfolio/dom-berezino/15_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/19_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_with_padding}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/16_dom-berezino.webp"
                data-fancybox="gallery"
                className={styles.project__three_with_padding_fimg}
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/16_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/17_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/17_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/18_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/18_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
          </div>
          <a href="https://rhome.by/images/portfolio/dom-berezino/15_dom-berezino.webp"
            data-fancybox="gallery"
            className={styles.project__one_image_link}
            >
            <StaticImage
              src="../../../images/portfolio/dom-berezino/15_dom-berezino.jpg"
              alt=""
              className={styles.project__one_image}
            />
          </a>
          <div className="wrapper">
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн интерьера</h2>
              <div>
                <p className={styles.project__p}>Во&nbsp;всех помещениях первого этажа пол вымощен плиткой под дерево. За&nbsp;плиткой ухаживать легче, чем за&nbsp;деревянным полом: ее&nbsp;легко убирать, она износостойкая, что очень важно для загородной жизни. Общую строгость интерьера чуть смягчили в&nbsp;зоне гостиной&nbsp;&mdash; здесь много текстиля и&nbsp;мягких линий.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/20_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/20_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/21_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/21_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Продумывая планировку, отталкивайтесь от&nbsp;возможностей, которые предлагает архитектура дома. Например, этом проекте на&nbsp;первом этаже все основные функциональные зоны расположены в&nbsp;одном пространстве. Такой ход помогает рационально использовать большую площадь помещения и&nbsp;сделать так, чтобы свет из&nbsp;огромных окон с&nbsp;видом на&nbsp;сад рассеивался свободно."
              />
            </div>
            <div className={styles.project__bigmargin}>
            </div>
            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>Рядом с&nbsp;диваном Bo&nbsp;Concept Carmo положили ковер Molteni LOOP &amp;&nbsp;CUT Stone&nbsp;&mdash; еще одна нотка уюта, которая не&nbsp;выбивается из&nbsp;общей стилистики интерьера.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/dom-berezino/22_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/22_dom-berezino.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/dom-berezino/23_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/23_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <h2 className={styles.project__title}>Зона отдыха с&nbsp;видом на&nbsp;сад</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Напротив диванной группы&nbsp;&mdash; ТВ-зона. Утонченный акцент светильник Bolia Leaves Floor Lamp Whitе, расположенный на&nbsp;выполненной под заказ тумбе под телевизор. У&nbsp;панорамного окна место, где можно почитать или просто выпить кофе в&nbsp;креслах Flexform Caroline. Здесь можно любоваться природой, находясь в&nbsp;комфортных условиях, ведь на&nbsp;улице часто бывает непогода.</p>
                  <p className={styles.project__p}>Кухня выполнена на&nbsp;заказ из&nbsp;шпона дуба, столешница из&nbsp;архитектурного бетона. Выглядит эта композиция довольно минималистично, яркая и&nbsp;функциональная деталь&nbsp;&mdash; Вытяжка Teka CC&nbsp;40. От&nbsp;зоны гостиной кухня отделена высоким столом-островом. Его основание так&nbsp;же выполнено из&nbsp;дуба, а&nbsp;столешница из&nbsp;бетона. Рядом барные стулья Design Zebra Antishock Barstool. У&nbsp;окна расположен овальный обеденный стол Menu Snaregade Dining Table.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/dom-berezino/24_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/24_dom-berezino.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/dom-berezino/25_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/25_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Строгий, но&nbsp;уютный кабинет на&nbsp;втором этаже</h2>
              <div>
                <p className={styles.project__p}>Поскольку, семья планирует часть времени жить в&nbsp;этом доме, нужно было продумать место для домашнего офиса. Кабинет хозяина этого дома строгий и&nbsp;сдержанный, но&nbsp;за&nbsp;счет цветовой гаммы и&nbsp;натуральных материалов по-домашнему уютный. Рабочий стол&nbsp;&mdash; Armani Casa Euclide Desk. В&nbsp;кабинете есть и&nbsp;зона для отдыха, где мы&nbsp;поместили кресло Cosmorelax Swan, диван Sofa Frigerio Salotti Cloud и&nbsp;журнальный столик Menu Androgyne Side Table White.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/26_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/26_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/27_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/27_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня с&nbsp;выходом на&nbsp;террасу</h2>
              <div>
                <p className={styles.project__p}>Спальня хозяев&nbsp;&mdash; это своеобразное автономное пространство. К&nbsp;ней примыкает ванная комната, неподалеку расположен кабинет. Кроме того, отсюда можно выйти на&nbsp;просторную террасу.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-berezino/28_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/28_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В&nbsp;спальне много света, ведь здесь целых два французских окна. У&nbsp;каждого стоит по&nbsp;кожаному креслу Knoll Hardoy Chair и&nbsp;журнальному столику Menu Androgyne Side Table Black, чтобы можно было почитать при естественном освещении. Напротив двуспальной кровати&nbsp;&mdash; широкий комод Minotti Easel.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/29_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/29_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/30_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/30_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/31_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/31_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <h2 className={styles.project__title}>Санузлы</h2>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/32_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/32_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/33_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/33_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/34_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/34_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/35_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/35_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/36_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/36_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Ванная с&nbsp;окном в&nbsp;пол</h2>
              <div>
                <p className={styles.project__p}>В&nbsp;этом проекте оба санузла выполнены в&nbsp;темных цветах. Дизайн-проект загородного дома разрабатывался с&nbsp;учетом пожеланий заказчиков, поэтому окна в&nbsp;ванных комнатах изначально планировались большие. Хотя мы&nbsp;выбрали черную плитку X-Rock Imola Ceramica и&nbsp;темную краску для потолка, помещение не&nbsp;кажется слишком мрачным за&nbsp;счет попадания солнечного света. А&nbsp;лежа в&nbsp;отдельностоящей ванне Antoniolupi Reflexmood можно смотреть на&nbsp;сад.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/37_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/37_dom-berezino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/38_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/38_dom-berezino.jpg"
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
                  src="../../../images/partners/gira.jpg"
                  alt=""
                  />
                }
                text="Розетки и выключатели"
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
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
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
                  src="../../../images/partners/caparol.jpg"
                  alt=""
                  />
                }
                text="Отделочные материалы" 
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
                  src="../../../images/partners/cosmorelax.jpg"
                  alt=""
                  />
                }
                text="Магазин дизайнерских предметов" 
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
export default HouseBerezino