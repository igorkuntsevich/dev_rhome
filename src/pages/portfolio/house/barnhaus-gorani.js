import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const BarnhausGorani = () => {
  return (
    <Layout>
      <Seo 
        title={"Горани Барнхаус - RHOME"} description={"Горани Барнхаус дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/barnhaus-gorani"}
        image={"https://rhome.by/images/portfolio/barnhaus-gorani/01_barnhaus-gorani.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Горани Барнхаус"
                leader="Алексей Сергеев"
                architector="Евгений Сиваков, Евгений Ковалевский"
                manager="Дмитрий Разумейчик"
                data="июль 2022"
                metr="250"
                building=""
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/barnhaus-gorani/01_barnhaus-gorani.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/barnhaus-gorani/00_barnhaus-gorani.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/barnhaus-gorani/cut/35_barnhaus-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/barnhaus-gorani/cut/11_barnhaus-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/barnhaus-gorani/cut/27_barnhaus-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/barnhaus-gorani/cut/03_barnhaus-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/barnhaus-gorani/cut/15_barnhaus-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Спроектировать дом и интерьер для сдачи в аренду."
              wishText="Есть участок с прекрасным видом на озеро Свирь. Нужно спроектировать дом в стиле Шале."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Первый этаж дома представляет собой общее безтупиковое пространство, из которого предусмотрено несколько выходов на террасу и зону для барбекю. Закарнизные подсветки, панорамное остекление, светлые натуральные тона отделки визуально расширяют помещение и создают ощущение полного погружения в природу.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/barnhaus-gorani/05_barnhaus-gorani.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/barnhaus-gorani/05_barnhaus-gorani.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/11_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/11_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/12_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/12_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Гостиная с камином и зона отдыха</h2>
              <div>
                <p className={styles.project__p}>Массивную грубоватую фактуру обеденного стола уравновешивают мягкие кресла. Камин немецкой мануфактуры Brunner , просматриваемый со стороны кухни и зоны отдыха наполняет дом уютом и является местом притяжения, чтобы уединиться или провести вечер за приятными разговорами.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/26_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/26_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/29_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/29_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/27_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/27_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/17_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/17_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/18_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/18_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__three_with_padding}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/13_barnhaus-gorani.webp"
                data-fancybox="gallery"
                className={styles.project__three_with_padding_fimg}
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/13_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/14_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/14_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/15_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/15_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Одним из ключевых решений для данного проекта стала кольцевая система передвижения. В центре кольца — лестница на второй этаж, заключённая в куб. Конструкция лестницы-куба зонирует и при этом не перегружает пространство. Благодаря такому решению планировка проста и логична. Перейти в любую зону можно двигаясь по кругу."
              />
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/19_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/19_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/28_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/28_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/30_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/30_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/16_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/16_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/21_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/21_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/20_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/20_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/22_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/22_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня с выходом на террасу</h2>
              <div>
                <p className={styles.project__p}>В интерьере комнаты для гостей предусмотрено всё для комфортного отдыха: кровать Minotti Tatlin Soft, встроенный шкаф и небольшая зона отдыха с мягким креслом. Прикроватные тумбы Minotti Lou на фоне правильной геометрии комнаты выглядят как оригинальный арт-объект.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/02_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/02_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/04_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/04_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_with_padding}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/03_barnhaus-gorani.webp"
                data-fancybox="gallery"
                className={styles.project__three_with_padding_fimg}
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/03_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/07_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/07_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/08_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/08_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/23_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/23_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/24_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/24_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/25_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/25_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мастер-спальня на мансардном этаже</h2>
              <div>
                <p className={styles.project__p}>Стены оттенка Half Mushroom, шпон светлых тонов, высокий потолок и два окна наполняют спальню хозяев воздухом и светом. Предусмотрено отдельное помещение для гардероба и места для макияжа, оборудованного лаконичным столиком выполненном по эскизам дизайнера.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/09_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/09_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/10_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/10_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>К спальне примыкает большой просторный санузел. Отделка стен выполнена керамогранитом. Дополнительный объем пространству создаёт зеркало, расположенное во всю стену с подсветкой по периметру.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/31_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/31_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/barnhaus-gorani/32_barnhaus-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/barnhaus-gorani/32_barnhaus-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Архитектурное решение дома</h2>
              <div>
                <p className={styles.project__p}>Нам удалось органично вписать современную архитектуру дома в природный ландшафт. Эстетика стиля Barnhouse  с простыми линиями, натуральные отделочные материалы в спокойных естественных тонах придают строению эффект полной погруженности в окружающую среду.  Участок находится в лесистой местности, где сезонные растения соседствуют с вечнозелеными. Осенью не будет ощущения пустоты от облетевших деревьев, а поздней весной и летом хозяева дома могут любоваться их пышным цветением.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/barnhaus-gorani/06_barnhaus-gorani.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/barnhaus-gorani/06_barnhaus-gorani.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/barnhaus-gorani/36_barnhaus-gorani.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/barnhaus-gorani/36_barnhaus-gorani.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>В качестве технологии строительства выбран принцип цельномонолитной конструкции. Это позволяет не только реализовать проект загородного дома за короткий срок, но и сделать его долговечным. Для кровли выбран износостойкий фальц, а стены утеплены каменной ватой.</p>
              <p className={styles.project__p}>Фасад облицован натуральными материалами: деревом и армированным керамогранитом.  Предусмотрен подъезд со стоянкой и крытым навесом для одного автомобиля. Рядом с домом оборудовано место для костра и смотровой площадкой с живописным видом на озеро.</p>
            </div>

            <a href="https://rhome.by/images/portfolio/barnhaus-gorani/33_barnhaus-gorani.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/barnhaus-gorani/33_barnhaus-gorani.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/barnhaus-gorani/34_barnhaus-gorani.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/barnhaus-gorani/34_barnhaus-gorani.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/barnhaus-gorani/35_barnhaus-gorani.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/barnhaus-gorani/35_barnhaus-gorani.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

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
                  src="../../../images/partners/daskitchen.jpg"
                  alt=""
                  />
                }
                text="Салон немецкой мебели" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/alutex.jpg"
                  alt=""
                  />
                }
                text="Алюминиевые профильные системы" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/brunner.jpg"
                  alt=""
                  />
                }
                text="Немецкие камины"
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
export default BarnhausGorani