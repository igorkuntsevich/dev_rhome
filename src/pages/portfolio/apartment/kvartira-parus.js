import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectConsultationDmitry } from '../../../subitems/project/consultation/project-consultation-dmitry'


const KvartiraParus = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в Парусе"} description={"Квартира в ЖК Парус дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-parus"}
        image={"https://rhome.by/images/portfolio/kvartira-parus/01_kvartira-parus.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в ЖК Парус"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="ноябрь 2018"
                metr="116"
                building="10 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-parus/01_kvartira-parus.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-parus/00_kvartira-parus.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Нам нравятся современные квартиры в нью-йоркском стиле, с дорогой качественной мебелью и большим количеством свободного пространства внутри. Предпочитаем темные интерьеры с мягкой подсветкой и отраженным светом, поэтому люстр должно быть по минимуму. Отделочные материалы — исключительно натуральные: дерево, стекло, металл."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка без прямых углов</h2>
              <div>
              <p className={styles.project__p}>Этот объект — уникальный в своем роде. Главная особенность планировки квартиры состоит в том, что в ней практически нет прямых углов. Поэтому логичным решением дизайнера стало намерение эффектно обыграть этот нюанс и сделать его «фишкой» всего интерьера: придать помещению еще больше динамики, добавив дополнительные радиусные элементы.</p>
                <p className={styles.project__p}>Оpen space занимает значительную часть квартиры, общая площадь которой составляет 116 кв. метров. Поэтому для заказчика было принципиально, чтобы прямо со входа можно было увидеть весь объем помещения. Решением стала ширма из широких шпонированных реек. Такая конструкция функционально отделяет, но при этом не загромождает пространство.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-parus/02_kvartira-parus.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-parus/02_kvartira-parus.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-parus/07_kvartira-parus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-parus/07_kvartira-parus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-parus/10_kvartira-parus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-parus/10_kvartira-parus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Квартира в духе Нью-Йорка</h2>
              <div>
              <p className={styles.project__p}>Планировка на нью-йоркский манер — это много открытого пространства, где кухня плавно перетекает в столовую, столовая — в гостиную, а из гостиной можно попасть уже в приватные зоны.</p>
                <p className={styles.project__p}>Вся гостиная разделена на несколько обозначенных зон: есть TV-зона с большим удобным диваном, зона отдыха с современным биокамином, просторная столовая и функциональная кухня.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-parus/06_kvartira-parus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-parus/06_kvartira-parus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-parus/09_kvartira-parus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-parus/09_kvartira-parus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__bigmargin}>
            <ProjectConsultationDmitry
                text="В основе успеха любого проекта — правильная организация пространства. Именно на работе с пространством изначально должен строиться интерьер. Мебель, декор — лишь дополнение. Они не являются основой дизайна и легко меняются в зависимости от настроения."
            />
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Цветовая палитра интерьера квартиры базируется на разнообразных оттенках натурального дерева: от контрастного темно-коричневого до песочного.</p>
            <p className={styles.project__p}>Отличительная особенность здания — сплошное панорамное остекление по всему периметру квартиры — большая удача для дизайнера. Такие конструкции открывают неповторимый вид на город, придают помещению эксклюзивность и обеспечивают пространство максимальным количеством света.</p>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-parus/03_kvartira-parus.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-parus/03_kvartira-parus.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-parus/08_kvartira-parus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-parus/08_kvartira-parus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-parus/11_kvartira-parus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-parus/11_kvartira-parus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Если присмотреться, можно увидеть, что в квартире практически нет гладких стен. Каждая поверхность — это какая-то фактура: деревянные стеновые панели, шпонированные рейки, металлизированные плинтусы и декоративные элементы, встроенная мебель. Дизайнеру было важно сделать интересное пространство, которое было бы любопытно рассматривать из любой точки.</p>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мраморный стол "вырастает" из несущей колонны</h2>
              <div>
              <p className={styles.project__p}>Визуальным центром квартиры стала просторная столовая. Несущую колонну не стали прятать, а, наоборот, сделали акцентом всего помещения. Большой обеденный стол из массивного куска мрамора будто вырастает из колонны, являясь ее необычным продолжением. Стулья, изготовленные из прозрачного пластика, не загромождают пространство и добавляют интерьеру еще больше изысканности и утонченности.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-parus/04_kvartira-parus.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-parus/04_kvartira-parus.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/kvartira-parus/05_kvartira-parus.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-parus/05_kvartira-parus.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-parus/12_kvartira-parus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-parus/12_kvartira-parus.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-parus/13_kvartira-parus.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-parus/13_kvartira-parus.jpg"
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
                  src="../../../images/partners/asteya.jpg"
                  alt=""
                  />
                }
                text="Современные электроустановочные изделия" 
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
                  src="../../../images/partners/rode.jpg"
                  alt=""
                  />
                }
                text="Салон штор и текстиля" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/viridian.jpg"
                  alt=""
                  />
                }
                text="Студия интерьеров" 
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
export default KvartiraParus