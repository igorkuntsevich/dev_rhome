import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey'
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'


const BitvaDizajnerovonliner = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера в рестро стиле 50х - RHOME"} description={"Дизайн интерьера в рестро стиле 50х для «Битвы дизайнеров onliner.by» от студии Rhome. 200+ работ в портфолио"}
        location={"https://rhome.by/portfolio/apartment/bitva-dizajnerov-onliner"}
        image={"https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/01_bitva-dizajnerov-onliner.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="«Битва дизайнеров» для Onliner"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="март 2016"
                metr="52"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/bitva-dizajnerov-onliner/01_bitva-dizajnerov-onliner.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/bitva-dizajnerov-onliner/00_bitva-dizajnerov-onliner.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/bitva-dizajnerov-onliner/cut/14_bitva-dizajnerov-onliner.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/bitva-dizajnerov-onliner/cut/09_bitva-dizajnerov-onliner.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/bitva-dizajnerov-onliner/cut/13_bitva-dizajnerov-onliner.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/bitva-dizajnerov-onliner/cut/04_bitva-dizajnerov-onliner.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Разработать дизайн интерьера в ретро стиле 50-x."
              wishText="Хочется побольше красного, можно немного бархата, паттернов и контрастных цветов. И чтобы вместе с мебелью получилось не больше 25 000$. А то я вас, дизайнеров, знаю!"
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Обратите внимание на исходную планировку. В ней практически нет прямых углов. Нам пришлось сильно постараться, чтобы выровнять геометрию и сделать из однокомнатной квартиры практически «трешку».В коридоре размещаем два вместительных шкафа, чтобы сезонная одежда и обувь не соседствовала с постельным бельем и чистыми вещами. Увеличиваем санузел и получаем ванную с отдельной душевой кабиной.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/02_bitva-dizajnerov-onliner.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/bitva-dizajnerov-onliner/02_bitva-dizajnerov-onliner.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Оставляем объединенную гостиную с кухней и делаем зону кинотеатра. Главная интрига прячется за экраном. В стену вмонтирована полноценная двуспальная кровать-невидимка. Замерив все до сантиметра, мы получили гостиную, кухню, спальню, кинотеатр, просторный санузел, систему хранения — и все это в «однушке»!</p>
            </div>


            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/03_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/03_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/12_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/12_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Стиль ретро в интерьере</h2>
                <div>
                <p className={styles.project__p}>Мягкий пуф, вешалка и сочная оранжевая стена вместе с контрастной плиткой — все это типичные черты ретро стиля 50х. Коридор получился достаточно длинным, поэтому, чтобы визуально укоротить его, мы использовали контрастную стеклянную перегородку.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/04_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/04_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/05_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/05_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>Поскольку вся квартира выполнена в ярких бескомпромиссных оттенках, для ванной мы выбрали мягкий бежевый цвет. Сочетание плитки и окрашенных стен — еще одна отличительная черта ретро стиля. Удачная планировка санузла — здесь поместилось все и даже больше: ванная, туалет, умывальник, душ и мини-кладовая.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/06_bitva-dizajnerov-onliner.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/bitva-dizajnerov-onliner/06_bitva-dizajnerov-onliner.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/07_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/07_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
                <div>
                <p className={styles.project__p}>Чтобы вписаться в бюджет, выбираем кухонный гарнитур от IKEA с филенчатыми фасадами и формируем настроение 50х бытовой техникой с дизайном той эпохи. Подсвечиваем стол кухонным светильником с лифтом. Его мягкий свет создает уютную, вечернюю обстановку. Обеденная зона со стульями прекрасно вписывается в интерьер.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/08_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/08_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/09_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/09_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Балкон с французским окном и барной стойкой. Оформляем выход на балкон французским окном. На балкон выносим барную стойку, укладываем контрастную плитку и добавляем реплику известного дизайнерского светильника. Оформляем выход на балкон французским окном.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/abitva-dizajnerov-onliner/10_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/10_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/11_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/11_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/12_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/12_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <ProjectConsultationSergey
                text="Глянец идеально подходит для узких помещений. Он расширяет пространство и добавляет интерьеру света. Поэтому в этом проекте мы закрыли ардеробные глянцевыми откатными фасадами."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Домашний кинотеатр в однушке</h2>
                <div>
                
                <p className={styles.project__p}>В гостиной на пол кладем ковер, ставим диван и мобильное кресло, добавляем группу из журнальных столиков. Для четкого изображения проектора и комфортного просмотра фильмов выкрашиваем зону кинотеатра в чёрный матовый цвет.</p>
             
                <p className={styles.project__p}>Трансформируемое пространство – основа удачной планировки однокомнатной квартиры. На окна вешаем шторы день-ночь. Делаем подиум и устилаем ковровым покрытием. Устанавливаем кровать-трансформер.</p>              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/13_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/13_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/14_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/14_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Ну вот уже хорошо, но осталось добавить акценты цвета и элементы того времени. Морковное кресло и изголовье кровати добавят настроение, картины — цветовые акценты, шторы и декоративные подушки свяжут элементы интерьера, а «бобинный» магнитофон добавит немного юмора. Еще раз критично оцениваем дизайн-проект квартиры и понимаем: у нас еще есть место для мобильного рабочего места! Откидной стол, складной стул с креплением на стене, меловая доска для записей.
Теперь все готово.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/15_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/15_bitva-dizajnerov-onliner.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/16_bitva-dizajnerov-onliner.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/bitva-dizajnerov-onliner/16_bitva-dizajnerov-onliner.jpg"
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
export default BitvaDizajnerovonliner