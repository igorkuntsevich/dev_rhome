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
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana'


const ApartmentDepo = () => {
  return (
    <Layout>
      <Seo 
        title={"Апартаменты в центре Минска, ЖК Депо - RHOME"} description={"Современный интерьер квартиры в городском стиле"}
        location={"https://rhome.by/portfolio/apartment/apartment-depo"}
        image={"https://rhome.by/images/portfolio/apartment-depo/01_apartment-depo.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Современная квартира в Депо"
                leader="Сергей Рассеко"
                architector="Илья Горовец, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="2023"
                metr="122"
                building="7 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/apartment-depo/01_apartment-depo.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/apartment-depo/00_apartment-depo.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/apartment-depo/cut/13_apartment-depo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/apartment-depo/cut/09_apartment-depo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/apartment-depo/cut/07_apartment-depo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/apartment-depo/cut/04_apartment-depo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/apartment-depo/cut/12_apartment-depo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSvetlana
              taskText="Мне нравятся современные светлые интерьеры. В целом, в приоритете натуральные материалы (дерево, мрамор, камень) и спокойные, сдержанные цвета."
              wishText="В планировке обязательно предусмотрите спальню с отдельной гардеробной и санузлом.  Найдите место для небольшой постирочной. Гостиную можно объединить с кухней – мне нравится такой прием. И побольше мест для хранения, вещей у нас много :)"
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/apartment-depo/02_apartment-depo.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/apartment-depo/02_apartment-depo.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/apartment-depo/04_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/04_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartment-depo/05_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/05_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartment-depo/07_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/07_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/apartment-depo/06_apartment-depo.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/apartment-depo/06_apartment-depo.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Кухня, совмещенная с гостиной</h2>
            </div> 
            <a href="https://rhome.by/images/portfolio/apartment-depo/09_apartment-depo.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/apartment-depo/09_apartment-depo.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartment-depo/08_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/08_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartment-depo/10_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/10_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Коридоры</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartment-depo/03_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/03_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartment-depo/14_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/14_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мастер-спальни</h2>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartment-depo/12_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/12_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartment-depo/13_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/13_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/apartment-depo/16_apartment-depo.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/apartment-depo/16_apartment-depo.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartment-depo/15_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/15_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartment-depo/17_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/17_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/apartment-depo/18_apartment-depo.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/apartment-depo/18_apartment-depo.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartment-depo/19_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/19_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartment-depo/20_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/20_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Реализация</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/apartment-depo/21_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/21_apartment-depo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/apartment-depo/22_apartment-depo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/apartment-depo/22_apartment-depo.jpg"
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
                text="Салон интерьеров" 
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
                  src="../../../images/partners/gira.jpg"
                  alt=""
                  />
                }
                text="Розетки и выключатели" 
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
                  src="../../../images/partners/rode.jpg"
                  alt=""
                  />
                }
                text="Салон штор и текстиля" 
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
                  src="../../../images/partners/skvirel.jpg"
                  alt=""
                  />
                }
                text="Салон интерьеров" 
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
export default ApartmentDepo