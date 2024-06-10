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


const DomMozyr = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера дома в Мозыре - RHOME"} description={"Современный дизайн интерьера дома в Мозыре от студии Rhome. Было/стало, чертежи, 3D проекты"}
        location={"https://rhome.by/portfolio/house/dom-mozyr"}
        image={"https://rhome.by/images/portfolio/dom-mozyr/01_dom-mozyr.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Современный интерьер дома в Мозыре"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="сентябрь 2016"
                metr="250"
                building="14 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/dom-mozyr/01_dom-mozyr.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-mozyr/00_dom-mozyr.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-mozyr/cut/04_dom-mozyr.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-mozyr/cut/03_dom-mozyr.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/dom-mozyr/cut/21_dom-mozyr.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/dom-mozyr/cut/15_dom-mozyr.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/dom-mozyr/cut/11_dom-mozyr.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать интерьер дома в современном стиле."
              wishText="Нужен дизайн дома площадью 250 кв.м. в современном стиле. Материалы нравятся благородные и натуральные: дерево, стекло, металл. 
              Бюджет: 100 000 — 120 000 $. Главное и единственное жесткое условие — «парящая» лестница. В остальном полностью доверяю профессионалам."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin + " " + styles.project__narrow_block}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/02_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/02_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/20_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/20_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Роскошь мексиканских особняков и калифорнийских вилл середины 20 века</h2>
                <div>
                <p className={styles.project__p}>Нам достался дом с грамотной архитектурой и удобной планировкой, поэтому решаем оставить все, как есть.</p>
                <p className={styles.project__p}>Стеновые панели из ореха, выступающие дверные порталы, сдержанная графика потолка, большое зеркало и арт-объекты — все это дает полное представление о доме в целом. Для дизайн-проекта дома выбрали премиум-материалы, чтобы подчеркнуть статус и состоятельность хозяина. Проходим в гостиную.</p>
              </div>
            </div>
          
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/11_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/11_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/18_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/18_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Обеденная группа как произведение искусства</h2>
                <div>
                <p className={styles.project__p}>Изначально столовая зона планировалась в маленьком помещении с небольшим окном за кухней. Архитектор предложил перенести ее в гостиную. Во-первых, сама обеденная группа — практически произведение искусства. Во-вторых, самая уютная и гостеприимная зона просто обязана располагаться в просторном светлом помещении.</p>
              </div>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/12_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/12_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/04_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/04_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/05_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/05_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <ProjectConsultationSergey
                text="Если хочется добавить статусности помещению, время от времени просматривайте онлайн-аукционы и галереи, работающие с молодыми художниками. И вам обязательно повезет приобрести стоящий предмет искусства по приемлемой цене."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Скульптуры создавались специально для этого проекта</h2>
                <div>
                <p className={styles.project__p}>А вот и лестница. Парящие ступени, закаленное стекло вместо перил и подсветка, превращают функциональный элемент в предмет искусства.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/06_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/06_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/03_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/03_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>На месте бывшей столовой делаем кладовую, чтобы спрятать технику, бытовую химию и продуктовые запасы.</p>
            </div>
            
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/08_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/08_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/10_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/10_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Плитка на полу в спальне – хорошая идея?</h2>
                <div>
                <p className={styles.project__p}>Обратите внимание на пол. Вы бы рискнули положить плитку в спальне? Тем временем именно такое напольное покрытие придает помещению брутальность. К тому же, все полы в доме «теплые», а значит, и ходить по ним будет приятно.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/16_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/16_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/13_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/13_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>В интерьере не бывает мелочей. Даже решетки вентиляции выполнены из полированного металла. Согласитесь, стандартные белые «заглушки» моментально разрушили бы весь образ.</p>
              <p className={styles.project__p}>Доминанта спальни — стеклянный гардероб с подсветкой. Он визуально увеличивает пространство и выгодно контрастирует с классическими материалами.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/14_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/14_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/15_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/15_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Союз мрамора и металла в ванной комнате</h2>
                <div>
                <p className={styles.project__p}>Нетривиальное сочетание фактуры и цвета выделяет это помещение среди других. Мрамор и окисленный металл отлично сочетаются.</p>
                <p className={styles.project__p}>Гостевой санузел отделываем простыми недорогими материалами. При этом помещение не выбивается из общего стиля.</p>
              </div>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/24_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/24_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/21_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/21_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/22_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/22_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Бесконечный коридор</h2>
                <div>
                <p className={styles.project__p}>Зеркало во всю стену дает ощущение бесконечности, а «невидимые» двери не дробят пространство.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/19_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/19_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-mozyr/17_dom-mozyr.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-mozyr/17_dom-mozyr.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Дом расположен у пыльной дороги, поэтому было решено внедрить мощную систему вентиляции. С ней можно не открывать окна — воздух всегда будет свежим.</p>
              <p className={styles.project__p}>А теперь вспомните, заметили ли вы громоздкую конструкцию, пока рассматривали фото проекта? Короба, грамотно вписанные в общую композицию интерьера, не давят и не привлекают лишнего внимания.</p>
            </div>

            <div className={styles.project_video + " " + styles.project__bigmargin}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bs1psxlJ8Oc" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
export default DomMozyr