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
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'


const KvartiraPirs = () => {
  return (
  <Layout>
    <Seo 
      title={"Квартира в ЖК «Пирс» - RHOME"} description={"Квартира в ЖК «Пирс» дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/apartment/kvartira-pirs"}
      image={"https://rhome.by/images/portfolio/kvartira-pirs/01_kvartira-pirs.jpg"}
    />
    <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в ЖК “Пирс”"
                leader="Сергей Рассеко"
                architector="Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="октябрь 2021"
                metr="160"
                building="12 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-pirs/01_kvartira-pirs.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-pirs/00_kvartira-pirs.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-pirs/cut/13_kvartira-pirs.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-pirs/cut/05_kvartira-pirs.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-pirs/cut/08_kvartira-pirs.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-pirs/cut/22_kvartira-pirs.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-pirs/cut/15_kvartira-pirs.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Спроектировать интерьер в современном стиле для семьи из 7 человек"
              wishText="Представляем интерьер нашей квартиры в теплых белых тонах, пол и мебель из дерева натурального цвета. В отделке используйте прочные и износостойкие материалы. Детские обязательно с двухъярусными кроватями и местами для игр."
            />
          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-pirs/02_kvartira-pirs.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-pirs/02_kvartira-pirs.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Кухня, совмещенная с гостиной</h2>
            </div> 
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/03_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/03_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/04_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/04_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/06_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/06_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/05_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/05_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-pirs/09_kvartira-pirs.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-pirs/09_kvartira-pirs.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/10_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/10_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/07_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/07_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/11_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/11_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-pirs/08_kvartira-pirs.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-pirs/08_kvartira-pirs.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/12_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/12_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/14_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/14_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/13_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/13_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Мастер-спальня</h2>
            </div> 
            <a href="https://rhome.by/images/portfolio/kvartira-pirs/15_kvartira-pirs.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-pirs/15_kvartira-pirs.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/32_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/32_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/29_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/29_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/27_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/27_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/28_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/28_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/31_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/31_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Десткая комната</h2>
            </div> 

            <a href="https://rhome.by/images/portfolio/kvartira-pirs/18_kvartira-pirs.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-pirs/18_kvartira-pirs.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/16_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/16_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/17_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/17_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/19_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/19_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/22_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/22_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/23_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/23_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/20_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/20_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/25_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/25_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/26_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/26_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Реализация</h2>
            </div> 
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/33_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/33_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/35_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/35_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/34_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/34_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/36_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/36_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/37_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/37_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/38_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/38_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/39_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/39_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/41_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/41_kvartira-pirs.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-pirs/40_kvartira-pirs.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-pirs/40_kvartira-pirs.jpg"
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
                  src="../../../images/partners/stonetech.jpg"
                  alt=""
                  />
                }
                text="Мастерская камня" 
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
                  src="../../../images/partners/brunner.jpg"
                  alt=""
                  />
                }
                text="Немецкие камины" 
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
export default KvartiraPirs