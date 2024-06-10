import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskDmitry } from '../../../subitems/project/task/project-task-dmitry'
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'


const MalesuadaFames = () => {
  return (
    <Layout>
      <Seo 
        title={"Дом в скандинавском стиле - RHOME"} description={"Дом в скандинавском стиле дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/malesuada-fames"}
        image={"https://rhome.by/images/portfolio/malesuada-fames/01_malesuada-fames.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#DFE3E4"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом в скандинавском стиле"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Вячеслав Сосина"
                manager="Дмитрий Разумейчик"
                data="март 2014"
                metr="600"
                building="24 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/malesuada-fames/01_malesuada-fames.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/malesuada-fames/00_malesuada-fames.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
          <div className={styles.project__bigmargin}>
            <ProjectTaskDmitry
              taskText="Разработать дизайн-проект дома в скандинавском стиле."
              wishText="Мне нужен светлый современный интерьер без всяких наворотов. Обязательно используйте натуральное дерево и много белого цвета. Материалы хотелось бы видеть натуральные, не люблю имитацию."
            />
            </div>
          <div className={styles.project__leftimage_righttext + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/02_malesuada-fames.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/02_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>В этом проекте мы работали над дизайном интерьера для огромного одноэтажного дома с хорошей архитектурой и современным фасадом. Площадь позволяла разместить все необходимое без сноса стен и возведения новых, поэтому архитектор решил оставить планировку, как есть. Единственным нюансом были шестиметровые потолки в гостиной. Об этом подробнее.</p>
              </div>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мореное дерево на фасаде дома</h2>
                <div>
                <p className={styles.project__p}>Фасад дома выполнен с использованием реек мореного дерева, которые заходят в холл и служат элементами интерьера. Радиаторы в тамбуре — дизайнерские. В доме длинные холлы в традициях минимализма. Главная идея дизайн-проекта этого дома: минимум деталей — максимум технологий. Двери в алюминиевых коробках контрастного темного цвета придают интерьеру выразительной лаконичности.</p>
              </div>
            </div>        
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/17_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/17_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/18_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/18_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/19_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/19_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/20_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/20_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/21_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/21_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Как скрыть высоту потолков?</h2>
                <div>
                <p className={styles.project__p}>Высота потолков в 6 метров хоть и эффектная, но не самая уютная для жилого помещения. Чтобы визуально скрыть высоту, но при этом подчеркнуть архитектуру помещения, дизайнер решил использовать балки из натурального темного дерева.</p>
                <p className={styles.project__p}>Большая зона гостиной граничит с гаражом, где могут стоять 4 машины. Панорамное остекление гаража не закрывает прекрасный вид на лес. А благодаря стеклянной перегородке с алюминиевыми жалюзи между гостиной и гаражом в помещении открывается вид на природу сразу с двух сторон.</p>
              </div>
            </div>  
            <a href="https://rhome.by/images/portfolio/malesuada-fames/03_malesuada-fames.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/malesuada-fames/03_malesuada-fames.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a> 
            <a href="https://rhome.by/images/portfolio/malesuada-fames/04_malesuada-fames.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/malesuada-fames/04_malesuada-fames.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a> 
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Авангардный интерьер гостиной</h2>
                <div>
                <p className={styles.project__p}>Главный «герой» в гостиной — камин от компании Eurofocus. Его можно поворачивать в любую сторону. Заметьте, в зоне гостиной нет традиционной люстры, но света при этом более чем достаточно. Огромные окна — главное достоинство этого интерьера. Нам оставалось лишь грамотно обыграть их ненавязчивым декором</p>
                <p className={styles.project__p}>В этом же пространстве находится столовая зона с элементами эко-стиля. Как думаете декор на стене — это плитка или образец современного искусства? Правильный ответ — новая дизайнерская плитка от Imola Ceramica.</p>
              </div>
            </div>        
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/05_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/05_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/06_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/06_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
            <ProjectConsultationSergey
                text="Так как осветить большое пространство одним светильником невозможно, свет должен быть многоуровневым и направленным. При выборе осветительных приборов стоит также помнить, что они будут сильно удалены от освещаемой области и мощность их должна быть соответствующая."
            />
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Большая функциональная и оригинальная кухня спрятана за перегородкой. Пространство настолько большое, что туда с легкостью поместился обеденный стол на четыре персоны. Идеально для завтрака в кругу самых близких.</p>
            </div>
            <a href="https://rhome.by/images/portfolio/malesuada-fames/07_malesuada-fames.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/malesuada-fames/07_malesuada-fames.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a> 
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Геометрический стеллаж в кабинете</h2>
                <div>
                <p className={styles.project__p}>Роскошное помещение для комфортной работы и проведения переговоров. Кабинет выполнен с использованием темных древесных фактур. Акцентные стены выкрашены в глубокий синий оттенок. Мебель кожаная. При наличии чертежей эффектный стеллаж элементарно можно изготовить на заказ у опытного мастера.</p>

              </div>
            </div>        
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/12_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/12_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/13_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/13_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьеры спален</h2>
                <div>
                <p className={styles.project__p}>Спальню сделали в современном минималистичном стиле. Гранатовый куб, в котором прячется вместительная гардеробная, мы подсветили светодиодной лентой и моментально превратили его в арт-объект.</p>

              </div>
            </div>  
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/14_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/14_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/15_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/15_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/16_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/16_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Основной акцент в гостевой спальне на стенах и дизайнерском светильнике. В гостевой спальне заказчики хотели добавить бетонную текстуру, но в итоге остановились на обоях, которые имитируют распалубленную стену. Современная большая кровать с удобными тумбочками и прямым смягченным изголовьем добавляет уюта.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/10_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/10_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/11_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/11_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>SPA и отдельная ванная для детей</h2>
                <div>
                <p className={styles.project__p}>Ванная комната и SPA-зона недалеко от гостиной выполнены с использованием природных материалов, камня и стекла. Стекло сделали тонированное, чтобы можно было одновременно принимать душ и ванну.</p>

              </div>
            </div>        
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/08_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/08_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/09_malesuada-fames.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/09_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__leftimage_righttext + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/malesuada-fames/22_malesuada-fames.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/malesuada-fames/22_malesuada-fames.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>В этом доме есть отдельный детский санузел. Детский санузел решили выполнить в светлых тонах и добавить акцентов в виде мебели из темного дерева. Все элементы и пропорции подогнали под нужный рост.</p>
              </div>
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
                  src="../../../images/partners/gira.jpg"
                  alt=""
                  />
                }
                text="Розетки и выключатели"
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
                  src="../../../images/partners/krea.jpg"
                  alt=""
                  />
                }
                text="Салон обоев" 
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
export default MalesuadaFames