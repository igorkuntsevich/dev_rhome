import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const HotelUzbekistan = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера отеля в Узбекистане - RHOME"} description={""}
        location={"https://rhome.by/portfolio/commercial/hotel-uzbekistan"}
        image={"https://rhome.by/images/portfolio/hotel-uzbekistan/01_hotel-uzbekistan.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#FFE7B0"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Отель в Узбекистане"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2023"
                metr="400"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/hotel-uzbekistan/01_hotel-uzbekistan.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/hotel-uzbekistan/00_hotel-uzbekistan.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Оформить интерьер гостиницы в современном стиле."
              wishText="Нужно комплексное, проработанное решение по оформлению интерьера гостиницы. Что касается цвета, то здесь не должно быть чрезмерно ярких, кричащих оттенков, раздражающих восприятие, в приоритете сдержанные цвета: черный, серый, белый, песочный."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка, 3 этажа</h2>
            </div>
             <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/02_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/02_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/03_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/03_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/04_hotel-uzbekistan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/hotel-uzbekistan/04_hotel-uzbekistan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Архитектура</h2>
            </div>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/08_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/08_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/06_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/06_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/07_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/07_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/12_hotel-uzbekistan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/hotel-uzbekistan/12_hotel-uzbekistan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/10_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/10_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/11_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/11_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Генеральный план</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/05_hotel-uzbekistan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/hotel-uzbekistan/05_hotel-uzbekistan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/14_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/14_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/15_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/15_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/09_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/09_hotel-uzbekistan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/hotel-uzbekistan/13_hotel-uzbekistan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/hotel-uzbekistan/13_hotel-uzbekistan.jpg"
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
export default HotelUzbekistan