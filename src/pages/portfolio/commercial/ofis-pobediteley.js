import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const OfisPobediteley = () => {
  return (
    <Layout>
      <Seo 
        title={"Офис на Победителей - RHOME"} description={"Офис на Победителей дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/commercial/ofis-pobediteley"}
        image={"https://rhome.by/images/portfolio/ofis-pobediteley/01_ofis-pobediteley.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Офис на Победителей"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="194"
                building=""
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/ofis-pobediteley/01_ofis-pobediteley.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-pobediteley/00_ofis-pobediteley.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/ofis-pobediteley/cut/04_ofis-pobediteley.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/ofis-pobediteley/cut/16_ofis-pobediteley.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/ofis-pobediteley/cut/03_ofis-pobediteley.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/ofis-pobediteley/cut/14_ofis-pobediteley.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/ofis-pobediteley/cut/13_ofis-pobediteley.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать интерьер современного офиса."
              wishText="Мы хотим работать в современном и стильном пространстве, где будет комфортно нашим сотрудниками. Хочется уйти от стиля, в котором делали офисы в 90-х и 2000-х. Для нас важно, чтобы офис стал нашей визитной карточкой и рассказывал о наших ценностях клиентам и партнерам."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Идея — создать визуально чистое пространство</h2>
              <div>
              <p className={styles.project__p}>Палитру выбрали приглушенную, в естественных оттенках камня и дерева. Атмосфера все же должна оставаться рабочей, поэтому все поверхности имеют гладкую текстуру, а линии соприкосновения разных материалов выверенные и четкие.</p>
              </div>
            </div>
             <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/04_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/04_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/05_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/05_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__leftimage_righttext + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/02_ofis-pobediteley.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/02_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>За вдохновением в этом проекте мы обратились к скандинавскому стилю. Главные принципы этого направления в дизайне — функциональность, простота и четкость линий. Поэтому в этом проекте мы работали с простыми геометрическими формами.</p>
              </div>
            </div>
            
            <div className="line"></div>
            <h2 className={styles.project__title}>Основная цель скандинавского дизайна — улучшить качество повседневности</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>В скандинавских интерьерах всегда присутствует тесная связь между элементами дизайна и природой. Это можно заметить по контрасту между абстрактными и естественными формами, а также твердыми и мягкими поверхностями и материалами. Человек всегда должен находится в гармонии с окружением.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/ofis-pobediteley/07_ofis-pobediteley.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/ofis-pobediteley/07_ofis-pobediteley.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/06_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/06_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/10_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/10_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/12_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/12_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/13_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/13_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <ProjectConsultationAlexey
                text="Популярное решение open space подходит не всем. Альтернатива — стеклянные стены или частичное остекление стен. Так можно достичь баланса между камерностью и открытостью, и при этом сделать дизайн офиса более интересным."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Стильный акцент — дизайнерские светильники</h2>
              <div>
              <p className={styles.project__p}>Пространство довольно аскетичное без ярких элементов, которые перегружали бы интерьер. Но интересные акценты здесь также присутствуют — светильники Superloop Midispy On и комбинация светильников Nowodworski Soft. Светильники Nowodworski мы использовали и для освещения рабочих столов сотрудников. Дизайнер проекта придумал, как обыграть минималистичный светильник, создав уникальную и запоминающуюся инсталляцию.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/03_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/03_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/09_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/09_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/17_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/17_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/11_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/11_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/20_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/20_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн офиса руководителя</h2>
              <div>
              <p className={styles.project__p}>Здесь главное — архитектура здания. Колонны и наклонное панорамное остекление стали вдохновением для создания концепции этого пространства. То, что могло показаться ограничением, стало главной фишкой. Кресла в кабинете — of Course Manager, столы той же модели, что и остальных сотрудников — Bono Office Set.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/15_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/15_ofis-pobediteley.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-pobediteley/18_ofis-pobediteley.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-pobediteley/18_ofis-pobediteley.jpg"
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
                  src="../../../images/partners/openini.jpg"
                  alt=""
                  />
                }
                text="Салон напольных покрытий и дверей"
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
                  src="../../../images/partners/cosmorelax.jpg"
                  alt=""
                  />
                }
                text="Магазин дизайнерских предметов" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/alutex.jpg"
                  alt=""
                  />
                }
                text="Алюминиевые профильные системы" 
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
export default OfisPobediteley