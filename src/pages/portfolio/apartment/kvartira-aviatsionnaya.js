import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const KvartiraAviatsionnaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира на Авиационной"} description={"Квартира на ул. Авиационная от дизайн студии «Rhome.by» - качественная работа, прозрачные условия, фото портфолио, 200+ успешных проектов"}
        location={"https://rhome.by/portfolio/apartment/kvartira-aviatsionnaya"}
        image={"https://rhome.by/images/portfolio/kvartira-aviatsionnaya/01_kvartira-aviatsionnaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира на Авиационной"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="август 2017"
                metr="80"
                building="6 месяцев"
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-aviatsionnaya/01_kvartira-aviatsionnaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-aviatsionnaya/00_kvartira-aviatsionnaya.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-aviatsionnaya/cut/11_kvartira-aviatsionnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-aviatsionnaya/cut/16_kvartira-aviatsionnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-aviatsionnaya/cut/12_kvartira-aviatsionnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-aviatsionnaya/cut/09_kvartira-aviatsionnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-aviatsionnaya/cut/05_kvartira-aviatsionnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Сделать квартиру в современном стиле."
              wishText="Хотим светлую квартиру в современном стиле. В этой квартире в основном будут жить родители, но так как мы сами будем приезжать периодически, нужно организовать две спальни: функциональную и простую — для нас, более классическую — для родителей. Также хотелось бы просторный санузел с ванной и душевой."
            />

          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Мы получили в свое распоряжение пространство в 80 кв. м. и владельцев, которые поставили задачу сделать максимально простой, не перегруженный деталями интерьер квартиры в современном стиле. Планировку сильно менять не пришлось, но все же небольшие изменения были внесены: за счет коридора значительно расширили санузел и убрали проход на кухню, чтобы получить полноценную закрытую столовую зону.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/02_kvartira-aviatsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-aviatsionnaya/02_kvartira-aviatsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Светлый и свободный холл</h2>
                <div>
                <p className={styles.project__p}>Несмотря на то, что холл является проходным помещением, его дизайн задает общую концепцию стилистики всей квартиры: светлые тона, минимум деталей, максимум свободного пространства. Не забыли и про функциональность: рядом с входной дверью расположился небольшой шкаф для верхней одежды и компактная галошница.</p>
                <p className={styles.project__p}>В качестве напольного покрытия был выбран недорогой, но надежный керамогранит российского производства с текстурой песочного сланца. На стенах — светлые обои, которые исполняют роль нейтрального фона во всей квартире.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/bkvartira-aviatsionnaya/03_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/03_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/04_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/04_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>В гостиной прослеживается «шведская» тема</h2>
                <div>
                <p className={styles.project__p}>Здесь много дерева, белые стены, прямые линии. Однако назвать интерьер полностью скандинавским сложно. Например, свет тут использован в основном технический, а потолочные карнизы выполнены в стиле ар-деко.</p>
                <p className={styles.project__p}>В центре композиции простой и комфортный диван с текстильной обивкой, исполненный под заказ. Пепельно-розовое кресло в углу акцентно разбавляет более спокойную основную цветовую гамму помещения.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/bkvartira-aviatsionnaya/05_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/05_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/06_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/06_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Много внимания уделено освещению</h2>
                <div>
                <p className={styles.project__p}>Основной источник света — трековые светильники, которые за счет разнонаправленного светового потока визуально увеличивают небольшую гостиную. Средний ярус обеспечивает торшер, а зону TV выделяет отраженный линейный свет, созданный при помощи светодиодной ленты, встроенной в карниз.</p>
                <p className={styles.project__p}>На случай необходимости разделения пространства кухни и гостиной предусмотрели систему раздвижных дверей. Откатные полотна в цвете карамельный дуб выполняют не только функцию зонирования, но и являются цветовым акцентом в светлом интерьере.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/bkvartira-aviatsionnaya/07_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/07_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/08_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/08_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Большая угловая кухня выполнена из двух материалов: крашеный МДФ и шпон. Она вмещает в себе всю необходимую технику и утварь и по-максимуму использует все возможное рабочее пространство.</p>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Круглый стол — это прекрасное решение для небольшого помещения</h2>
                <div>
                <p className={styles.project__p}>На кухне также удалось расположить полноценную обеденную зону на 4 персоны. нет углов, а, значит, размещение гостей будет более комфортным, а передвижение вокруг стола — безопасным.</p>
                <p className={styles.project__p}>Акцент в столовой зоне было решено сделать на эффектном подвесном светильнике — реплике дизайнерской люстры Cosmorelax.</p>
              </div>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/09_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/09_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/10_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/10_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/11_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/11_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <ProjectConsultationAlexey
                text="Гостиная в светлых тонах считается классическим вариантом независимо от стиля всего помещения. Однако, делая светлый интерьер, постарайтесь найти контрасты, которые помогут придать интерьеру выразительную графичность и сделать его более живым."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня хозяев выполнена в традиционном стиле</h2>
                <div>
                <p className={styles.project__p}>Тут использованы теплые, спокойные тона (персик и приглушенный оранж), которые не нарушают гармонию семейного отдыха. Обои с флористическим рисунком способствуют созданию уюта в интерьере, рождая приятные ассоциации с летним садом, природой, теплым воздухом.</p>
                <p className={styles.project__p}>В комнате нашлось место и для компактного туалетного столика, и для небольшой зоны для отдыха, где можно расслабиться и почитать книгу.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/bkvartira-aviatsionnaya/12_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/12_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/13_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/13_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/15_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/15_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/16_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/16_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/17_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/17_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Так как заказчики не планируют жить в квартире постоянно, во второй спальне вместо кровати разместили диван с раскладывающимся спальным местом. Рабочий стол с навесной тумбой под TV и шкафы выполнены в строгом кабинетном стиле по эскизам дизайнера.</p>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/18_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/18_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/19_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/19_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/20_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/20_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>На балконе организовали сезонную рабочую зону</h2>
                <div>
                <p className={styles.project__p}>Стандартный подоконник заменили на белоснежную столешницу из постформинга и дополнили лаконичными барными стульями. На окнах — рольшторы для комфортной работы за компьютером в дневное время.</p>
                <p className={styles.project__p}>По просьбе заказчиков санузел был значительно расширен за счет перепланировки. В итоге мы получили просторное, светлое помещение, где легко удалось разместить все необходимое, и даже больше: вместительную душевую, угловую ванну, тумбу с умывальником и стиральной машиной, подвесной унитаз с инсталляцией.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/bkvartira-aviatsionnaya/21_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/21_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/22_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/22_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Комбинация двух текстур плитки под мрамор в песочных тонах подчеркивает площадь помещения и продолжает стилистику, заданную в других комнатах. Благодаря перепланировке душевую кабину удалось удачно вписать в свободную нишу, а не использовать отдельно стоящую. На полу в душе вместо керамического поддона — трап из плитки, который не выбивается из стилистики всего помещения и смотрится стильно и гармонично.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/bkvartira-aviatsionnaya/23_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/23_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-aviatsionnaya/24_kvartira-aviatsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-aviatsionnaya/24_kvartira-aviatsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project_video + " " + styles.project__bigmargin}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HUNoQKciEFU?si=Akb61dJuYsQcBtG2" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                  src="../../../images/partners/krea.jpg"
                  alt=""
                  />
                }
                text="Салон обоев" 
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
export default KvartiraAviatsionnaya