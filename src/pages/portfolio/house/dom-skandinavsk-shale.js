import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana'

const DomSkandinavskshale = () => {
  return (
    <Layout>
      <Seo 
        title={"Загородный дом по мотивам скандинавских шале - RHOME"} description={"Загородный дом по мотивам скандинавских шале дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/dom-skandinavsk-shale"}
        image={"https://rhome.by/images/portfolio/dom-skandinavsk-shale/01_dom-skandinavsk-shale.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Загородный дом по мотивам скандинавских шале"
                leader="Сергей Рассеко"
                architector="Антон Захаров, Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="ноябрь 2018"
                metr="180"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-skandinavsk-shale/01_dom-skandinavsk-shale.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-skandinavsk-shale/00_dom-skandinavsk-shale.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSvetlana
              taskText="Разработать дизайн интерьера дома в стиле скандинавского шале."
              wishText="Мы часто путешествуем и зачастую отелям предпочитаем апартаменты, которые сдают местные жители. Поэтому в нашем доме у озера мы планируем сделать качественный ремонт, чтобы в дальнейшем сдавать его в аренду.
              Очень хочется по максимуму сохранить аутентичность постройки и дерево внутри, но в то же время интерьер должен выглядеть солидно и уютно."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Деревянный дом площадью 180 кв.м состоит из двух этажей. Весь первый этаж занимает просторная гостиная с дополнительным выходом на террасу, небольшая кухня и хозяйственные помещения. На втором этаже по проекту располагаются три больших спальни и санузел.Так как для заказчиков было крайне важно сохранить деревянные стены и подчеркнуть интерьером дома близость к природе, в отделке обошлись без экспериментов — стены тонировали маслом, а в выборе мебели сделали ставку на удобство и простые понятные формы.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/02_dom-skandinavsk-shale.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-skandinavsk-shale/02_dom-skandinavsk-shale.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>            
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/04_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/04_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/11_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/11_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Рустикальный интерьер гостиной</h2>
                <div>
                <p className={styles.project__p}>Центром гостиной, безусловно, является удобный угловой диван, рассчитанный на большую компанию. Зона отдыха тут ориентирована не на TV, как это бывает обычно, а на общение. Напротив дивана находятся камин и уютная столовая зона, а на массивном, несколько брутальном журнальном столике будет удобно играть в настольные игры компанией. Большое пространство требовало от автора работать «крупными мазками», поэтому объемная люстра в стиле кантри достойно вписались в эту стилистику. Основное функциональное назначение гостиной — это место, где гости смогут расслабиться и отдохнуть. Конечно, здесь не обошлось без камина. Каминную топку выбрали простую и несколько минималистичную, в стиле современных швейцарских шале.</p>
              </div>
            </div>           
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/03_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/03_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/05_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/05_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
            <ProjectConsultationSergey
                text="При ремонте арендного жилья очень важно сделать его быстро и с минимальными затратами. В данном случае деревянные стены существенно экономят бюджет, потому что их не нужно выравнивать, зашивать, шпатлевать, оклеивать. Дерево достаточно тонировать в нужный оттенок."
            />
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Компактная и минималистичная кухня</h2>
                <div>
                <p className={styles.project__p}>Небольшая кухня-столовая оборудована всем необходимым.За встроенными графитовыми фасадами спрятана вся нужная бытовая техника и утварь. Но главная «достопримечательность» этого помещения – большое окно и белоснежный подоконник из мрамора, в который встроена кухонная мойка. Мыть посуду, наслаждаясь видами роскошных пейзажей, – еще один отличный способ медитации.</p>
              </div>
            </div>           
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/06_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/06_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/07_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/07_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Ванная с видом из окна</h2>
                <div>
                <p className={styles.project__p}>Ванная комната выполнена в темных тонах, однако, тут также имеется существенный бонус в виде окна, поэтому недостатка света точно не будет. Для оформления мокрой зоны была выбрана широкоформатная плитка с текстурой мрамора, она выглядит очень эффектно в сочетании с натуральным светлым деревом.</p>
              </div>
            </div>           
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/08_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/08_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/09_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/09_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьеры гостевых спален</h2>
                <div>
                <p className={styles.project__p}>Все спальни выполнены достаточно аскетично, в них нет ничего лишнего, это, по сути, гостиничный вариант планировки: удобная кровать, небольшая зона отдыха и самый минимум систем хранения. Загородный дом невозможно себе представить без уютного текстиля и массивной деревянной мебели.</p>
                <p className={styles.project__p}>В качестве декора в этом проекте дизайнер выбрал оригинальные кованые светильники, мягкие пушистые ковры и подушки с орнаментом в стиле кантри. Все эти элементы служат единой цели: расслабить и настроить на отдых будущих гостей дома. В целом, в доме чувствуется мужской характер, однако он не лишен уюта и тепла, ведь предназначен для отдыха, единения с природой и встреч с друзьями.</p>
              </div>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/10_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/10_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/11_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/11_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/12_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/12_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/13_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/13_dom-skandinavsk-shale.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-skandinavsk-shale/14_dom-skandinavsk-shale.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-skandinavsk-shale/14_dom-skandinavsk-shale.jpg"
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
                  src="../../../images/partners/stonetech.jpg"
                  alt=""
                  />
                }
                text="Мастерская камня"
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
export default DomSkandinavskshale