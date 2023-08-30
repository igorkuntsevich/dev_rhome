import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const KvartiraSkandinavsk = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Современная квартира с нотками скандинавского стиля"} description={"Современная квартира с нотками скандинавского стиля дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-skandinavsk"}
        image={"https://rhome.by/images/portfolio/kvartira-skandinavsk/01_kvartira-skandinavsk.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#E5DCD1"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Современная квартира с нотками скандинавского стиля"
                leader="Сергей Рассеко"
                architector="Антон Захаров, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="июнь 2018"
                metr="113"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-skandinavsk/01_kvartira-skandinavsk.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-skandinavsk/00_kvartira-skandinavsk.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Нам нужен светлый современный интерьер с элементами скандинавского стиля. Очень нравится белый цвет, дерево и мебель из слэбов. Также принципиально важно максимально сохранить вид из окна и впустить в помещение как можно больше природы и света."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Заказчики — молодая пара — поставили задачу сделать уютное современное пространство для жизни, в котором будет много света и натуральных экологичных материалов. Изначально планировка квартиры была свободная, поэтому окончательный вариант полностью проектировался дизайнером. Гостиная, совмещенная с кухней, удовлетворяла всем нуждам хозяев, а вот остальные комнаты необходимо было сделать изолированными. Чтобы организовать дома места для хранения двух велосипедов, пришлось значительно расширить и поменять расположение санузла и кладовой.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/02_kvartira-skandinavsk.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-skandinavsk/02_kvartira-skandinavsk.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/03_kvartira-skandinavsk.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-skandinavsk/03_kvartira-skandinavsk.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Легкая и минималистичная кухня</h2>
                <div>
                <p className={styles.project__p}>Лаконичная угловая кухня благодаря глухим матовым фасадам нежно-серого цвета выглядит легкой, буквально сливается с плоскостью стены, а встроенный аквариум отлично вписался и добавил помещению особое цветовое настроение. Фартук, столешница и пол в зоне готовки выполнены из качественного керамогранита с текстурой мрамора, который вкупе с деревянными элементами создает современный выдержанный образ.</p>
                <p className={styles.project__p}>Небольшой кухонный остров – особое пожелание владельцев квартиры. Тут пара планирует работать за ноутбуком, проводить время с книжкой и изредка завтракать. Стулья за барной стойкой — отдельная гордость: выполненные из массива дерева, они одновременно добавляют пространству индустриального характера и природной легкости.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/04_kvartira-skandinavsk.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-skandinavsk/04_kvartira-skandinavsk.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/05_kvartira-skandinavsk.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-skandinavsk/05_kvartira-skandinavsk.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>В просторной гостиной сосредоточено сразу несколько стилеобразующих центров</h2>
                <div>
                <p className={styles.project__p}>Это и современный высокотехнологичный биокамин Planika Fire Line, и необычный дизайнерский светильник Pulpo из тонированного стекла, и, конечно, особенная семейная ценность – белоснежное пианино. Пластиковый подоконник заменили на деревянный и значительно расширили, таким образом организовав небольшую уютную зону для отдыха и чтения.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/06_kvartira-skandinavsk.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-skandinavsk/06_kvartira-skandinavsk.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Чтобы отделить зону гостиной от кухни-столовой и при этом сохранить ощущение простора, архитекторы выстроили раздвижную стеклянную перегородку в металлическом корпусе. Она прекрасно зонирует единый большой объем, а при необходимости полностью прячется в стене.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/07_kvartira-skandinavsk.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-skandinavsk/07_kvartira-skandinavsk.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/08_kvartira-skandinavsk.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-skandinavsk/08_kvartira-skandinavsk.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Размещение санитарных узлов непосредственно над жилыми комнатами и кухнями не допускается по нормам. Но ТКП не запрещает поменять местами санузел и кладовую при условии, что у соседа снизу после перепланировки смежно с вашим санузлом не будет располагаться кухня либо жилая комната."
              />
          </div>
            <div className="line"></div>
            <h2 className={styles.project__title}>Паркет во всей квартире</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                <p className={styles.project__p}>Для отделки пола во всей квартире выбрали паркетную доску Coswick с выразительной текстурой — стильный акцент, который концептуально объединяет все помещения. Все системы хранения в квартире сделали закрытыми, чтобы оставить больше ровных поверхностей и чистых линий. Спальня — идеальное место для отдыха: нежные природные тона, обилие деревянных поверхностей и французские окна в пол дарят хозяевам ощущение покоя и комфорта.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/10_kvartira-skandinavsk.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-skandinavsk/10_kvartira-skandinavsk.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/09_kvartira-skandinavsk.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-skandinavsk/09_kvartira-skandinavsk.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Главные составляющие идеальной детской – правильное освещение и достаточное количество мест для хранения</h2>
                <div>
                <p className={styles.project__p}>Благодаря панорамным окнам в комнату проникает естественный свет, а кровать-домик, разработанная по эскизам дизайнера, имеет оптимальное количество шкафов и ящиков для хранения одежды, игрушек, и к тому же выглядит нескучно.</p>
                <p className={styles.project__p}>На просторной утепленной лоджии нашлось место для полноценного рабочего уголка и для комфортной lounge-зоны, где можно расслабиться, почитать книгу и насладиться отличным видом на город. А изящная мебель легендарного датского бренда BoConcept не только добавляет яркости сдержанному интерьеру, но и невероятно удобна в эксплуатации.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/11_kvartira-skandinavsk.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-skandinavsk/11_kvartira-skandinavsk.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/12_kvartira-skandinavsk.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-skandinavsk/12_kvartira-skandinavsk.jpg"
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
                  src="../../../images/partners/openini.jpg"
                  alt=""
                  />
                }
                text="Салон напольных покрытий и дверей" 
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
export default KvartiraSkandinavsk