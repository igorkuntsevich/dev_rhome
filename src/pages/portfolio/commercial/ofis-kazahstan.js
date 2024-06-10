import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'


const OfisKazahstan = () => {
  return (
    <Layout>
      <Seo 
        title={"Офис производственной компании в Казахстане - RHOME"} description={""}
        location={"https://rhome.by/portfolio/commercial/ofis-kazahstan"}
        image={"https://rhome.by/images/portfolio/ofis-kazahstan/01_ofis-kazahstan.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Офис в Казахстане"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2023"
                metr="200"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-kazahstan/01_ofis-kazahstan.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-kazahstan/00_ofis-kazahstan.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>

          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/ofis-kazahstan/cut/02_ofis-kazahstan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/ofis-kazahstan/cut/05_ofis-kazahstan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/ofis-kazahstan/cut/01_ofis-kazahstan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/ofis-kazahstan/cut/04_ofis-kazahstan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/ofis-kazahstan/cut/03_ofis-kazahstan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>

          <div className="wrapper">
            <ProjectTaskSergey
                taskText="Создать офис, отражающий дух и миссию компании."
                wishText="Мы хотим офис без излишеств, но с интересными деталями — в частности мы хотели бы, чтобы нашлось место для большого аквариума. Мы современная компания и ждем от интерьера соответствия нашему духу. Тем более, что офис — это лицо нашей организации."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
            </div>
             <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/02_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/02_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/03_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/03_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Атриум</h2>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/04_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/04_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/05_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/05_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/06_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/06_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/07_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/07_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/08_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/08_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Холл</h2>
            </div>

            <a href="https://rhome.by/images/portfolio/ofis-kazahstan/10_ofis-kazahstan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/ofis-kazahstan/10_ofis-kazahstan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/ofis-kazahstan/11_ofis-kazahstan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/ofis-kazahstan/11_ofis-kazahstan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/ofis-kazahstan/13_ofis-kazahstan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/ofis-kazahstan/13_ofis-kazahstan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/12_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/12_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/09_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/09_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>




            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Галерея</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/14_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/14_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/15_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/15_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Рабочие места</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/ofis-kazahstan/22_ofis-kazahstan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/ofis-kazahstan/22_ofis-kazahstan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
             <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/20_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/20_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/21_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/21_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Переговорки</h2>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/18_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/18_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/19_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/19_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/23_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/23_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Зоны отдыха</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/16_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/16_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/17_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/17_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Архитектура</h2>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/24_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/24_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/25_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/25_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/26_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/26_ofis-kazahstan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-kazahstan/27_ofis-kazahstan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-kazahstan/27_ofis-kazahstan.jpg"
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
export default OfisKazahstan