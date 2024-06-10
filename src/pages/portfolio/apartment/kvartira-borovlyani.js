import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskDmitry } from '../../../subitems/project/task/project-task-dmitry'


const KvartiraBorovlyani = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в Боровлянах"} description={"Дизайн интерьера современной квартиры в Боровлянах от студии Rhome. 200+ работ в портфолио"}
        location={"https://rhome.by/portfolio/apartment/kvartira-borovlyani"}
        image={"https://rhome.by/images/portfolio/kvartira-borovlyani/01_kvartira-borovlyani.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#E3E2E9"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в Боровлянах"
                leader="Сергей Рассеко"
                architector="Вячеслав Сосин"
                manager="Дмитрий Разумейчик"
                data="март 2017"
                metr="70"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-borovlyani/01_kvartira-borovlyani.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-borovlyani/00_kvartira-borovlyani.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-borovlyani/cut/03_kvartira-borovlyani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-borovlyani/cut/10_kvartira-borovlyani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-borovlyani/cut/04_kvartira-borovlyani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-borovlyani/cut/08_kvartira-borovlyani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskDmitry
              taskText="Разработать дизайн интерьера в классическом стиле."
              wishText="Нам нужен в первую очередь функциональный дизайн. Квартира двухкомнатная и хочется максимально использовать каждый квадратный метр. Гостиную можно совместить с нашей спальней. Так как комната небольшая, мы не настаиваем на отдельной кровати, но подберите, пожалуйста, очень удобный раскладной диван."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Поскольку это дом панельный, кардинальную перепланировку мы делать не можем — основные стены несущие — это запрещено законом и здравым смыслом. Но, надо отдать должное, планировка и так оказалась приемлемой. Все, что мы сделали — построили перегородку в коридоре и получили гардеробную, которую, при необходимости, можно использовать как кладовую.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/02_kvartira-borovlyani.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-borovlyani/02_kvartira-borovlyani.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Светлые пудровые тона, большое зеркало и плитка в классической раскладке создают парадное настроение. Обрамляем входную дверь черной рамой, выделяем ее и визуально связываем с декором на полу. Чтобы еще больше намекнуть на классический стиль, предусматриваем симметричную композицию из консоли, зеркала и светильников.</p>
            </div>


            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/04_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/04_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/05_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/05_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Неоклассический интерьер кухни</h2>
                <div>
                <p className={styles.project__p}>Парадная кухня с красивым эркером приковывает внимание. Здесь продумана каждая деталь. Обратите снимание, что точечное освещение на потолке предусмотрено не просто так. Споты будут подсвечивать растения, создавая волшебную игру света и теней. Мы постарались сделать как можно больше систем хранения. Для двухкомнатной квартиры это особенно актуально.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/03_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/03_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/06_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/06_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Гостиная с функционалом спальни</h2>
                <div>
                <p className={styles.project__p}>Для гостиной выбрали тот же мягкий цвет, что и для кухни. Размещаем удобный диван, который будет служить хозяевам кроватью и организовываем «прикроватное» освещение. Роль прикроватных тумбочек будут выполнять журнальные столики.В комнате нашлось место большому шкафу и даже туалетному столику. Классическая люстра сливочного цвета эффектно дополнила основное стилистическое направление.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/07_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/07_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/08_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/08_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Классический интерьер детской</h2>
                <div>
                <p className={styles.project__p}>Детская, хоть и выполнена в классическом стиле, все же получилась яркой и с юмором. Нестандартная кровать-диван и большие картины задают особый ритм.  Эргономичная рабочая зона и большая система хранения призваны поддержать и сохранить порядок в комнате.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/10_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/10_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/11_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/11_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Ванная с мраморной мозаикой</h2>
                <div>
                <p className={styles.project__p}>Мозаика из шестиугольников под мрамор красиво сочетается с белой плиткой с серыми прожилками и классическими фасадами. Самое приятное в этой коллекции — местный производитель. У нашего «Керамина» попадаются достойные коллекции по приятной цене.</p>
              </div>
            </div>

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/12_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/12_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/13_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/13_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borovlyani/14_kvartira-borovlyani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borovlyani/14_kvartira-borovlyani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project_video}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/66iYVU8IG5o?si=83GZ8Q9RXBI72QV3" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
export default KvartiraBorovlyani