import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana'

const KvartiraUyutnaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в стиле «уютный минимализм»"} description={"Квартира в стиле «уютный минимализм» дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-uyutnaya"}
        image={"https://rhome.by/images/portfolio/kvartira-uyutnaya/01_kvartira-uyutnaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в стиле «уютный минимализм»"
                leader="Сергей Рассеко"
                architector="Антон Захаров, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="сентябрь 2018"
                metr="114"
                building="10 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-uyutnaya/01_kvartira-uyutnaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-uyutnaya/00_kvartira-uyutnaya.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-uyutnaya/cut/13_kvartira-uyutnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-uyutnaya/cut/12_kvartira-uyutnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-uyutnaya/cut/10_kvartira-uyutnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-uyutnaya/cut/09_kvartira-uyutnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-uyutnaya/cut/06_kvartira-uyutnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSvetlana
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Нам нравятся интерьеры, в которых много света, воздуха и свободного пространства, своеобразный «уютный минимализм». Конечно, вещей у нас хватает, но для них нужно организовать отдельные закрытые системы хранения, которые не будут захламлять комнаты."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Хозяева этой квартиры — большие ценители комфорта. Для них было очень важно, чтобы пространство подходило как для уединения и отдыха, так для общения с семьей и друзьями.</p>
                <p className={styles.project__p}>В итоге 114 кв. м свободной планировки вместили в себя все необходимые помещения для комфортной жизни молодой семьи: просторную гостиную и кухню со столовой зоной, где можно с удобством принимать гостей, небольшую спальню с выходом на лоджию, удобную детскую и два санузла с кладовой.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/02_kvartira-uyutnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-uyutnaya/02_kvartira-uyutnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/03_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/03_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/04_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/04_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Гармоничное пространство без явных акцентов и мягкими переходами рельефа</h2>
                <div>
                <p className={styles.project__p}>Заказчики сразу четко сформулировали свои предпочтения: молодым, энергичным хозяевам дома нравятся естественные оттенки дерева и текстура мрамора, светлые и просторные, не загроможденные лишними предметами помещения. В итоге кухня-гостиная стала воплощением этих пожеланий. Гладкая белая поверхность из итальянского керамогранита Atlas Concorde удачно контрастирует с противоположной стеной, покрытой темным шпоном. Минимум рельефа, никаких явных акцентов, одна фактура перетекает в другую — это цельное гармоничное пространство для приятного времяпрепровождения, в котором ничто не отвлекает взгляд.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/05_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/05_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/06_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/06_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Спокойный, выдержанный образ гостиной дополняют изысканные предметы интерьера итальянских фабрик. Например, треугольный журнальный столик Minotti, идеально повторяющий своими плавными линиями планировку комнаты. Или высокий минималистичный торшер Sampei фабрики Davide Groppi, основание которого наклоняется в любую сторону, – стильный и необходимый акцент в случае нехватки направленного света.</p>
            <p className={styles.project__p}>В приличном по объему пространстве гостиной и кухни требовалось визуальное разделение этих двух зон. Задачу решили с помощью выступающего острова из камня, о котором уже давно мечтала хозяйка квартиры. Он эргономично совмещает в себе дополнительное рабочее место с подстольными ящиками для хранения кухонной утвари.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/07_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/07_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/08_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/08_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Подвесные светильники в обеденной зоне и островной части кухни, несмотря на свою декоративность, решены минималистично. Над островом – суперсовременная система освещения Infinity на основе компактного трека, которая позволяет легко менять расположение и направление источников света. Прихожая получилась достаточно компактная, нестандартной формы. Сюда выходит сразу несколько дверей, поэтому, чтобы не привлекать к ним лишнего внимания, полотна на скрытой коробке установили высокие, от пола до потолка.</p>
            </div>
            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Вертикальное расширение окна, выходящего на лоджию (увеличение оконного проема вниз) – популярное дизайнерское решение, согласование которого, как правило, не вызывает проблем. Но стоит помнить о том, что могут быть архитектурные и конструктивные ограничения. Прежде, чем осуществить этот прием в своей квартире, обратитесь за консультацией к специалистам."
              />
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Минималистичная спальня с "парящей" кроватью</h2>
                <div>
                <p className={styles.project__p}>В спальне сделали ставку на сдержанную отделку, которая еще долго будет в тренде: белые стены и контрастные шпонированные панели теплых оттенков. В центре комнаты – минималистичная двуспальная кровать, каркас которой стоит на практически незаметных металлических ножках, благодаря чему создается визуальный эффект «парения». В небольшом помещении нет ничего лишнего, только самое необходимое для отдыха и спокойного сна. За раздвижной дверью – выход на утепленную лоджию, здесь оборудовано небольшое рабочее место и туалетный столик для хозяйки.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/09_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/09_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/10_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/10_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Весь санузел выложен итальянским керамогранитом с текстурой мрамора в двух цветах. На фоне монохромных стен ярким акцентом стала стильная композиция из подвесной цельнокорпусной раковины, парных зеркал и оригинальных подвесных светильников.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/11_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/11_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/12_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/12_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер комнаты для будущих детей</h2>
                <div>
                <p className={styles.project__p}>Предполагается, что эта комната в будущем станет детской, поэтому интерьер создавали на вырост для двух детей дошкольного возраста. Светлый серо-бежевый оттенок стен подойдет ребенку любого пола, а пока при необходимости хозяева смогут использовать эту комнату как гостевую.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/13_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/13_kvartira-uyutnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-uyutnaya/14_kvartira-uyutnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-uyutnaya/14_kvartira-uyutnaya.jpg"
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
                  src="../../../images/partners/moon.jpg"
                  alt=""
                  />
                }
                text="Интерьерный шоу-рум мебели и света" 
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
export default KvartiraUyutnaya