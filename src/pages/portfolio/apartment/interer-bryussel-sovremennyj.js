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
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const IntererBryusselsovremennyj = () => {
  return (
    <Layout>
      <Seo 
        title={" Разработка дизайн-проекта современного интерьера квартиры в Брюсселе. Студия RНome"} description={"Современный стиль отличается утонченным минимализмом, осознанным использовании интересных фактур и четких линий. В таких интерьерах главным становится само пространство, а не вещи в нем."}
        location={"https://rhome.by/portfolio/apartment/interer-bryussel-sovremennyj"}
        image={"https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/01_interer-bryussel-sovremennyj.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Современный интерьер в Брюсселе"
                leader="Сергей Рассеко"
                architector="Ян Пашковский"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="98"
                building="6 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/interer-bryussel-sovremennyj/01_interer-bryussel-sovremennyj.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-bryussel-sovremennyj/00_interer-bryussel-sovremennyj.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/interer-bryussel-sovremennyj/cut/10_interer-bryussel-sovremennyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/interer-bryussel-sovremennyj/cut/15_interer-bryussel-sovremennyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/interer-bryussel-sovremennyj/cut/06_interer-bryussel-sovremennyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/interer-bryussel-sovremennyj/cut/21_interer-bryussel-sovremennyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать современный дизайн квартиры для сдачи в аренду."
              wishText="Мне нужен дизайн интерьера для двух квартир в Брюсселе. В этом районе живет творческая интеллигенция. Дизайн должен быть интересным и хорошо продуманным – будущие арендаторы наверняка будут с отличным вкусом. Обе квартиры должны быть с похожим функционалом, но разные по стилю. Одну хотелось бы видеть в стиле contemporary, вторую – в неоклассическом."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>При создании дизайн-проекта для этих апартаментов, мы ориентировались на пожелание заказчика – интерьер в стиле contemporary. Современный стиль отличается утонченным минимализмом, осознанным использовании интересных фактур и четких линий. В таких интерьерах главным становится само пространство, а не вещи в нем. Современный интерьер контрастирует с историческим фасадом здания. Получается интересный фьюжн – как раз для творческих людей.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/02_interer-bryussel-sovremennyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/interer-bryussel-sovremennyj/02_interer-bryussel-sovremennyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/23_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/23_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/24_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/24_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>В современных интерьерах действует правило “меньше значит больше”</h2>
              <div>
                <p className={styles.project__p}>В оформлении мы придерживались нейтральных цветов, сделали акцент на монохромном контрасте. Черный заземляет светлое, “воздушное” пространство и делает его более строгим. Нейтральные светлые стены – отличный фон для ярких аксессуаров и произведений искусства.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/03_interer-bryussel-sovremennyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/interer-bryussel-sovremennyj/03_interer-bryussel-sovremennyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/08_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/08_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/04_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/04_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>При создании дизайн-проекта мы выбирали мебель с гладкими, чистыми, геометрическими формами. В современных интерьерах поверхности в основном гладкие, но нарочитой искусственности принято избегать. Предпочтение – натуральным материалам: камню, дереву, текстилю.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/06_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/06_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/07_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/07_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Стол-остров с винным шкафом на кухне</h2>
              <div>
                <p className={styles.project__p}>В центре кухни стол-остров со встроенной варочной панелью и винным шкафом. Встроенная плита удобна тем, что можно общаться с гостями и членами семьи во время приготовления ужина. Отличный вариант для домашних вечеринок. Стол-остров сделан под черный камень, из этого же материала выполнен фартук на кухне. Похожий узор можно увидеть на ковре в зоне гостиной.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/09_interer-bryussel-sovremennyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/interer-bryussel-sovremennyj/09_interer-bryussel-sovremennyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/05_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/05_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/10_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/10_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationDmitry
                text="Когда обсуждаете пожелания по интерьеру квартиры с дизайнером, важно рассказать о стиле жизни и предпочтениях будущих жильцов. Даже если вы делаете ремонт квартиры под сдачу, стоит заранее обдумать, кто может жить в этой квартире. Это прояснит не только задачу дизайнеру, но и сделает квартиру более привлекательной для потенциальных арендаторов."
            />

<div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>В дизайне спален мы использовали нейтральные цвета</h2>
              <div>
                <p className={styles.project__p}>Мы отказались от контрастных элементов в пользу приглушенных оттенков и натуральных текстур. Также облегчили пространство у изголовья, разместив консоли вместо прикроватных тумбочек. Рядом с кроватью – небольшая кушетка. На нее удобно присесть, переодеваясь, или положить вещи.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/15_interer-bryussel-sovremennyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/interer-bryussel-sovremennyj/15_interer-bryussel-sovremennyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/16_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/16_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/17_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/17_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Такого же принципа придерживались в детской комнаты. Ее дизайн универсальный – здесь можно обустроить кабинет или гостевую спальню, если квартиру снимет пара без детей.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/21_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/21_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/22_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/22_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>В оформлении санузлов мы использовали широкоформатную плитку под камень и минималистичную мебель и сантехнику.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/18_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/18_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/19_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/19_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/20_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/20_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>



            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Как и в квартире в неоклассическом стиле, мы нашли место для постирочной, где можно сушить и гладить белье, не загромождая жилые комнаты.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/12_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/12_interer-bryussel-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/13_interer-bryussel-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-bryussel-sovremennyj/13_interer-bryussel-sovremennyj.jpg"
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
export default IntererBryusselsovremennyj