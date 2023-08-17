import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey';

const ShaleGorani = () => {
  return (
    <Layout>
      <Seo 
        title={"Шале в Горани дизайн от студии - RHOME"} description={"Шале в Горани дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/shale-gorani"}
        image={"https://rhome.by/images/portfolio/shale-gorani/01_shale-gorani.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Шале в Горани"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Евгений Сиваков"
                manager=""
                data="август 2022"
                metr="260"
                building="16 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/shale-gorani/01_shale-gorani.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/shale-gorani/00_shale-gorani.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/shale-gorani/cut/18_shale-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/shale-gorani/cut/16_shale-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/shale-gorani/cut/10_shale-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/shale-gorani/cut/21_shale-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
            <StaticImage
              src="../../../images/portfolio/shale-gorani/cut/13_shale-gorani.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Спроектировать дом и интерьер для сдачи в аренду."
              wishText="Есть участок с прекрасным видом на озеро Свирь. Нужно спроектировать дом в стиле Шале."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
            </div> 
            <div className={styles.project__two_inline + " " + styles.project__narrow_block + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/shale-gorani/02_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/02_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/03_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/03_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            </div>
            <a href="https://rhome.by/images/portfolio/shale-gorani/04_shale-gorani.webp"
            data-fancybox="gallery"
            className={styles.project__one_image_link}
            >
            <StaticImage
              src="../../../images/portfolio/shale-gorani/04_shale-gorani.jpg"
              alt=""
              className={styles.project__one_image}
            />
            </a>
            <div className="wrapper">
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Кухня, совмещенная с гостиной</h2>
            </div> 

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/shale-gorani/09_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/09_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/15_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/15_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/05_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/05_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/shale-gorani/10_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/10_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/07_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/07_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/shale-gorani/06_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/06_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/08_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/08_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/shale-gorani/13_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/13_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/16_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/16_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/14_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/14_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/shale-gorani/21_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/21_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/11_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/11_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/22_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/22_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Санузел</h2>
            </div> 
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/shale-gorani/12_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/12_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/17_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/17_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мастер спальня</h2>
            </div> 
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/shale-gorani/18_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/18_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/19_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/19_shale-gorani.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/shale-gorani/20_shale-gorani.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/shale-gorani/20_shale-gorani.jpg"
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
                  src="../../../images/partners/daskitchen.jpg"
                  alt=""
                  />
                }
                text="Салон немецкой мебели" 
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
export default ShaleGorani